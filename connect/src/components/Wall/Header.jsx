import React from "react";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";

function Header(props) {
	return (
		<header>
			<h1>
				<OnlinePredictionIcon fontSize="large " />
				Connect
			</h1>
			<button
				onClick={() => {
					props.setAuthorized(false);
				}}>
				ClickMe
			</button>
		</header>
	);
}

export default Header;
