
import { useState } from 'react';
import { db } from "../Database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import '../Componment/Css/MyBox.css';

const MyBookingBox = () => {

    const currentUser = useSelector((state) => state.login.currentUser);
    const [booking,setBooking] = useState([]);

    
    async function getReview() {
        const q = query(collection(db, "booking"), where("uid", "==", currentUser));
        const querySnapshot = await getDocs(q);
        const rweetArray = [];
        querySnapshot.forEach((doc) => {
            const dataName = doc.data();
            rweetArray.push(dataName);
        }); 
        setBooking(rweetArray);   
         } 

    return ( 
        <div className='all-w'>
<button onClick={getReview} className="simplebtn"> 예약 보기 </button> 
<br />
{ booking.length==0 ? 
<p> 값이 없습니다. </p>
:
<div className='docbox'>
{
  booking.map((booking)=>(
    <div className="reviewbtn" id={booking} key={booking}>
    <button className="stylechanges">
    <p> 예약자 : { booking.username } </p>
    <p> 예약날짜: { booking.timestamp }</p>
    <hr />
    <p> 투어날짜: { booking.date }</p>
    <p> 사람 : { booking.human } 강아지 : { booking.dogs }</p>
    <p> 투어시간 : { booking.time } </p>
    </button>
    </div>
    ))
  }
</div>
}




        </div>
     );
}
 
export default MyBookingBox;