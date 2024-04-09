const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const accessChat = asyncHandler(async (req,res)=>{
    const {userId} = req.body;
    if(!userId){
        console.error("User not found in the database");
        res.status(400).send("User not found in the database");
    }
    var isChat  = await Chat.find({isGroupChat: false,
    $and:[
        {users: {$eleMatch:{ $eq:req.user._id}}},
        {users: {$eleMatch:{ $eq: userId}}},
    ],
    }).populate("users","-password")
  .populate("latestMessage");

  isChat = await User.populate(isChat,{
    path: "latestMessage.sender",
    select: "name email",
  });

  if(isChat.length>0){
    res.send(isChat[0]);
  }
  else{
    var chatData = {
        chatName: "sender",
        isGroupChat :false,
        users: [req.user._id, userId],
    };
    try{
        const createChat = await Chat.create(chatData);
        const FullChat = await Chat.findOne({_id:createChat._id}).populate(
            "users",
            "-password",);
        res.status(200).send(FullChat);
    }
    catch(error){
        console.error(error);
        res.status(400).send(error);
    }
  }

});
const fetchChats = asyncHandler(async (req,res)=>()=>{
    try{
      Chat.find({users: {$element :{$eq: req.user.id}}})
      .populate("users","-password")
      .populate("groupAdmin","-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) =>{
        results = await User.populate(results,{
          path: "latestMessage.sender",
          select: "name email",
        });
        res.status(200).send(results);
      });
    } catch(error){
      res.status(400);
      throw new Error(error.message);
    }
});

const fetchGroups = asyncHandler(async (req,res)=>{
  try{
    const allGroups = await Chat.where("isGroupChat").equals(true);
    res.status(200).send(allGroups);
  }
  catch(error){
    res.status(400);
    throw new Error(error.message);
  }
});
