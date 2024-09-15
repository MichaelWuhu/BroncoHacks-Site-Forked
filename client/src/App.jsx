import { Routes, Route } from "react-router-dom";
import "../src/App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home.jsx";
import FAQ from "./Pages/FAQ";
import MeetTheTeam from "./Components/MeetTheTeam.jsx";
import Sponsors from "./Pages/Sponsors";
import About from "./Pages/About.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Pages/Error.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";

function App() {
  return (
    <>
      <NavBar className="navbar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
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
