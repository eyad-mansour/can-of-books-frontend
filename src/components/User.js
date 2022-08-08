import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated && <div>Hello {user.name}</div>;
}

export default Profile;
