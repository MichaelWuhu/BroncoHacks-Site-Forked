import "../styles/Profile.css"; /* temporary just so it visually looks fine */

function Member({ person }) {
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

function ProfileProps() {
  return (
    <>
    
      <Member
        size={100}
        person={{
          name: "Tommy Phao",
          role: "Web Developer",
          linkedin: "https://www.linkedin.com/in/thomasphao/",
          picture:
            "../src/Assets/Profile/team/Tommy.jpg",
        }}/>
        
    </>
  );
}

function Profile() {
  return (
    <div className="container">
      <h2>Meet the Team!</h2>
      <div className="profilegrid">
        <ProfileProps />
      </div>
    </div>
  );
}

export default Profile;
