import React from "react";
import Wall from "./pages/Wall";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { createBrowserRouter,  RouterProvider } from "react-router-dom";

//optimize Signup & Signin
// const authLayout = () => {
// 	return(
// 		<>
// 		<Outlet/>
// 		</>
// 	)
// }

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Login/>,
		  },
		  {
			path: "/register",
			element: <Register/>,
		  },
		  {
			path: "/login",
			element: <Login/>,
		  },
		  {
			path: "/wall",
			element: <Wall/>,
		  },
	  ]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
