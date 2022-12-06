

import "./Css/Home.css";
import loading from '../img/main1.png';
import backing from '../img/newido.png';
import page2bac from '../img/main_s1.png';
import page3bac from '../img/main_s2.png';
import Mainphotos from "../Componment/Mainphotos";
import Logo from "../Componment/Logo";
import { useNavigate } from "react-router-dom";


const Home = () => {

   const navigate = useNavigate();

   const godogway = () => {
      navigate("/dogway");
    };
  
    const doschool = () => {
      navigate("/school");
    };

    return (<div className="mainebig">
         <img src={backing} alt={`loading2`} className="backing"/>

        <div className="maintitle">
           <p><h1><b> 너와 나의 특별한 동행</b> </h1></p>
           <p> 2022년 반려견과 함께하는 부산 시티투어버스  </p>
           <p> 유기견의 아픔을 잊고, 주인과 행복한 추억 만들기  </p>
        </div>
    
        <div className="mainimgdog">
        <img src={loading} alt={`loading2`} className="dogphoto"/>
        </div> 



        <div className="main2page">
        <img src={page2bac} alt={`page2`} className="page2bac"/>
        <div className="main2page-text">
         <p>반려견과 행복하기 위한</p>
        <p><h2><b>  7가지 방법 </b> </h2></p>
           <p> 수의사가 알려주는 교감 방법  </p>
           <p> 개별 포토 타임 진행   </p>
           <div> 
           <button type="submit" className='ckeckreview2' onClick={godogway} >  상세보기</button>
           </div>
           </div>
          
        </div>

        <div className="main25page">

        </div> 

        <div className="main3page">
        <img src={page3bac} alt={`page3`} className="page3bac"/>
        <div className="main3page-text">
         <p>반려동물시민학교</p>
        <p><h1><b> 우리 학교가자  </b> </h1></p>
           <p> 이웃갈등을 예방하고 </p><p> 행복한 생활을 위하여 </p>
           <p> 사회화ㆍ예절교육, 행동교정교육 </p>
           <div>  <button type="submit" className='ckeckreview2' onClick={doschool}  >상세보기</button> </div>
           </div>
        </div>


        <div className="main4page">
        <Mainphotos className="main4page2"/>
        </div>

       
    </div>  );
}
 
export default Home;