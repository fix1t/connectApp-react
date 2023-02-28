import React, { useState } from "react";
import AppIcon from "./AppIcon";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

function Landing(props) {
	document.getElementById("CSS").href = "./landing.css";

	let [login, setLogin] = useState(true);

	return (
		<div className="container">
			<AppIcon />
			<Welcome />
			{login && (
				<SignIn setLogin={setLogin} setAuthorized={props.setAuthorized} />
			)}
			{!login && (
				<SignUp setLogin={setLogin} setAuthorized={props.setAuthorized} />
			)}
		</div>
	);
}

export default Landing;
