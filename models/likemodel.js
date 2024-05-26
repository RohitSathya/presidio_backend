const mongoose = require('mongoose');

const likeSchema=mongoose.Schema({

    buyerID:{
        type:String
    },
    sellerID:{
        type:String
    },
    propertyID:{
        type:String
    },
    email:{
        type:String
    },
    lc:{
        type:Number,
        default:0
    }
})
const likemodel=mongoose.model('Like',likeSchema)
module.exports=likemodel