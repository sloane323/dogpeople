import { useNavigate } from "react-router-dom";
import "./Css/dogway.css";

const School = () => {

const uid = Math.random().toString(36).substring(2, 12);
     

    return ( <div className="schoolbig">
<br></br><br></br>
<h1> 부산시반려동물복지문화센터 </h1>
<img src="https://modo-phinf.pstatic.net/20171014_263/1507908281192HGPtH_JPEG/mosaAe7tjA.jpeg?type=f530_353" style={{width:"100%" , height:"100%"}} ></img>
<br></br>
<p> "사람과 동물이 함께 행복한 동물사랑 선진도시 부산"을 만들겠다는 부산광역시 비전에 따른 「부산광역시 제1호 반려동물 복지·문화센터」입니다. 2개층 200㎡규모의 반려견·반려묘 입양센터로 예방접종부터 행동교정, 미용, 상담 등 세심한 입양절차로 안락사 위기에 처한 유기동물들을 새로운 가족 품으로 인도합니다.</p>

<br></br>
<button type="submit" className='ckeckreview2' onClick={() => window.open('https://busanani.modoo.at/', '_blank')} >  바로가기 </button>

   
<br></br><br></br>
    </div> );
}
 
export default School;