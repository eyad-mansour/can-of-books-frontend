import { useAuth0 } from "@auth0/auth0-react";
function About() {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated && <h2>this is the about page</h2>;
}

export default About;
