import React, { useEffect } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from 'react-auth-kit/hooks/useSignOut';

function Profile() {
  const signOut = useSignOut()
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    console.log("is authenticated", isAuthenticated);
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, [isAuthenticated]);

  const tempFunc = () => {
    console.log("sign out");
    signOut()
    window.location.href = "/login";
  };

  return (
    <div>
      <div>Profile</div>
      <button onClick={tempFunc}>sign out</button>
    </div>
  );
}

export default Profile;
