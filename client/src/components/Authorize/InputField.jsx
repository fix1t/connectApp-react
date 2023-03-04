import React from "react";

function InputField(props) {
	function updateText(e) {
		let newValue = e.target.value;
		let attributeName = e.target.name;

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
				required
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
