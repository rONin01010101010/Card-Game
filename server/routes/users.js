 const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/userController');
const { default: users } = require('../../models/users');

//get,post,put,delete

router.put("/create", UserController.CreateUser) 
router. post("/Profile" , UserController.ReadUser)
router.delete("/delete" , UserController.deleteUser)
router.put("/update", UserController.updateUser)    


