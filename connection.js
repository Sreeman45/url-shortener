import {mongoose} from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
async function connectdb() {
    await mongoose.connect(`${process.env.MONGO_URI}`).then(()=>console.log("database connected"))
}
export{connectdb}