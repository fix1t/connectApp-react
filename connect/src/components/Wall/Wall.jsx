import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function Wall(props) {
	document.getElementById("CSS").href = "./wall.css";

	const [post, setPost] = useState([]);

	function addPost(newNote) {
		setPost((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deletePost(id) {
		setPost((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header setAuthorized={props.setAuthorized} />
			<Footer />
			<CreateArea onAdd={addPost} />
			{post.map((noteItem, index) => {
				return (
					<Note
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
