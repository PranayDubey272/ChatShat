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


module.exports ={
    accessChat,
    fetchChats,
    fetchGroups,
    createGroupChat,
    groupExit,
}