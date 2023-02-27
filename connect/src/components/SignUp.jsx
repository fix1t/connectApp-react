import React, { useState } from "react";
import InputField from "./InputField";
import PasswordPopup from "./PasswordPopup";

function SignUp(props) {
	let [user, setUser] = useState({
		email: "",
		password: "",
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
		let passwordMatch = user.password === user.confirmedPassword;

		console.log("Match :" + passwordMatch);
		if (passwordMatch === true) {
			console.log("Authentification successful.".toUpperCase());
			setUser({
				email: "",
				password: "",
				confirmedPassword: "",
				fName: "",
				lName: "",
			});
			setPasswordHint(() => ({
				message: "",
				show: false,
			}));
		} else {
			console.log("moow");
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
					name="password"
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
