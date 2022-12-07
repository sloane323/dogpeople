import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from 'swiper';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Componment/Css/Mainphotos.css";


import {  Pagination } from "swiper";


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
import go11 from '../img/mainph08.jpg';

const Mainphotos = () => {


    return ( <div><br></br><br></br>
 <div>
 <Swiper
        modules={[Autoplay, EffectCoverflow ,Pagination]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
        }}
        loop={true}
        spaceBetween={50}
        pagination={true}
        slidesPerView={4}
        className="mySwiper"
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide>
          <img src={go1} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go2} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go3} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go4} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go5} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go6} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go7} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go8} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go9} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go10} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go11} alt='1' />
        </SwiperSlide>
      </Swiper>
</div>


<div>
 <Swiper
        modules={[Autoplay, EffectCoverflow ,Pagination]}
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
        }}
        loop={true}
        spaceBetween={50}
        pagination={true}
        slidesPerView={2}
        className="mySwipermo"
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide>
          <img src={go1} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go2} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go3} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go4} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go5} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go6} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go7} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go8} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go9} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go10} alt='1' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={go11} alt='1' />
        </SwiperSlide>
      </Swiper>
</div>


<br></br>


    </div>);
}
 
export default Mainphotos;

