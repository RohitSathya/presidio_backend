const express=require('express')

const router=express.Router()
const likecontroller=require('../controller/likecontroller')

router.post('/addlike',likecontroller.addlike)
router.post('/getlike',likecontroller.getlike)

module.exports=router