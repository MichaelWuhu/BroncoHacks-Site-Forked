import React, { useState } from "react";
import axios from "axios";
import "../styles/LoginSignup.css";

function LoginBox() {
  
  // TODO: figure out how to keep track of the user's login state throughout entire portal 
  
  async function handleSubmit(event) {
    event.preventDefault();
    
    // TODO: comment out
    console.log("Login form submitted");
    console.log(event.target.email.value);
    console.log(event.target.password.value);

    const path =
      "http://localhost:8080/users/email/" + event.target.email.value;
    console.log(path);

    try {
      const response = await axios.get(path);
      const user = response.data;
      console.log("user", user);
      if (user.password === event.target.password.value) {
        console.log("Login successful");
        // TODO: rediredct to user's profile page
        window.location.href = "/";
        // Redirect to the user's profile page
      } else {
        console.log("Login failed");
        event.target.password.value = "";
        // Display an error message
      }
    } catch (err) {
      console.error("Error fetching user:", err.message);
    }
  }

  return (
    <div className="login-container">
      <h1>Welcome 🐴!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <h3>Email</h3>
          <input type="email" name="email" />
        </div>
        <div className="input-field">
          <h3>Password</h3>
          <input type="password" name="password" />
        </div>
        <div className="login-signup-container">
          <button type="submit">
            <h1>Login</h1>
          </button>
        </div>
      </form>
      <div className="switch-login-signup">
        Not a user? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default LoginBox;
