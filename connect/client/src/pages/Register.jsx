import React, { useState } from "react";
import InputField from "../components/Authorize/InputField";
import AppIcon from "../components/Authorize/AppIcon";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register(props) {
	document.getElementById("CSS").href = "./landing.css";
	const navigate = useNavigate();
	var [errorMessage, setErrorMesssage] = useState(false);
	var [user, setUser] = useState({
		email: "",
		password: "",
		confPassword: "",
		fName: "",
		lName: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("auth/register", user);
			console.log(res.data);
			if (res.data.error) {
				setErrorMesssage(res.data.error);
			} else {
				setErrorMesssage(false);
				navigate("/login")
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<AppIcon />
			<h1>Sign Up!</h1>
			<form onSubmit={handleSubmit}>
				<InputField
					name="email"
					placeholder="Email"
					user={user}
					type="email"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>
				<InputField
					name="fName"
					placeholder="Enter Your First Name."
					user={user}
					type="text"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>
				<InputField
					name="lName"
					placeholder="Enter Your Last Name."
					user={user}
					type="text"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>

				<InputField
					name="password"
					placeholder="Enter Your Password."
					user={user}
					type="password"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>
				<InputField
					name="confPassword"
					placeholder="Confirm your password."
					user={user}
					type="password"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>
				{errorMessage && <p className="errormsg">{errorMessage}</p>}

				<button type="submit">Submit</button>
			</form>
			<span className="prompt">
				Already have an account?<br></br>
				<Link className="linkto" to="/login">
					Sign In
				</Link>
			</span>
		</div>
	);
}

export default Register;
