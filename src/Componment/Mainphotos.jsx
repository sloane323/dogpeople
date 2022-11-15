import React, { Component } from "react";
import Slider from "react-slick";

import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import go1 from '../img/main_01.jpg';
import go2 from '../img/main_02.jpg';
import go3 from '../img/main_03.jpg';
import go4 from '../img/main_04.jpg';

const Mainphotos = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return ( <div><br></br><br></br><br></br><br></br>

<Container>
        <StyledSlider {...settings}>
          <slick-list>
            <slick-slide><img src={go1} width="
            100%" height="250px"></img></slick-slide>
            너와 나의 
          </slick-list>

          <slick-list>
          <slick-slide><img src={go2} width="100%" height="250px"></img></slick-slide>
          행복한 일상
          </slick-list>

          <slick-list>
          <slick-slide><img src={go3} width="100%" height="250px"></img></slick-slide>
          우리가 시작한
          </slick-list>

          <slick-list>
          <slick-slide><img src={go4} width="100%" height="250px"></img></slick-slide>
          행복한 일상
          </slick-list>

        </StyledSlider>
      </Container>



<br></br><br></br><br></br>
    </div>);
}
 
export default Mainphotos;



const Container = styled.div`
    position: absolute;
  background-color: pink;
  width:94%;
  margin-left: 30px;
  margin-right: 30px;
`;

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  .slick-list {
    text-align: center;
    hight:200px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: yellow;
  }

  .slick-slide {
    padding: 1rem;
  }

  .slick-slide img {
    padding: 1rem;
    border-radius: 20%;
}


`;

