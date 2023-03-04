 import express from "express";
 import { getPosts, addPost, deletePostById} from "../controllers/posts-controller.js";


 const router = express.Router()

 router.get("/",getPosts)
 router.post("/",addPost)
 router.post("/:id", deletePostById)


 export default router;