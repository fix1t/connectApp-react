import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User-model.js";

export const register = async (req, res) => {
	const { fName, lName, email, password, confPassword } = req.body;
	//check if user already exists
	const user = await User.findOne({ email: email });
	if (user) {
		return res.json({
			error: "User with this email already exists.",
		});
	}

	//check match
	if (password !== confPassword) {
		return res.json({
			error: "Passwords dont match.",
		});
	}

	//check criteria for password upper,lower,number..
	var passwordCriteria = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$"
	);
	var metCriteria = passwordCriteria.test(password);
	if (metCriteria === false) {
		return res.json({
			error:
				"Password must contain uppercase,lowercase, number and must be at least 6 characters long.",
		});
	}

	//hash password & create new user
	bcrypt.hash(password, 10, function (err, hashedPass) {
		if (err) {
			return res.json({
				error: err,
			});
		}

		let user = new User({
			firstName: fName,
			lastName: lName,
			email: email,
			password: hashedPass,
		});
		user
			.save()
			.then(() => {
				res.json({ message: "User successfully added" });
			})
			.catch((error) => {
				res.json({ error: "Internal error saving user in database." });
			});
	});
};

export const login = (req, res) => {
	var { email, password } = req.body;

	User.findOne({ email: email }).then((user) => {
		if (user) {
			bcrypt.compare(password, user.password, function (err, result) {
				if (err) {
					res.json({ error: err, message: "Wrong email or password" });
				} else if (result) {
					const token = jwt.sign({ id: user.id }, "jwtkey");
					//send back user infromation
					const { firstName, _id, lastName, email } = user;
					res.cookie("access_token", token, { httpOnly: true }).json({
						firstName: firstName,
						id: _id,
						lastName: lastName,
						email: email,
					});
				} else {
					res.json({
						error: "Wrong email or password.",
					});
				}
			});
		} else {
			res.json({
				error: "User not found!",
			});
		}
	});
};

export const logout = (req, res) => {
	res.clearCookie("access_token").json("User logged out.");
};
