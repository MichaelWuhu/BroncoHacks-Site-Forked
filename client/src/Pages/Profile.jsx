import React, { useState, useEffect } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import "../styles/Profile.css";
import axios from "axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function Profile() {
  const signOut = useSignOut();
  const isAuthenticated = useIsAuthenticated();
  const [joinCode, setJoinCode] = useState("");
  const [user, setUser] = useState();
  const authUser = useAuthUser;
  const userEmail = isAuthenticated ? authUser().email : null;
  const userOnTeam = user ? user.onTeam : false;

  const fetchData = async () => {
    try {
      const ENDPOINT = "http://localhost:8080";

      if (userEmail) {
        const response = await axios.get(
          ENDPOINT + "/users/email/" + userEmail
        );
        setUser(response.data);
        console.log("User on Team: ", response.data.onTeam);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchDataAndRunCode = async () => {
      console.log("is authenticated", isAuthenticated);
      if (!isAuthenticated) {
        window.location.href = "/login";
      } else {
        await fetchData();
        console.log("Fetch data completed");
      }
    };

    fetchDataAndRunCode();
  }, [isAuthenticated, userEmail]);

  const signOutFunc = () => {
    console.log("sign out");
    signOut();
    window.location.href = "/login";
  };

  const createTeam = () => {
    console.log("create team");
  };

  const joinTeam = () => {
    console.log("join team");
  };

  const handleJoinCodeChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setJoinCode(value);
    }
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      {/* {false ? ( */}
      {userOnTeam ? (
      // {user.onTeam ? (
        <div>already on a Team</div>
      ) : (
        <>
          <div className="join-team">
            <input type="text" maxLength={25} />
            <button onClick={createTeam}>Create Team</button>
          </div>

          <div className="join-team">
            <input
              type="text"
              maxLength={6}
              value={joinCode}
              onChange={handleJoinCodeChange}
            />
            <button onClick={joinTeam}>Join Team</button>
          </div>
        </>
      )}

      <button onClick={signOutFunc}>sign out</button>
    </div>
  );
}

export default Profile;
