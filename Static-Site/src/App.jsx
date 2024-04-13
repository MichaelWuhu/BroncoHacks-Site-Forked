import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import '../src/App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home.jsx'
import FAQ from './Pages/FAQ'
import MeetTheTeam from './Pages/MeetTheTeam'
import Sponsors from './Pages/Sponsors'
import Profile from "./Components/Profile.jsx"
import Footer from './Components/Footer.jsx'
import "./styles/Profile.css"; /* temporary just so it visually looks fine */
import Countdown from "./Components/Countdown.jsx";
import DescriptionBox from "./Components/DescriptionBox.jsx";

function App() {
  return (
    <Router>
      <div className="navbar">
        <NavBar/>
      </div>
      <Countdown deadline="October, 31, 2024" />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/MeetTheTeam" element={<MeetTheTeam/>}/>
          <Route path="/Sponsors" element={<Sponsors/>}/>
      </Routes>
      <div className="foot">
        <Footer/>
      </div>
    </Router>
  )
}
export default App;