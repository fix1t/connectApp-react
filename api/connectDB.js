import mongoose from "mongoose";
import env from "dotenv"
env.config();


const connectDB = () => {
	mongoose
	.connect(
		"mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.i33u3hs.mongodb.net/connectDB",
		{ useNewUrlParser: true }
	)
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB...", err));
}

export default connectDB