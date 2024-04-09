const mongoose  = require('mongoose');

const userModel = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        ref :'Chat'
    }
},{
    timestamps: true,
});

const User = mongoose.model("User",userModel);

module.exports = User;