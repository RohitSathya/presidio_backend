const likemodel=require('../models/likemodel')
const propertymodel=require('../models/propertymodel')
const usermodel=require('../models/usermodel')
const addlike=async(req,res)=>{
    const { buyerID, sellerID, propertyID,email } = req.body;
    let like = await likemodel.findOne({ buyerID, sellerID, propertyID });
    if (like) {
        console.log('al')
        res.json({message:'f'})
        
       
    } else {
        // Create a new like
        const ch=await propertymodel.findOne({sellerId:sellerID,_id:propertyID})
        if(ch){
            const data = await likemodel.create({ buyerID, sellerID, propertyID,email, lc: 1 });
            const e=await propertymodel.findOneAndUpdate({_id:propertyID},{lc:ch.lc+1})
            res.json({message:'s'})

        }

    }

}
const getlike=async(req,res)=>{
    const{sellerID,propertyID}=req.body
    const data=await likemodel.find({sellerID:sellerID,propertyID:propertyID})
    console.log(data.length)
    var i=0
     const all=[]
    if(data){
        console.log(data.email)
        while(i<data.length){
            const finduser=await usermodel.findOne({email:data[i].email})
            console.log(finduser)
            all.push(finduser)
            
            i++

        }
        res.json({userdet:all,m:'s'})

      
    }
    else{
        res.json({m:'f'})
        
    }

}

module.exports={addlike,getlike}