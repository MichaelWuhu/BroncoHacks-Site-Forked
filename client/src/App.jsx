import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
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
import "./styles/Profile.css"; /* temporary just so it visually looks fine */

function App() {
  return (
    // <AuthProvider
    //   authType={"cookie"}
    //   authName={"_auth"}
    //   cookieDomain={window.location.hostname}
    //   cookieSecure={false} // True if only https
    // >
    // <Router>
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
          <Route path="/Error" element={<Error />} />
        </Routes>
        <div className="foot">
          <Footer />
        </div>
      </>
    //  </Router> 
    // </AuthProvider>
  );
}
export default App;
