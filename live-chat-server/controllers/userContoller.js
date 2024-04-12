const express = require('express');
const User = require("../models/userModel");
const expressAsyncHandler = require('express-async-handler');
const generateToken = require("../config/generateToken");
const loginController = expressAsyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name,password}= req.body;
    const user = await User.findOne({name});
    //if body is missing something
    console.log("fetched user Data", user);
    console.log(await user.matchPassword(password));
    if(user&&(await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
        console.log(response);
        res.json(response);
    }
    else{
        throw new Error("Invalid uername or password");
    }
});
const UserM = require('../models/userModel'); // Assuming you have a User model defined

// Controller function to fetch a user by ID
const fetchUserController = expressAsyncHandler (async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the userId is passed as a URL parameter
    const user = await UserM.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user); // Return user details
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

const registerController = expressAsyncHandler (async(req,res)=>{
    const {name,email,password}= req.body;
    //if body is missing something
    if(!name){
        res.status(400).send("Name is required");
    }
    if(!email){
        res.status(400).send("Email is required");
    }
    if(!password){
        res.status(400).send("Password is required");
    }

    //user Exists
    const userExist = await User.findOne({email});
    if(userExist) {
        res.status(400).send("User already exist");
    }

    //check if username already exists
    const usernameExist = await User.findOne({name});
    if(usernameExist) {
        res.status(400).send("Username already exist");
    }

    //create entry in data
    const user = await User.create({
        name,
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }else{
        res.status(400).send("Registration Error");
        throw new Error("Registration Error"); 
    }
});
const fetchAllUsersController = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await User.find(keyword).find({
      _id: { $ne: req.user._id },
    });
    res.send(users);
  });
module.exports ={registerController,loginController,fetchAllUsersController,fetchAllUsersController,
fetchUserController};