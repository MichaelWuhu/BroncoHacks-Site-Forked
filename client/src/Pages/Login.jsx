
import React from 'react';
import "../styles/LoginSignup.css";
import LoginBox from '../Components/LoginBox.jsx';

function Login() {
    return (
      <div className="apply-container">
        <div className='apply-background'>
            <LoginBox />
        </div>
      </div>
    );
  }
  
  export default Login;