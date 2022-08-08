import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbare from "./components/NavBare";

function App() {
  return (
    <div className="App">
      <Navbare />
      <LoginButton />
      <LogoutButton />
      <UserProfile />
      {/* <main>
        <Routes>
          <Route path="/" element={<LoginButton />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main> */}
    </div>
  );
}

export default App;
