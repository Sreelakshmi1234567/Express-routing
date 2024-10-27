const mongoose=require('mongoose')
const Userschema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    age:{
        type: String
    }

})
const Usermodel=mongoose.model('Routing',Userschema)
module.exports=Usermodel