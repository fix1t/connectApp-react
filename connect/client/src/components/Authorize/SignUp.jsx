import React, { useState } from "react";
import InputField from "./InputField";
import PasswordPopup from "./PasswordPopup";

function SignUp(props) {
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
		} else {
			setPasswordHint(() => ({
				message: "Passwords do not match.",
				show: true,
			}));
		}
		return passwordMatch;
	}

	function handleSubmit(event) {
		authorize(user);
		// fetch('/register', {
		// 	method: 'POST',
		// 	headers: {
		// 	  'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 	  key1: 'value1',
		// 	  key2: 'value2'
		// 	})
		//   })
		// 	.then(response => response.json())
		// 	.then(data => console.log(data))
		// 	.catch(error => console.error(error))
		postData()
		event.preventDefault()

		}

	async function postData(url = "/register", data = {data:"bark"}) {
			const response = await fetch(url, {
			  method: 'POST',
			  mode: 'cors',
			  cache: 'no-cache',
			  credentials: 'same-origin',
			  headers: {
				'Content-Type': 'application/json'
			  },
			  redirect: 'follow',
			  referrerPolicy: 'no-referrer',
			  body: JSON.stringify(data)
			});
			if (response.status === 233) {
				props.setAuthorized(true)
			}
		  }
		  

		// 	var url = "http://localhost:5000/register";
	// 	var request = new XMLHttpRequest();
	// 	request.open("POST", url, true);
	// 	request.onload = function () {
	// 		// request successful
	// 		// we can use server response to our request now
	// 		console.log(request.responseText);
	// 	};

	// 	request.onerror = function () {
	// 		// request failed
	// 	};

	// 	request.send(new FormData(event.target)); // create FormData from form that triggered event
	// 	event.preventDefault();
	// }

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

				<button type="submit">Submit</button>
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
