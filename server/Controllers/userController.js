const {QueryTypes} = require('sequelize')
const { sequelize } = require('../../models');
const { User } = require('../../models/users')
const { validationResult } = require('express-validator') //cleans and sanitizes data given by the user 


exports. CreateUser = async(req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    try{ 
    
        if(validationResult.body(email).isEmail() == false) {
        res.status(400).json({error: "Email format is not valid"});
        }
 
    const user = await new User.Create({
        name: name , 
        email: email,
        where: {
        name: null, 
        email: null
        }
    })
      res.status(200).json({message: "User created successfully", data: user}); 
    
    }catch(error){
      res.json({'Failed to create user' : error})
    }
}  

exports.ReadUser = async(req, res) => {
    const {Id} = req.query; 
    const user = await new User.findByPk(User.Id) 
   
    try{
    //could have used where clause instead of this if statement 
    if(user == null || user.isLoggedin == false) {
        res.json({error: "User doesn't exist or is not logged in"}) 
    } 
    
    res.status(200).json(user); 
}catch(error){
    res.json({"User not found": error})
}
} 

exports.updateUser = async(req, res) => {
   
    const {Id,email,name} = req.body; 
     
    //association between game and user 
    //to update score based on if user has won game or not 
    //check if user is in an active game 
    //then check if the user has finished cards first 
    //all this to be done in the game controller 
     try {
   
        if(validationResult.body(email).isEmail() == false) {
        res.status(400).json({error: "Email format is not valid"});
        }
   
         const user = await new User.update(
        {
            name:name,
            email:email
        }, 
        {where : {id: Id} //include user id in routing for users 
        })

      res.status(200).json(user)
    }catch(error){
      res.json({"Failed to update user": error})
    }
}

exports.deleteUser = async(req,res) => {
  
  const { id } = req.body 
  
  try{ 
   
   const User = new User; 
   
   await User.destroy({
    where: {Id : id} //where the user id is the id in the req body 
   })
   
   res.status(200).json({message: "User successfully deleted"})

  }catch(error){

  }
 

} 
