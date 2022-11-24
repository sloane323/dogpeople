import React from "react";
import { useState } from "react";
import "./Css/Course.css";
import placeicon from '../img/placeicon.png';


 


const Course = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);

    return ( <div>
        <br></br><br></br> <br></br><br></br>
   <div>
    <span  className="sub-title">Course 
     코스 안내 </span> </div>
     <br></br><br></br>     <br></br><br></br>

        <h1> 레드라인 특별코스</h1>
        <div className="linebox-w">   <br></br>


     <div className="lineboxicon">  
     <div>  
     <img src={placeicon} width="20%" onClick={() => {setVisible(!visible);}} />
     {visible ? <div> <br></br><br></br> 01 부산역 </div> :  ""}    </div>
     <div> 
        <img src={placeicon} width="20%" onClick={() => {setVisible2(!visible2);}} /> 
        {visible2 ? <div>  <br></br><br></br>02 부산항 </div> :  ""}    </div>

    <div> 
         <img src={placeicon} width="20%" onClick={() => {setVisible3(!visible3);}} /> 
         {visible3 ? <div><br></br><br></br>03  광안리 </div> :  ""} </div>
    <div> 
        <img src={placeicon} width="20%" onClick={() => {setVisible4(!visible4);}} /> 
        {visible4 ? <div><br></br><br></br>04 해운대 </div> :  ""} </div>
    <div> 
        <img src={placeicon} width="20%" onClick={() => {setVisible5(!visible5);}} />    
        {visible5 ? <div><br></br><br></br>05  부산역 </div> :  ""}  </div>

        </div>

     <div className="linebox">     </div>

     

     </div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    </div> );
}
 
export default Course;