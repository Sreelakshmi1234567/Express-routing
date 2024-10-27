const express=require('express');
const router=express.Router();
const usermodel=require('../new/User.js');

router.post('/',async(req,res)=>{
    const{name,email,age}=req.body;
    try{
        const newuser=await usermodel.create({name,email,age});
        res.status(201).json(newuser);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
})
router.get('/',async(req,res)=>{
    try{
        const users=await usermodel.find();
        res.status(200).json(users)
    }
    catch(error){
        res.status(401).json({error:error.message})
    }
});

//Retrieve one user data for updation
router.get('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const updateuser=await usermodel.findById(id)
        res.status(201).json(updateuser)
    }
    catch(err){
        res.status(500).json({Error:"Server side error.Data not fetched"})
    }
})

//Update details of user
router.put('/:id',async(req,res)=>{
    try{
        const details=req.body
        const id=req.params.id
        const updateuser=await usermodel.findByIdAndUpdate(id,details,{new:true})
        if(!updateuser){
            return res.status(404).json({Error:'no users found'})
        }
        res.status(200).json({data:updateuser})

    }
    catch(err){
        res.status(500).json({Error:err.message})
    }

})
 //delete a user from server
 router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await usermodel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const remainingUsers = await usermodel.find();
        res.status(200).json(remainingUsers); 
    } catch (err) {
        res.status(400).json({ Error: err.message });
    }
});



module.exports =router;
