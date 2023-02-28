import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Post from "./Post";
import Footer from "./Footer";

function Wall(props) {
	document.getElementById("CSS").href = "./wall.css";

	const [posts, setPosts] = useState([]);

	function addPost(newPost) {
		setPosts((prevPosts) => {
			return [...prevPosts, newPost];
		});
	}

	function deletePost(id) {
		setPosts((prevPosts) => {
			return prevPosts.filter((postItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header setAuthorized={props.setAuthorized} />
			<Footer />
			<CreateArea onAdd={addPost} />
			{posts.map((noteItem, index) => {
				return (
					<Post
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deletePost}
					/>
				);
			})}
		</div>
	);
}

export default Wall;
