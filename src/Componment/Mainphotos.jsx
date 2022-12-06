import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Componment/Css/Mainphotos.css";


import go1 from '../img/main_01.jpg';
import go2 from '../img/main_02.jpg';
import go3 from '../img/main_03.jpg';
import go4 from '../img/main_04.jpg';
import go5 from '../img/mainph01.jpg';
import go6 from '../img/mainph02.jpg';
import go7 from '../img/mainph03.jpg';
import go8 from '../img/mainph04.jpg';
import go9 from '../img/mainph05.jpg';
import go10 from '../img/mainph06.jpg';
import go11 from '../img/mainph08.jpg'

const Mainphotos = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

    return ( <div><br></br><br></br><br></br><br></br>
<div className="imgdogsb">
<div className="imgdogs">
        <h2> 너와 나의 특별한 동행 </h2>
        <Slider {...settings}>

          <div className="slc_A">
            <div> <img src={go1} /> </div>
            <div className="hoverBox">
                <p className="p1">title</p>
                <p className="p2">내용내용내용내용</p>
          </div> </div>

          <div className="slc_A">
          <img src={go2} />
          </div>
          <div className="slc_A">
          <img src={go3} />
          </div>
          <div className="slc_A">
          <img src={go4} />
          </div>
          <div className="slc_A">
          <img src={go5} />
          </div>
          <div className="slc_A">
          <img src={go6} />
          </div>
          <div className="slc_A">
          <img src={go7} />
          </div>
          <div className="slc_A">
          <img src={go8} />
          </div>
          <div className="slc_A">
          <img src={go9} />
          </div>
          <div className="slc_A">
          <img src={go10} />
          </div>
          <div className="slc_A">
          <img src={go11} />
          </div>
        </Slider>
      </div>

      </div>
<br></br><br></br><br></br>
    </div>);
}
 
export default Mainphotos;

