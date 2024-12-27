import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();
import { fileURLToPath } from 'url'
import { connectdb } from './connection.js'
import {router} from './routers/routes.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express()
connectdb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./views')))
app.use('',router)
export default app;
