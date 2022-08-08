import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

function UserProfile() {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated && <div>Hello {user.name}</div>;
}

export default UserProfile;
