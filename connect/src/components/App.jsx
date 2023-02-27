import React from "react";
import AppIcon from "./AppIcon";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

function App() {
  let login = true;
  return (
    <div className="container">
      <AppIcon />
      <Welcome />
      {login && <SignIn />}
      {!login && <SignUp />}
    </div>
  );
}

export default App;
