import React from "react";

function SignIn() {
  function handleSubmit(e){
    e.preventDefault();
  }


  return (<form onSubmit={handleSubmit}>
    <input
      name="email"
      placeholder="Email"
    />
    <input
      name="password"
      placeholder="Password"
      type="password"
    />
    <button>Submit</button>
  </form>
  );
}
export default SignIn;
