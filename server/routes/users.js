 const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController');
const { default: users } = require('../../models/users');

//get,post,put,delete

router.put("/", UserController.CreateUser) 
router. post("/:id" , UserController.ReadUser)
router.delete("/:id" , UserController.deleteUser)
router.put("/:id", UserController.updateUser)   
router.get('/' , UserController.getAllUsers) 


