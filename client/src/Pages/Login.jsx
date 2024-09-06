
import React from 'react';
import "../styles/LoginSignup.css";
import LoginBox from '../Components/LoginBox.jsx';

function Login() {
    return (
      <div className="apply-container">
        <div className='apply-background'>
            <LoginBox />
        </div>
        {/* <div className="faq-background">
          <div className="title-container">
            <h1 className="faq-title">FAQ</h1>
          </div>
          <div className="faq-column">
            {faqs.map((faq, index) => (
              <FAQBoxes
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div> */}
      </div>
    );
  }
  
  export default Login;