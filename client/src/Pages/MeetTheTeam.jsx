import "/src/styles/MeetTheTeam.css";
// import "/src/styles/Profile.css";
import OrganizerProfile from "/src/Components/OrganizerProfile";
import profileData from "../Assets/Profile/profileData";
import { useState } from "react";

function MeetTheTeam() {
  const [selectedRole, setSelectedRole] = useState("All");

  const selectTeam = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team">
        <h1>Meet the Team</h1>
        <div>
          <button onClick={() => selectTeam("All")}>All</button>
          <button onClick={() => selectTeam("Primary Organizer")}>
            Primary Organizers
          </button>
          <button onClick={() => selectTeam("Website Developer")}>
            Website Developers
          </button>
          <button onClick={() => selectTeam("UI/UX")}>UI/UX</button>
          <button onClick={() => selectTeam("Application Portal Developer")}>
            Application Portal Developers
          </button>
          <button onClick={() => selectTeam("Extra Help")}>Extra Help</button>
        </div>
      </div>
      
      
      {/* <div>temp</div> */}
      <div className="profilegrid">
        {profileData
          .filter(
            (person) =>
              selectedRole === "All" || person.role.includes(selectedRole)
          )
          .map((person, index) => (
            <div key={index}>
              <div className="person">
                <OrganizerProfile person={person} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MeetTheTeam;
