

import "./Css/Home.css";
import loading from '../img/main1.png';
import backing from '../img/newido.png';
import page2bac from '../img/main_s1.png';
import page3bac from '../img/main_s2.png';
import Mainphotos from "../Componment/Mainphotos";



const Home = () => {

  

    return (<div className="mainebig">
         <img src={backing} alt={`loading2`} className="backing"/>

        <div className="maintitle">
           <p><h1><b> 너와 나의 특별한 동행</b> </h1></p>
           <p> 2022년 반려견과 함께하는 부산 시티투어버스  </p>
           <p> 유기견의 아픔을 잊고, 주인과 행복한 추억 만들기  </p>
        </div>
    
        <div className="mainimgdog">
        <img src={loading} alt={`loading2`} />
        </div> 



        <div className="main2page">
        <img src={page2bac} alt={`page2`} className="page2bac"/>
        <div className="main2page-text">
        <p><h1><b> 반려견과 행복하기 위한 7가지 방법 </b> </h1></p>
           <p> 설채현 수의사가 알려주는 교감 방법  </p>
           <p> 강의 후 개별 포토 타임 진행   </p>
           </div>
        </div>

        <div className="main25page">

        </div> 

        <div className="main3page">
        <img src={page3bac} alt={`page3`} className="page3bac"/>
        <div className="main3page-text">
        <p><h1><b> 반려인을 위한 특별한 투어 이벤트  </b> </h1></p>
           <p> Pat + Family  </p>
           <p> 너와 나의 특별한 동행   </p>
           </div>
        </div>


        <div className="main4page">


        </div>


    </div>  );
}
 
export default Home;