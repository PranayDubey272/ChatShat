const mongoose  = require('mongoose');
const bcrypt = require("bcryptjs");
const chatModel =  mongoose.Schema({{
    chatName : {type: 'string'},
    isGroupChat : {type: 'boolean'},
    users : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref :'User'
        }
    ],
    latestMessage : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Message'
    },
    groupAdmin : {
        type: mongoose.Schema.Types.ObjectId,
        ref :'User'
    },
});

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;