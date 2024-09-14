import React, { useState } from "react";
import axios from "axios";
import "../styles/LoginSignup.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function SignupBox() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("signup button clicked");
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.confirm_password.value);

    const ENDPOINT = "http://localhost:8080";
    const path = ENDPOINT + "/users";

    if (event.target.password.value === event.target.confirm_password.value) {
      console.log("Passwords match");
      try {
        const user = await axios.post(path, {
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
        });
        console.log("successful response", user);
        event.target.reset();
        window.location.href = "/login"; // => maybe redirect to authentication page?
        // send email to user or something (idk how to do that)
      } catch (err) {
        console.error("Error creating user:", err.message);
        event.target.password.value = "";
        event.target.confirm_password.value = "";
      }
    } else {
      console.log("Passwords do not match");
      event.target.password.value = "";
      event.target.confirm_password.value = "";
    }
  }

  return (
    <div className="login-container">
      <h1>Welcome 🐴!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <h3>Name</h3>
          <input type="text" name="name" />
        </div>
        <div className="input-field">
          <h3>Email</h3>
          <input type="email" name="email" />
        </div>
        <div className="input-field">
          <h3>Password</h3>
          <input
            type={type}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <span className="toggle-pass-view" onClick={handleToggle}>
            <Icon icon={icon} size={25} />
          </span>
        </div>
        <div className="input-field">
          <h3>Confirm Password</h3>
          <input type="password" name="confirm_password" />
        </div>
        <div className="login-signup-container">
          <button type="submit">
            <h1>Signup</h1>
          </button>
        </div>
      </form>
      <div className="switch-login-signup">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default SignupBox;
