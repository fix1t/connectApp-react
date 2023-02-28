import React, { useState } from "react";
import Landing from "./Landing/Landing";
import Wall from "./Wall/Wall";

function App() {
// require('mongoose').connect('mongodb+srv://Gabrie1:PWS@cluster0.i33u3hs.mongodb.net/?retryWrites=true&w=majority/connectDB');

	let [authorized, setAuthorized] = useState(true);

	return (
		<div>
			{!authorized && <Landing setAuthorized={setAuthorized} />}

			{authorized && <Wall setAuthorized={setAuthorized} />}
		</div>
	);
}

export default App;
