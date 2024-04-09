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
app.listen(3000,console.log("listening on port 3000"));
