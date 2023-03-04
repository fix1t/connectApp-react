import React,{useContext} from "react";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/authContext.js";

function Header(props) {
	const navigate = useNavigate();
	const { logout } = useContext(AuthContext);
	return (
		<header>
			<div>
				<h1>
					<OnlinePredictionIcon fontSize="large " />
				</h1>
				<h1>Connect</h1>
			</div>
			<button
				onClick={() => {
					logout()
					navigate("/login")
				}}>
				Logout
			</button>
		</header>
	);
}

export default Header;
