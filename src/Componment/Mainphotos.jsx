import Slider from "react-slick";

import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        slidesToScroll: 1
      };
    return ( <div><br></br><br></br><br></br><br></br>

<Container>
        <StyledSlider {...settings}>
          <slick-list>
            <slick-slide><img src={go1} width="100%" height="450vmax" alt=""></img></slick-slide>
            <h3> A01  </h3>
            <p> #부산시 #애견사랑 #반려견</p>
            <p class="arrow_box">말풍선 등장!</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go2} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A02  </h3>
          <p> #개스타 #강아지스타그램 #강아지일상</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go3} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A03  </h3>
          <p> #부산시 #애견사랑 #반려견</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go4} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A04  </h3>
          <p> #동물복지 #유기견 #사지마세요_입양하세요 </p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go5} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A05  </h3>
          <p> #개스타 #강아지스타그램 #강아지일상</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go6} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A06  </h3>
          <p> #애완동물그램 #동물 #동물사랑</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go7} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A07  </h3>
          <p> #애견사랑 #반려동물스타그램 #사지마세요_입양하세요 </p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go8} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A08  </h3>
          <p> #부산시 #개스타그램 #멍스타그램</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go9} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A09 </h3>
          <p> #애견그램 #사지마세요_입양하세요 </p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go10} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A10  </h3>
          <p> #부산시 #애견사랑 #반려견</p>
          </slick-list>

          <slick-list>
          <slick-slide><img src={go11} width="100%" height="450vmax" alt=""></img></slick-slide>
          <h3> A11  </h3>
          <p> #댕댕이그램 #동물사랑 #강아지스타그램</p>
          </slick-list>


        </StyledSlider>
      </Container>



<br></br>
    </div>);
}
 
export default Mainphotos;



const Container = styled.div`
position: absolute;

  width:94%;
  margin-left: 30px;
  margin-right: 30px;
`;

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  .slick-list {
    text-align: center;
    height: 43em;
    margin-left: 30px;
    margin-right: 30px;
  }

  .slick-slide {
    padding: 1rem;
    overflow: hidden;
    width : 30em ;
    width : 30em ;
    font-family: 'GmarketSansMedium';
    font-size: 1.5vmax;
    text-align: center;
  }
  .slick-slide :hover {
  transform: scale(1.4);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  }

  .slick-slide img {
    border: 1rem;
    border-radius: 25%;
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
}


`;

