import mongoose from 'mongoose'
const schema=new mongoose.Schema({
    Id:{
        type:String,
        require:true,
        unique:true,
   
    },
    redirectURL:{
        type:String,
    
    },
    visithistory:[{timestamp:{type:Number},default:[]}],
     
},{timestamps:true})
export const url=new mongoose.model("urldoc",schema)

