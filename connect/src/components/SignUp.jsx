import React, { useState } from "react";
import InputField from "./InputField";

function SignUp(props) {
	let [user, setUser] = useState({
		email: "",
		password: "",
		confirmedPassword: "",
		fName: "",
		lName: "",
	});

	function authorize(user) {
		console.log(
			"User : " + user.fName + " " + user.lName + " Password : " + user.password
		);
		console.log("Authentification ...");
		setUser({
			email: "",
			password: "",
			confirmedPassword: "",
			fName: "",
			lName: "",
		});
	}

	function handleSubmit(e) {
		authorize(user);
    //create user in db
		e.preventDefault();
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
				/>
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
      <p>Already have an accout?</p> 
      <button onClick={()=>{props.setLogin(true)}}>Signup</button>
		</div>
	);
}
export default SignUp;
