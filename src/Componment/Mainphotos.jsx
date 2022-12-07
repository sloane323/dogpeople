
import React, { Component } from "react";
import Slider from "react-slick";

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

const Mainphotos = ({ }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };


    return ( <div><br></br><br></br>

<div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>

  

          </div>
        </Slider>
      </div>



<br></br>


    </div>);
}
 
export default Mainphotos;

