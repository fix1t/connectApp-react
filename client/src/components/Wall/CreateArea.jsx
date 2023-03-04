import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
	const [isExpanded, setExpanded] = useState(false);
	const { currentUser } = useContext(AuthContext);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd({
			...note,
			date: new Date(),
			author: currentUser?.email,
			uid: currentUser?.id,
		});
		setNote({
			title: "",
			content: "",
			author: currentUser?.email,
			uid: currentUser?.id,
		});
		event.preventDefault();
	}

	function expand() {
		setExpanded(true);
	}

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						required
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}

				<textarea
					name="content"
					onClick={expand}
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
