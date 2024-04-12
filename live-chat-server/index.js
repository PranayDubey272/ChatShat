const express = require("express");
const dotenv = require("dotenv");
const {default:mongoose} = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoute");
const messageRoutes = require("./routes/messageRoutes");
const chatRoute = require("./routes/chatRoute");
const { notfound, errorhandler } = require("./middleware/errorMiddleware");
const cors = require('cors');
dotenv.config();
app.use(express.json());
app.use(cors());
// console.log(mongoose.connect(process.env.mongoURI));

const connectDB  = async()=>{
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log(`Connected to MongoDB ${mongoose.connection.host}`);
    } catch (error) {
        console.log("Error in connecting ",error);
        process.exit(1);
    }
}
connectDB();

app.get("/", (req, res)=>{
    res.send("API is running..");
});

app.use("/user",userRoutes);
app.use("/chat",chatRoute);
app.use("/message",messageRoutes);

app.use(notfound);
app.use(errorhandler);
const PORT = process.env.PORT;
const server = app.listen(3000,console.log("listening on port 3000"));

const io = require( "socket.io" )(server,{
    cors:{
        origin:"*",
    },
    pingTime: 60000
});

io.on("setup",(user)=>{
    socket.join(user.data_id);
    socket.emit("connected");

socket.on("join chat",(room)=>{
    socket.join(room);
    // socket.emit("joined chat");
})

socket.on("new message",(newMessageStatus)=>{
    var chat = newMessageStatus.chat;
    if(!chat.users){
        return console.log("chat.users not defined");
    }
    chat.users.forEach((user)=>{
        if(user.id == newMessageStatus.sender._id) return;
        socket.in(user._id).emit("message received",newMessageReceived);
    });
});
});