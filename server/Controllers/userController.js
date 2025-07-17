const {QueryTypes} = require('sequelize')
const { sequelize } = require('../../models');
const { User } = require('../../models/User')
const { validationResult } = require('express-validator') //cleans and sanitizes data given by the user 


exports. CreateUser = async(req, res) => {
   
   const name = req.query.name;
    const email = req.query.email;
    try {
    // const name = req.query.name;
    // const email = req.query.email;
   const User = await Create ({
    attributes: [name, email]
   })
   
   res.status(200).json({
    "name" : name , 
    "email" : email , 
    "score" : 0 
    
   }) 
   }catch(error){
    if(await findOne({
        where : {
          attributes: ['email']  
        }
    }) == email) {
    res.status(409)
    }
 res.status(error)    
}
}  
exports.ReadUser = async(req, res) => {
   
   const {Id, name, email} = req.body //edit to either query or params after making user routes 
   
    try { 
     const Profile = await findOne({
     attributes: ['name','email','game','id'],
     where : {
     'id' : Id
    }
    })
    res.status(200).json({
    "name": name, 
    "email" : email
    })

   }catch(error){
    res.status(500)
   }
} 

exports.updateUser = async(req, res) => {

const {email, name} = req.query; 
    try {
    const updatedUser = await update({
        attributes: ['name', 'email']
    })  
  
res.status(200).json({
    "name": name, 
    "email" : email
    })

}catch(error){
res.status("User not updated",error)
}
}
exports.deleteUser = async(req,res) => {
const {email, name, Id } = req.body 

try { 
    const user = await destroy({
        attributes: ["email", "user"]
    })

res.status(200)
}
catch(error){
res.status("Operation not complete" , error)
}
}