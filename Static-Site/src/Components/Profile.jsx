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
      <img className="linkedinpicture"
        src="https://cdn-icons-png.flaticon.com/256/174/174857.png"/>
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
            "https://media.licdn.com/dms/image/D5603AQFI7ZBRCOheqQ/profile-displayphoto-shrink_200_200/0/1698549537540?e=1715817600&v=beta&t=ojbaGRCop6sU6VzK6VmFyc9n0dPMdnSQPrvw2E-iL_I",
        }}
      />      <Member
      size={100}
      person={{
        name: "Tommy Phao",
        role: "Web Developer",
        linkedin: "https://www.linkedin.com/in/thomasphao/",
        picture:
          "https://media.licdn.com/dms/image/D5603AQFI7ZBRCOheqQ/profile-displayphoto-shrink_200_200/0/1698549537540?e=1715817600&v=beta&t=ojbaGRCop6sU6VzK6VmFyc9n0dPMdnSQPrvw2E-iL_I",
      }}
    />      <Member
    size={100}
    person={{
      name: "Tommy Phao",
      role: "Web Developer",
      linkedin: "https://www.linkedin.com/in/thomasphao/",
      picture:
        "https://media.licdn.com/dms/image/D5603AQFI7ZBRCOheqQ/profile-displayphoto-shrink_200_200/0/1698549537540?e=1715817600&v=beta&t=ojbaGRCop6sU6VzK6VmFyc9n0dPMdnSQPrvw2E-iL_I",
    }}
  />      <Member
  size={100}
  person={{
    name: "Tommy Phao",
    role: "Web Developer",
    linkedin: "https://www.linkedin.com/in/thomasphao/",
    picture:
      "https://media.licdn.com/dms/image/D5603AQFI7ZBRCOheqQ/profile-displayphoto-shrink_200_200/0/1698549537540?e=1715817600&v=beta&t=ojbaGRCop6sU6VzK6VmFyc9n0dPMdnSQPrvw2E-iL_I",
  }}
/>      <Member
        size={100}
        person={{
          name: "Tommy Phao",
          role: "Web Developer",
          linkedin: "https://www.linkedin.com/in/thomasphao/",
          picture:
            "https://media.licdn.com/dms/image/D5603AQFI7ZBRCOheqQ/profile-displayphoto-shrink_200_200/0/1698549537540?e=1715817600&v=beta&t=ojbaGRCop6sU6VzK6VmFyc9n0dPMdnSQPrvw2E-iL_I",
        }}
      />
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
