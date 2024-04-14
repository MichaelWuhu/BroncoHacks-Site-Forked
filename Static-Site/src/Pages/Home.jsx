import Slideshow from '/src/Components/Slideshow.jsx';
import { slidesData } from "../Assets/Profile/slidesData";
import DescriptionBox from '../Components/DescriptionBox';
import Countdown from '../Components/Countdown';
import '/src/styles/Home.css'

function Home() {

    return (
      <>
        <DescriptionBox/>
        <div className="slides">
          <div className="containerStyles">
            <Slideshow slides={slidesData}/>
          </div>
        </div>
        <Countdown deadline="October, 31, 2024" />
      </>
    )
  }
  
  export default Home;