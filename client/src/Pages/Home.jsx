import Slideshow from "/src/Components/Slideshow.jsx";
// import { slidesData } from "../Assets/Profile/slidesData";
import DescriptionBox from "../Components/DescriptionBox";
import Countdown from "../Components/Countdown";
import "/src/styles/Home.css";
import { useState } from "react";
import Minimap from "../Components/MiniMap.jsx";

import tempImg1 from '../Assets/Profile/Slideshow/BH2024-1-02.jpg';
import tempImg2 from '../Assets/Profile/Slideshow/BH2024-1-11.jpg';
import tempImg3 from '../Assets/Profile/Slideshow/BH2024-1-57.jpg';

function Home() {
  const slidesData = [
    {
      url: tempImg1,
    },
    {
      url: tempImg2,
    },
    {
      url: tempImg3,
    },
  ];


  return (
    <>
      <div className="home-featured-container">
        <div className="home-featured-row1">
          <DescriptionBox />
          <div className="slide-wrapper">
            {/* <div className="slides"> */}
              <div className="containerStyles">
                <Slideshow slides={slidesData} />
              {/* </div> */}
            </div>
          </div>
        </div>
        <Countdown deadline="October, 31, 2024" />
        <div className="home-map">
          <div className="map-wrapper">{<Minimap></Minimap>}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
