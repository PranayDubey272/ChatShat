const express = require('express');
const User = require("../models/userModel");
const expressAsyncHandler = require('express-async-handler');
const loginController = ()=>{};
const generateToken = require("../config/generateToken");
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

module.exports ={registerController,loginController};