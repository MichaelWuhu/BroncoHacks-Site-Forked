import "../styles/DescriptionBox.css";

function DescriptionBox() {

    return (
      <>
        <div className="db-container">
          <div className="db-title-wrapper">
            <img className="db-logo" src="../src/Assets/Profile/icon/BroncoHacks_Logo.png" alt="BroncoHacks Logo"/>
            <span className="db-title">
              <h1>BroncoHacks</h1>
              <h2>California Polytechnic State University, Pomona</h2>
            </span>
          </div>
          <div className="db-content-wrapper">
            <img className="db-mascot" src="../src/Assets/DescriptionBox/imgs/cppBroncoMascot.png" alt="Bronco Mascot"/>
            <span className="db-filler"></span>
            <h4>A 24-Hour hackathon where you can showcase your skills in front of industry professionals!</h4>
          </div>
        </div>
      </>
    )
  }
  
  export default DescriptionBox