
let mongoose=require('mongoose');
let FarmerSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

let FarmerModel=new mongoose.model('milk',FarmerSchema)
module.exports=FarmerModel;