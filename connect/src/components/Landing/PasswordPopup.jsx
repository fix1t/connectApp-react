import React from "react";

function PasswordPopup(props) {
	return (
		<div className="popup">
			<p className="hint">{props.message}</p>
		</div>
	);
}

export default PasswordPopup;
