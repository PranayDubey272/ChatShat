const express = require("express");
const dotenv = require("dotenv");
const {default:mongoose} = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoute");

dotenv.config();
app.use(express.json());

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

const PORT = process.env.PORT;
app.listen(3000,console.log("listening on port 3000"));
