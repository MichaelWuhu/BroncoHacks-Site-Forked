
import React from 'react';
import '../styles/Apply.css';
import Login from '../Components/Login.jsx';

function Apply() {
    return (
      <div className="apply-container">
        <div className='apply-background'>
            <Login />
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
  
  export default Apply;