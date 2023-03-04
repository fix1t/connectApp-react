import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import connectDB from "./connectDB.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 5000;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
