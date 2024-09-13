import React, { useEffect } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

function Profile() {
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    console.log("is authenticated", isAuthenticated);
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, [isAuthenticated]);
  return <div>PROFILE</div>;
}

export default Profile;
