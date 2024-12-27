import express from 'express'
const router=express.Router()
import {requireurl,redirect,drop,html} from '../controlllers/index.js'


router.post('/url',requireurl)
router.get('/delete/:num',drop)
router.get('/:Id',redirect)


export{
    router
}