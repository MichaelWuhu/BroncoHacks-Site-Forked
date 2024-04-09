import "../styles/Profile.css"; /* temporary just so it visually looks fine */
import PropTypes from "prop-types";

function Profile(props) {
const person = props.person;

  return (
    <div className="profile">
      <img
        className="profilepicture"
        src={person.picture}
        alt={"Picture of" + person.name}
      />
      <div className="profilebody">
        <name>{person.name}</name>
        { <div className="roles">
          {person.role.map((role, index) => (
            <role key={index}>{role}</role>
          ))}
        </div> }
      </div>
      <a href={person.linkedin}>
        <img
          className="linkedinpicture"
          src="../src/Assets/Profile/icon/linkedin-small.png"
        />
      </a>
    </div>
  );
}

Profile.propTypes = {
  person: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default Profile;
