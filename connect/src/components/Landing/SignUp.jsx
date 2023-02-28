import React, { useState } from "react";
import { redirect } from "react-router-dom";
import InputField from "./InputField";
import PasswordPopup from "./PasswordPopup";

function SignUp(props) {

	const navigateTo = redirect();


	let [user, setUser] = useState({
		email: "",
		newPassword: "",
		confirmedPassword: "",
		fName: "",
		lName: "",
	});

	let [passwordHint, setPasswordHint] = useState({
		message: "",
		show: false,
	});

	function authorize(user) {
		console.log(
			"User : " + user.fName + " " + user.lName + " Password : " + user.password
		);
		console.log("Authentification ...");

		let passwordMatch = user.newPassword === user.confirmedPassword;

		if (passwordMatch === true) {
			console.log("Authentification successful.".toUpperCase());
			setUser({
				email: "",
				newPassword: "",
				confirmedPassword: "",
				fName: "",
				lName: "",
			});
			setPasswordHint(() => ({
				message: "",
				show: false,
			}));

			navigateTo("/wall");
			
		} else {
			setPasswordHint(() => ({
				message: "Passwords do not match.",
				show: true,
			}));
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		//create user in db
		authorize(user);
	}

	return (
		<div>
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
					name="newPassword"
					placeholder="Enter Your Password."
					user={user}
					type="password"
					setUser={setUser}
					handleSubmit={handleSubmit}
					setPasswordHint={setPasswordHint}
				/>

				{passwordHint.show && <PasswordPopup message={passwordHint.message} />}

				<InputField
					name="confirmedPassword"
					placeholder="Confirm your password."
					user={user}
					type="password"
					setUser={setUser}
					handleSubmit={handleSubmit}
				/>

				<button>Submit</button>
			</form>
			<p className="prompt">Already have an accout?</p>
			<button
				onClick={() => {
					props.setLogin(true);
				}}>
				Sign In
			</button>
		</div>
	);
}
export default SignUp;
