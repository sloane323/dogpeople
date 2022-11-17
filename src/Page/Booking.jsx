
import React from "react";
import "./Css/Booking.css";
import  { useState, useEffect, useRef } from 'react';


const Booking = () => {



  const submit = (e) => {
    e.preventDefault();  //새로고침 방지
    
    };

    const onChange2 = (e) => {
      setusername(e.target.value);
    };


    const inputusername = useRef(null);

    const [username, setusername] = useState('');
    const selectList = 
    ["01", "02", "03", "04", "05"];
    const [Selected, setSelected] = useState("");
    const handleSelect = (e) => {
      setSelected(e.target.value);
    };
    const [period, setPeriod] = useState("1")
    const onPeriodChange = (e) => {
        const {value} = e.target
        setPeriod(value)}
        const periodOptions = [
          {value: "1", label:'01'},
          {value: "2", label:'02'},
          {value: "3", label:'03'},
          {value: "4", label:'04'},
          {value: "5", label:'05'},
          {value: "6", label:'06'},
      ]


      const [shotcheck, settshotcheck] = useState();
      const onClicks = (e) => {
        console.log(e.currentTarget);
        settshotcheck(e.currentTarget.value);
 
      };

      const week = ["일", "월", "화", "수", "목", "금", "토"];
      const [tab, setTab] =
      useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
      const [only,setOnly] = useState(); // 선택한 id값
      
      function dates() {
        let array2 = [];
        for (let i = 0; i < 15; i++) {
          const today = new Date();
          today.setDate(today.getDate() + i);
          const time = {
            year: today.getFullYear(), //현재 년도
            month: today.getMonth() + 1, // 현재 월
            date: today.getDate(), // 현제 날짜
          };
          const dayOfWeek = week[today.getDay()];
          const clickdate = `${time.year} / ${time.month} / ${time.date} / ${dayOfWeek} `;
    
          array2.push(
            <div className="datebox" style={{ display: "inline-block" }}  onClick={(e)=>{onClick3(e,i)}}>
              <button  className={ `${only === i  ? 'active22' : ''}` } 
               value={clickdate} id="timecheck" >
                 <br></br>  
                 {dayOfWeek} 
                  <br></br>
                  {time.year}년
                  <br></br>
                  {time.month}월{time.date}일<br></br> <br></br>
                </button>
               </div>
          );
        }
        return array2;
      }


      const [timecheck, settimecheck] = useState();


      const onClick3 = (e,id) => {
        console.log(e.currentTarget);
        settimecheck(e.currentTarget.value);
//        let arr = [];
//        for(let i = 0 ; i <15 ; i++ ) {
//          if (i != id)  
//          arr.push(tab[i]);
//          else 
//            arr.push(!tab[i]);
//        }
//        setTab(arr);
          setOnly(id);

      };
    

    return ( <div className="booking-all">      <br></br>
        <div>
      <span  className="sub-title">Booking  예약하기 </span> </div>
     <br></br><br></br>


     <form onSubmit={submit}>

    <label> 닉네임 </label>
    <input name = "username"  type="text"  placeholder="이름&닉네임을 입력해주세요"
     value={username}
     classname="textbosss" onChange={onChange2} ref={inputusername} id="namebox" 
         required />
<br></br><br></br>

     <div> <lable> 사람 </lable>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select> 명, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
            <label> 강아지  </label>
              <select 
                value={period}
                onChange={onPeriodChange} >
                {
                    periodOptions.slice(0, Selected).map(period => (
                        <option value={period.value}>{period.label}</option>
                    ))
                }
            </select>  마리 <br></br><br></br>
            </div>

            <div>
       <div className='fbig'> <label> 날짜를 선택해주세요 </label> 
        <div className='title-date' > 
        <div className="datebox2" required> {dates()} </div>    </div> </div><br></br> 
        <label> 시간을 선택해주세요 </label><br></br> 
        <button   onClick={onClicks} value={"10:00- 12:00"} id="shotcheck"> <p> 10:00- 12:00 </p> </button>
        <button className='ckeckreview' onClick={onClicks} value={"12:00- 14:00"} id="shotcheck"> <p> 12:00- 14:00 </p> </button>
  
      </div>



            <br></br>

            <button type="submit" className='ckeckreview'>예약하기</button>
      </form> 

    </div> );
}
 
export default Booking;