import "../styles/DescriptionBox.css";

function DescriptionBox() {

    return (
      <>
        <div className="descbox-container">
          <div className="descbox-title-wrapper">
            <img className="descbox-logo" src="../Static-Site/src/Assets/Profile/icon/BroncoHacks_Logo.png" alt="BroncoHacks Logo"/>
            <span className="descbox-title">
              <h1>BroncoHacks</h1>
              <h2>California Polytechnic State University, Pomona</h2>
            </span>
          </div>
          <div className="descbox-content-wrapper">
            <img className="descbox-mascot" src="../Static-Site/src/Assets/DescriptionBox/imgs/cppBroncoMascot.png" alt="Bronco Mascot"/>
            <span className="descbox-filler"></span>
            <h4>A 24-Hour hackathon where you can showcase your skills in front of industry professionals!</h4>
          </div>
        </div>
      </>
    )
  }
  
  export default DescriptionBox