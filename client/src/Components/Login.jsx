import React from "react";
import "../styles/Apply.css";

function Login() {

    const login_temp = () => {
        console.log('Login button clicked');
    }

  return (
    <div className="login-container">
      <h1>Welcome 🐴!</h1>
      <div className="input-field">
        <h3>Email</h3>
        <input type="text" name="email" />
      </div>
      <div className="input-field">
        <h3>Password</h3>
        <input type="text" name="password" />
      </div>
      <div className="login-signup-container">
        <button onClick={login_temp}>
          <h1>Login</h1>
        </button>
        <div>
          Not a user? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
