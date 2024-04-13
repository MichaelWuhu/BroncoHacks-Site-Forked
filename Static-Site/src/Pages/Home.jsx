import Slideshow from '/src/Components/Slideshow.jsx';
import { slidesData } from "../Assets/Profile/slidesData";
import DescriptionBox from '../Components/DescriptionBox';
import '/src/styles/Home.css'

function Home() {

    return (
      <>
        <DescriptionBox/>
        <div classname="slides">
          <div className="containerStyles">
            <Slideshow slides={slidesData}/>
          </div>
        </div>
      </>
    )
  }
  
  export default Home;