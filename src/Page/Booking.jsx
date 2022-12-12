
import React from "react";
import "./Css/Booking.css";
import  { useState,  useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Booking = () => {


     const [show, setShow] = useState(false);
 
     const handleClose = () => {
      setShow(false);
    }
     const handleShow = () => {
      setShow(true)
    }
     ;

  const submit = (e) => {
    e.preventDefault();  //새로고침 방지
    
    };

    const onChange2 = (e) => {
      setusername(e.target.value);
    };

    const inputusername = useRef(null);
    const [username, setusername] = useState('');

    const selectList =  // 사람선택 
    ["1", "2", "3", "4", "5"];

    const [Selected, setSelected] = useState("");
    const handleSelect = (e) => {
      setSelected(e.target.value);
    };


    const [period, setPeriod] = useState("1") // 강아지 선택 
    const onPeriodChange = (e) => {
        const {value} = e.target
        setPeriod(value)}
        const periodOptions = [
          {value: "1", label:'1'},
          {value: "2", label:'2'},
          {value: "3", label:'3'},
          {value: "4", label:'4'},
          {value: "5", label:'5'},
          {value: "6", label:'6'},
      ]

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
        console.log(e.currentTarget.firstChild);
        settimecheck(e.currentTarget.firstChild.value);
        setOnly(id);
      };

      const [onlys,setOnlys] = useState(); // 선택한 id값
      const [shotcheck, settshotcheck] = useState(); // 값을 읽어옴 
      
      const onClicks = (e,id) => {
        console.log(e.currentTarget.value);
        settshotcheck(e.currentTarget.value);
        setOnlys(id);
      };




      const [blist, setblist] = useState([]);
        const [bookingid, setBookingid] = useState(0);
    
    const submituu = (e) => {
        e.preventDefault(); //새로고침 방지
        handleClose(); 
        const about_blist = blist.concat({ //원래 있는 리스트에 붙여주기
          id: bookingid,
        name: {username},
        hum:  {Selected},
        dog: {period},
        date: {timecheck},
        time: {shotcheck},

        });
       setBookingid(bookingid +20021); //id값 +1
      
        /*방금 붙여준 리스트까지 포함 된 리스트로 세팅하기*/
        setblist(about_blist); 
      };
      
    
    
       const input_blist = blist.map((blist) => (
      <div className="rgyPostIts-book">
   
      <li>
      <div className="rgyPostIt-booking">
       예약이 완료 되었습니다.  <br></br> <div className="rgyPostIt-texts">
       {username}님의 예약정보입니다.  예약번호 :  {bookingid} <br></br>
       사람 {Selected}명, 강아지 {period}마리가  <br></br>
       {timecheck},{shotcheck}에 예약 되었습니다. </div> </div>
        </li>
        </div>
      ));
    
      const removebList = (id) => {
        const about_blist = blist.filter((blist) => blist.id !== id);
        setblist(about_blist);
      };
    


    return ( <div className="booking-all">       <br></br>
        <div>
      <span  className="sub-title">Booking  예약하기</span> </div>
     <br></br><br></br>


     <form onSubmit={submit}>

    <label> 닉네임 </label>
    <input name = "username"  type="text"  placeholder="이름&닉네임을 입력해주세요"
     value={username}
     classname="textbosss" onChange={onChange2} ref={inputusername} id="namebox" 
         required />
<br></br><br></br>

     <div> <lable> 사람 </lable>
        <select onChange={handleSelect} value={Selected} class="selected"  required>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select> 명, &nbsp;
   
            <label> 강아지  </label>
              <select 
                value={period}
                onChange={onPeriodChange}
                class="selected" required>
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
        <button className={ `${onlys === 0  ? 'active3' : ''}` } onClick={(e)=>{onClicks(e,0)}} value={"10:00- 12:00"} id="shotcheck"> <p> 10:00- 12:00 </p> </button>
        <button className={ `${onlys === 1  ? 'active3' : ''}` } onClick={(e)=>{onClicks(e,1)}} value={"12:00- 14:00"} id="shotcheck"> <p> 12:00- 14:00 </p> </button>
  
      </div>

            <button type="submit" className='ckeckreview2' onClick={handleShow} >예약하기</button>
      </form> 

      <Modal className='modal-booking'
     show={show} onHide={handleClose}>

      {  username != "" && Selected != "" &&
     period!=""&&  timecheck!= null && shotcheck!= null ? 

        <div>
        <Modal.Body> 
        <h2> 예약 정보를 확인해주세요  </h2> 
        <p>
         {username} 님, 안녕하세요  <br></br>


         사람 : {Selected}명과 강아지 : {period}마리가   <br></br>
        {timecheck}, {shotcheck} 에 함께하는 <br></br> 시티투어에 
       예약 하시겠습니까? </p>
      
       </Modal.Body>
        <Modal.Footer>
        <button onClick={submituu} className="modalbut"> 예약 </button> 
        &nbsp;
          <button onClick={handleClose} className="modalbut"> 취소 </button>
        </Modal.Footer> </div> : <Modal.Body > <div className= "modalbody-1">모든 정보를 입력해주세요 <br></br> 창을 클릭하면 사라집니다. </div> </Modal.Body> } 
      </Modal>  



      <div className='bookinput'>
      <ul>{input_blist}</ul> </div>


<br /><br /><br /><br />


    </div> );
}
 
export default Booking;