import React from "react";

function InputField(props) {
	function updateText(e) {
		let newValue = e.target.value;
		let attributeName = e.target.name;

		//check criteria for password upper,lower,number..
		if (attributeName === "newPassword") {
			let passwordCriteria = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$");
			console.log(newValue);
			let metCriteria = passwordCriteria.test(newValue.toString());
			console.log(metCriteria);
			if (metCriteria === false) {
				props.setPasswordHint(()=>({
					message:"Password must contain uppercase,lowercase letter, number and must have at least 6 characters.",
					show: true,
				}));
			} else {
				props.setPasswordHint(()=> ({
					message: "",
					show: false,
				}));
			}
		}

		//set value..
		props.setUser((previous) => {
			return { ...previous, [attributeName]: newValue };
		});
	}

	function handleEnter(e) {
		if (e.keyCode === 13) {
			props.handleSubmit(e);
		}
	}

	//update only current input value
	let { [props.name]: value } = props.user;

	return (
		<div>
			<input
				name={props.name}
				placeholder={props.placeholder}
				value={value}
				type={props.type}
				onChange={updateText}
				onKeyDown={handleEnter}
			/>
		</div>
	);
}

export default InputField;
