import "../styles/Profile.css"; /* temporary just so it visually looks fine */

function Profile({ person }) {
  return (
    <div className="profile">
      <img
        className="profilepicture"
        src={person.picture}
        alt={"Picture of" + person.name}
      />
      <div className="profilebody">
        <name>{person.name}</name>
        <role>{person.role}</role>
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

export default Profile;
