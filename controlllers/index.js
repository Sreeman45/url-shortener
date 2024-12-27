
import {url} from "../models/model.js"; 
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function generateRandomString(n) {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * str.length);
    randomString += str[random];
  }
  return randomString;
}
const requireurl = async (req, res) => {
  if (!req.body.url) {
    return res.status(400).json("Please enter a URL.");
  }

  try {
  
    let isUnique = false;
    let randomId;

    while (!isUnique){
      randomId = generateRandomString(6); 
      const existingDoc = await url.findOne({ Id: randomId });
      if (!existingDoc) {
        isUnique = true;
      }
    }
     await url.create({
      Id: randomId,
      redirectURL: req.body.url,
      visithistory: []
    });

    return res.status(200).json({shorturl:`https://url-shortener-omega-gray.vercel.app/${randomId}`});
  } catch (err) {
    console.error("Error creating URL:", err);
    res.send(err)
};
}
const redirect=async(req,res)=>{
    try{
      const {Id}=req.params
      const entry=await url.findOne({Id})
      if (!entry) {
        return res.status(404).send('URL not found');
      }
      res.redirect(entry.redirectURL)
    }
    catch(err){
      res.send(err)
    }
}
const drop=async(req,res)=>{
      const {num}=req.params
      const sort=await url.find().sort({createdAt:1}).limit(num)
      const deleteids=sort.map((i)=>i._id)
       await url.deleteMany({_id:{$in:deleteids}})
       const a='hi babes';
       res.end(a);
    
}
export{requireurl,redirect,drop}
