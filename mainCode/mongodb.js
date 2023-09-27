var mongoose=require('mongoose');
var url="mongodb://localhost:27017/";

mongoose.connect(url).then((val)=>{
    console.log("connected")
}).catch((err)=>{
    console.log("not connected")
})

var mongoSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }
})
var collection=mongoose.model('userData',mongoSchema)
module.exports=collection