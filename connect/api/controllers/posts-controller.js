import Post from "../models/Posts-model.js";

export const getPosts = async (req, res) => {
	const limit = req.query.limit;
	await Post.find({})
		.sort({ date: "descending" })
		.limit(limit)
		.then((foundPosts) => {
			res.json({ posts: foundPosts });
		});
};

export const addPost = (req, res) => {
	const { title, content, date ,author, uid} = req.body;
	if (!title) {
		return res.json({
			error: "Post requires a title"
		})
	}
	let post = new Post({
		title: title,
		content: content,
		date: date,
		author: author,
		uid:uid
	});
	post
		.save()
		.then(() => {
			res.json({ message: "post successfully added" });
		})
		.catch((error) => {
			res.json({ error: "Internal error saving post in database." });
		});
};

export const deletePostById = async (req, res) => {
	const postId = req.params.id;
	console.log(postId);
	try {
		const deletedPost = await Post.findByIdAndRemove(postId);
		if (!deletedPost) {
			return res.status(404).json({ message: "Post not found" });
		}
		return res.status(200).json({ message: "Post deleted successfully" });
	} catch (error) {
		console.error("error");
		return res.status(500).json({ message: "Server error" });
	}
};
