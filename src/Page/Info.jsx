import "./Css/Info.css";
import phto from '../img/pht.png';
import bags from '../img/bags.gif';
import { Link, Outlet } from "react-router-dom";
const Info = () => {
    return ( <div>
<br></br><br></br>

<div>
    <span  className="sub-title">Introduce 
     행사 안내 </span> </div>
     <br></br><br></br>
     
<div className="infotit"> 

    <h1> 우리의 가/족 입니다.</h1>
<p>반려견(유기견)을 입양해 키우는 사람들을 위한</p>
<p>특별한 여행 ‘너와 나의 특별한 동행’</p>
</div>
<img src={phto} alt={`phto`} className="phto"/>
<div> 

<div className="infotext"> 

<div className="infotext-tit"> 
<h2> 당신을 초대합니다. </h2>
</div>


<p>일자 : ~ 2022년 12월 31일까지</p>
<p>장소 : 부산 시티투어 레드라인 특별코스 및 해운대</p>
<p>대상 : 반려견(유기견)을 키우고 계신 반려인</p>
<p>모집인원 : 시간당 20팀 (반려인 20명/반려견 20마리 ) </p>
<p>신청방법 : 사이트를 통한 예약 </p>
<p>신청마감 : 투어 24시간 이내</p>
<p>참가비 : 무료</p>


</div>

<div className="info-foot">
<img src={bags} alt={`bags`} className="bags"/>
</div>
<div className="info-footbox"></div>
<div> 

<button> <Link to='/info/course' > 코스로보기     </Link> </button>
<button>  <Link to='/info//place'>  장소로보기     </Link> </button>

</div>
<Outlet />



<div className="info-footbox"></div>
</div>

    </div> );
}
 
export default Info;