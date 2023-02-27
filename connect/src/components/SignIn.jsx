import React, { useState } from "react";
import InputField from "./InputField";

function SignIn(props) {
	let [user, setUser] = useState({
		email: "",
		password: "",
	});

	function authorize(user) {
		console.log("User : " + user.email +" Password : "+user.password);
		console.log("Authentification ...");
		setUser({
			email: "",
			password: "",
		});
	}

	function handleSubmit(e) {
		authorize(user);
		e.preventDefault();
	}


	return (
		<div>
			<h1>Login!</h1>
			<form onSubmit={handleSubmit}>
				<InputField
					name="email"
					placeholder="Email"
					user={user}
					value={user.email}
					type="email"
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
				<button>Submit</button>
			</form>
			<p className="prompt">Dont have an account?</p>
			<button onClick={()=>{props.setLogin(false)}}>Sign Up</button>

		</div>
	);
}
export default SignIn;
