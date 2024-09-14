import "../styles/OrganizerProfile.css";
import PropTypes from "prop-types";

function OrganizerProfile(props) {
  const person = props.person;

  return (
    <div className="profile">
      <div className="profilepicture-and-linkedin">
        <a href={person.linkedin}>
          <img
            className="linkedinpicture"
            src="../src/Assets/Profile/icon/linkedin-small.png"
          />

          <img
            className="profilepicture"
            src={person.picture}
            alt={"Picture of" + person.name}
          />
        </a>
      </div>
      <div className="profilebody">
        <div className="profileheader-container">
          <h2>{person.name}</h2>
        </div>
        {
          <div className="roles">
            {person.role.map((role, index) => (
              <role key={index}>{role}</role>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

OrganizerProfile.propTypes = {
  person: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default OrganizerProfile;
