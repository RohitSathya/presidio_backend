const propertymodel = require('../models/propertymodel');

const createProperty=async(req,res)=>{
    const data=await propertymodel.create(req.body)
    res.json(data);

}
const getProperties=async(req,res)=>{
    const id=req.params.id
    const data = await propertymodel.find({sellerId:id});
    if(!data||data==''){
        res.json({message:'failed'})
    }
    else{
        res.json({data:data});

    }
   

}
const updateProperty=async(req,res)=>{
    const id=req.params.id
    const { sellerId,title,place,area,bedrooms,bathrooms,hospitalsNearby,collegesNearby}=req.body
    console.log(id,sellerId)
    const ch=await propertymodel.findOne({_id:id,sellerId:sellerId})
    if(ch){
        const upd=await propertymodel.findOneAndUpdate({_id:id},{title:title,place:place,area:area,bedrooms:bedrooms,bathrooms:bathrooms,hospitalsNearby:hospitalsNearby,collegesNearby:collegesNearby})
        res.json({message:'s'})
    }

}
const deleteProperty=async(req,res)=>{
    console.log(req.params.id,req.params.uid)
    const ch= await propertymodel.findOne({_id:req.params.id,sellerId:req.params.uid});
    if(ch){
        const del=await propertymodel.findOneAndDelete({_id:req.params.id})
        res.json({message:'s'})
    }
    

}
const sellergetproperty=async(req,res)=>{
   
    const data = await propertymodel.find();
    if(!data||data==''){
        res.json({message:'failed'})
    }
    else{
       
        res.json({data:data});

    }
   

}
module.exports={createProperty,getProperties,updateProperty,deleteProperty,sellergetproperty}

