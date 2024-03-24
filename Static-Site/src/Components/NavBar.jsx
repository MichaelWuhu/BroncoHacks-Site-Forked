import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav>
        <Link to={"../FAQ"}>FAQ </Link>
        <Link to={"../MeetTheTeam"}>Meet The Team </Link>
        <Link to={"../Sponsors"}>Sponsors </Link>
      </nav>
    )
  }
  
export default NavBar