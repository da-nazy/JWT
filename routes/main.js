const express=require('express')

const router=express.Router();

const {login,dashboard}=require('../controllers/main')
const authMiddleware=require('../middleware/auth')
// everytime someone is hitting the  dashboard route they will go through the middle ware
router.route('/dashboard').get(authMiddleware,dashboard)
router.route('/login').post(login)

module.exports=router