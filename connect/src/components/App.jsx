import React, { useState } from "react";

import Landing from "./Landing/Landing";
import Wall from "./Wall/Wall";

function App() {
	let [authorized, setAuthorized] = useState(true);

	return (
		<div>
			{!authorized && <Landing setAuthorized={setAuthorized} />}

			{authorized && <Wall setAuthorized={setAuthorized} />}
		</div>
	);
}

export default App;
