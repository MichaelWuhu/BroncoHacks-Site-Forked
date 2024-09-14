import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home.jsx";
import FAQ from "./Pages/FAQ";
import MeetTheTeam from "./Pages/MeetTheTeam";
import Sponsors from "./Pages/Sponsors";
import AboutUs from "./Pages/About.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Pages/Error.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";
import "./styles/Profile.css"; /* temporary just so it visually looks fine */
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>
      <NavBar className="navbar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}
export default App;
