import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LoginSignup.css";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

function LoginBox() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    console.log("is authenticated", isAuthenticated);
    if (isAuthenticated) {
      window.location.href = "/team";
    }
  }, [isAuthenticated]);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      "Values: ",
      event.target.email.value,
      event.target.password.value
    );

    const ENDPOINT = "http://localhost:8080";

    try {
      const res = await axios.post(ENDPOINT + "/auth/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      console.log("Response: ", res);

      console.log("Token: ", res.data.token);

      const signedIn = signIn({
        auth: { token: res.data.token, type: "Bearer" },
        // refresh: res.data.refreshToken,
        userState: { email: event.target.email.value },
      });

      console.log("signedIN", signedIn);
      console.log("is authenticated", isAuthenticated);
      console.log("Login successful");

      window.location.href = "/team";

    } catch (err) {
      console.error("Error fetching user:", err.message);
    }

    // if(isAuthenticated){
    //   // window.location.href = "/team";
    //   console.log("authenticated", isAuthenticated);
    // } else {
    //   console.log("not authenticated", isAuthenticated);
    // }
  };

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
