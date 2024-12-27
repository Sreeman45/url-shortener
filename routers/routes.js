import express from 'express'
const router=express.Router()
const router2=express.Router()
import {requireurl,redirect,drop,html} from '../controlllers/index.js'

router2.get('',html)
router.post('/url',requireurl)
router.get('/delete/:num',drop)
router.get('/:Id',redirect)


export{
    router,router2
}