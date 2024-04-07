const mongoose = require("mongoose");

const connectDB = async ()  => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log(`Connected to MongoDB ${mongoose.connection.host}`);
    } catch (error) {
        console.log("Error in connecting ",error);
        process.exit(1);
    }
};
export default connectDB;