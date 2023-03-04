import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/Wall/Header";
import CreateArea from "../components/Wall/CreateArea";
import Post from "../components/Wall/Post";
import Footer from "../components/Wall/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fab } from "@mui/material";

import { AuthContext } from "../context/authContext.js";
import { useNavigate } from "react-router-dom";

function Wall(props) {
	document.getElementById("CSS").href = "./wall.css";
	const [limit, setLimit] = useState(5);
	const [errorMessage, setErrorMesssage] = useState(false);
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const addPost = async (newPost) => {
		try {
			const res = await axios.post("posts/", newPost);
			if (res.data.error) {
				setErrorMesssage(res.data.error);
			} else {
				setLimit(limit + 1);
				setErrorMesssage(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	//render latest posts
	useEffect(() => {
		const getPosts = async () => {
			try {
				const res = await axios.get("posts/", {
					params: {
						limit: limit,
					},
				});
				setPosts(res.data.posts);
			} catch (error) {
				console.log(error);
			}
		};
		getPosts();
	}, [limit]);

	const deletePost = async (postId) => {
		try {
			console.log(postId);
			const res = await axios.post("posts/" + postId);
			if (res.data.error) {
				setErrorMesssage(res.data.error);
			} else {
				setLimit(limit -1 );
			}
		} catch (error) {
			console.log(error);
		}
	};

	if (currentUser === null) {
		navigate("/login");
	}


	return (
		<div className="page-container">
			<Header />
			<CreateArea onAdd={addPost} />
			{errorMessage && <p className="errormsg">{errorMessage}</p>}

			{posts.map((noteItem) => {
				return (
					<Post
						author={noteItem.author}
						key={noteItem._id}
						id={noteItem._id}
						uid={noteItem.uid}
						title={noteItem.title}
						date={noteItem.date}
						content={noteItem.content}
						onDelete={deletePost}
					/>
				);
			})}
			<Fab
				className="showMorePosts"
				onClick={() => {
					setLimit(limit + 5);
				}}>
				<ExpandMoreIcon />
			</Fab>
			<></>
			<Footer />
		</div>
	);
}

export default Wall;
