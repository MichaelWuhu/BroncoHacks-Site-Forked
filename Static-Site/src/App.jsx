import { useState } from "react";

import Profile from "./Components/Profile.jsx";
import "./styles/Profile.css"; /* temporary just so it visually looks fine */

function App() {
  return (
    <>
      <div>Home/Starting Page</div>
      <div className="container">
        <div className="profilegrid">
          <Profile
            person={{
              name: "Tommy Phao",
              role: "Web Developer",
              linkedin: "https://www.linkedin.com/in/thomasphao/",
              picture: "../src/Assets/Profile/team/Tommy.jpg",
            }}
          ></Profile>
        </div>
      </div>

    </>
  );
}

export default App;
