import React, { useState, useContext } from "react";
import InputField from "../components/Authorize/InputField";
import AppIcon from "../components/Authorize/AppIcon";
import Welcome from "../components/Authorize/Welcome";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../context/authContext.js";

function Login(props) {
	document.getElementById("CSS").href = "./landing.css";
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);
	var [errorMessage, setErrorMesssage] = useState(false);
	let [user, setUser] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await login(user);
			if (res.data.error) {
				console.log(res.data.error);
				setErrorMesssage(res.data.error);
			} else {
				setErrorMesssage(false);
				navigate("/wall");
			}
		} catch (error) {
			console.log("error");
		}
	};

	return (
		<div className="container">
			<AppIcon />
			<Welcome />
			<h3>Login!</h3>
			<form onSubmit={handleSubmit}>
				<InputField
					name="email"
					placeholder="Email"
					user={user}
					value={user.email}
					// type="email"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>
				<InputField
					name="password"
					placeholder="Password"
					user={user}
					type="password"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>
				{errorMessage && <p className="errormsg">{errorMessage}</p>}
				<button>Submit</button>
			</form>
			<span className="prompt">
				Dont have an account?<br></br>
				<Link className="linkto" to="/register">
					Register
				</Link>
			</span>
		</div>
	);
}
export default Login;
