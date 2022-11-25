import React from "react";
import { useState } from "react";
import "./Css/Course.css";
import placeicon from '../img/placeicon.png';
import { MdGpsNotFixed } from "react-icons/md"; 
import { MdFmdGood } from "react-icons/md"; 

const Course = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    return ( <div>
        <br></br><br></br> <br></br><br></br>
   <div>
    <span  className="sub-title">Course 
     코스 안내 </span> </div>
     <br></br><br></br>     <br></br><br></br>

        <h1> 레드라인 특별코스</h1><br></br><br></br>
        <div className="linebox-w">   <br></br>

      
      <div className="lineboxicon">   

    
    <div  className="line1" onClick={() => {setVisible(!visible);}} > 
    <h1> 01 <br></br>부산역 </h1> <br></br>
    <div className="box_1"> <MdFmdGood className="Locationicon" /> </div>
    {visible ? 

        <div  className="showmenu">
        <div className={visible?"linebox":undefined}>  </div>
         <br></br>
        <div className="boxb"> <div className="box_12"></div> <div className="box"/> </div> 
        
        <div className="ballon">

        출발
        승차장소 : 부산역 광장 라마다앙코르호텔 앞<br></br>
        승강장 주소 : 부산광역시 동구 초량동 1202<br></br>
        지하철 : 1호선/부산역<br></br>
         </div>  </div>
     :  ""}
     </div>

    
     
     <div  className="line1" onClick={() => {setVisible2(!visible2);}} > 
    <h1> 02 <br></br>부산항 </h1> <br></br>
    <div className="box_1"> <MdFmdGood className="Locationicon" /> </div>


    {visible2 ? 
    
        <div  className="showmenu">
        <div className="linebox2">  </div> <br></br>
        <div className="boxb"> <div className="box_13"></div> <div className="box2"/> </div> 

        <div className="ballon">

        부산항의 관문 오륙도, 태종대, 신선대, 용두산공원
        등이 한눈에 바라볼 수 있는 부산항대교는 부산항 일대의
        풍경을 바꾸어 놓은 부산항을 상징하는 대표 건축물로 우아한 곡선과
        웅장한 외형은 수평선 넘어 떠오르는 일출과 조화를 이루는 새로운 명소입니다
         </div>  </div>

     :  ""}
     </div>


      
    <div  className="line1" onClick={() => {setVisible3(!visible3);}} > 
    <h1> 03 <br></br>광안리 </h1> <br></br>
    <div className="box_1"> <MdFmdGood className="Locationicon" /> </div>


    {visible3 ? 
        <div  className="showmenu">
        <div className="linebox3">  </div>
        <div className="boxb"> <div className="box_14"></div> <div className="box3"/> </div> 

        <div className="ballon">

        광안리해수욕장 전면을 가로지르는 웅장한 규모와 함께 시간대별,
        요일별, 계절별로 10만 가지 이상의 다양한 색상을 낼 수 있는
        조명시설을 갖추어 탁월한 해상경관을 연출하고 있으며,
        특히 여름 피서철 및 부산국제영화제 등 관광 특수기에는 국내외
        많은 방문객들이 찾는 대표적인 관광명소입니다.
         </div>  </div>

     :  ""}
     </div>


      
    <div  className="line1" onClick={() => {setVisible4(!visible4);}} > 
    <h1> 04 <br></br>해운대 </h1> <br></br>
    <div className="box_1"> <MdFmdGood className="Locationicon" /> </div>


    {visible4 ? 
        <div  className="showmenu">
        <div className="linebox4">  </div>
        <div className="boxb"><div className="box_15"></div> <div className="box4"/> </div> 
        
        <div className="ballon">

        부산 해운대구에 위치한 해운대
        해수욕장은 넓은 백사장과
        아름다운 해안선을 자랑하고 있으며 얕은
        수심과 잔잔한 물결로 해수욕장의 최적 조건을 갖추고 있다.
         </div>  </div>

     :  ""}
     </div>
   
    
   
        </div>



   
        <div className="linebox0">  </div>
     

     </div>
    


    <div className="footerspace"></div>

    </div> );
}
 
export default Course;