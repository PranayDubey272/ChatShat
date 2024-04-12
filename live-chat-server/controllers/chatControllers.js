const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const accessChat = asyncHandler(async (req,res)=>{
    const {userId} = req.body;
    if(!userId){
        console.error("UserId param not sent with request");
        res.status(400).send("User not found in the database");
    }
    var isChat  = await Chat.find({isGroupChat: false,
    $and:[
        {users: {$elemMatch:{ $eq:req.user._id}}},
        {users: {$elemMatch:{ $eq: userId}}},
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
const fetchChats = asyncHandler(async (req,res)=>{
    try{
      const allChats = await Chat.where("users").equals(req.user._id);
      res.status(200).send(allChats);
    }
    catch(error){
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

const createGroupChat = asyncHandler(async (req,res)=>{
  if(!req.body.users || !req.body.name){
    return res.status(400).send({messag:"data is unsufficient"});
  }
  var users = JSON.parse(req.body.users);
  console.log("chatController/createGroups : ",req);
  users.push(req.user);
  try{
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });
    const fullGroupChat = await Chat.findOne({_id:groupChat._id})
    .populate(
      "users",
      "-password")
      .populate("groupAdmin","-password");

      res.status(200).send(fullGroupChat); }
      catch(error){
        res.status(400);
        throw new Error(error.message);
      }  
    });


const groupExit = asyncHandler(async (req,res)=>{
  const {chatId, userId } = req.body;
  // check if the requester is admin

  //login is yet to be made
  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  ).populate("users", "-password")
  .populate("groupAdmin","-password");
  if(!removed){
    res.status(400).send({message:"Chat not found"});
  }
  else{
    res.json(removed);
  }
});

const addSelfToGroup = asyncHandler(async (req,res)=>{
  const {chatId,userId} = req.body;

  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId},
    },
    {
      new: true,
    }
  ).populate("users", "-password")
  .populate("groupAdmin","-password");
   
  if(!added){
    req.send(400);
    throw new Error("Chat Not found");
  }
  else{
    res.json(added);
  }
})

module.exports ={
    accessChat,
    fetchChats,
    fetchGroups,
    createGroupChat,
    groupExit,
}