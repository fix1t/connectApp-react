import React, { useState } from "react";
import AppIcon from "./AppIcon";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

function App() {
  let [login, setLogin] = useState(true);
  return (
    <div className="container">
      <AppIcon />
      <Welcome />
      {login && <SignIn setLogin={setLogin}/>}
      {!login && <SignUp setLogin={setLogin}/>}

      
    </div>
  );
}

export default App;
