import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { AuthContext } from "../../context/authContext.js";

function Post(props) {
	const { currentUser } = useContext(AuthContext);

	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<span className="time">
				<p>{props.author}</p>
				<p>Posted {moment(props.date).fromNow()}</p>
			</span>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			{currentUser.id === props.uid && (
				<button onClick={handleClick}>
					<DeleteIcon />
				</button>
			)}
		</div>
	);
}

export default Post;
