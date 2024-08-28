import React from "react";
import "../styles/LoginSignup.css";

function SignupBox() {

    
  const signup_temp = () => {
    console.log("signup button clicked");
  };

  return (
    <div className="login-container">
      <h1>Welcome 🐴!</h1>
      <div className="input-field">
        <h3>Name</h3>
        <input type="text" name="name" />
      </div>
      <div className="input-field">
        <h3>Email</h3>
        <input type="text" name="email" />
      </div>
      <div className="input-field">
        <h3>Password</h3>
        <input type="text" name="password" />
      </div>
      <div className="input-field">
        <h3>Confirm Password</h3>
        <input type="text" name="confirm_password" />
      </div>
      <div className="login-signup-container">
        <button onClick={signup_temp}>
          <h1>Signup</h1>
        </button>
        <div>
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default SignupBox;
