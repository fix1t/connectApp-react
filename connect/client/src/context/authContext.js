import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = async (inputs) => {
		const res = await axios.post("/auth/login", inputs);
		if (res.data.error) {
			setCurrentUser(null);
		}else{
			setCurrentUser(res.data);
		}
		return res;
	};

	const logout = async () => {
		await axios.post("/auth/logout");
		setCurrentUser(null);
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
