const express=require('express');
const app=express();
const port=2000;

const cors =require('cors');
const {default:mongoose}=require('mongoose');
const usermodel=require('./new/User')

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/BackendRouting')
.then(()=>{
    console.log('mongodb connected succesfully');
    
})
.catch((err)=>{
    console.log('mongodb connection error',err);
    

})

//routes

const Userroutes= require('./routes/Userroutes')
app.use('/api/new/User',Userroutes)
app.use('/api/new/User/:id',Userroutes)




app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
});
