
import { useState } from 'react';
import { db } from "../Database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';

const MyBookingBox = () => {

    const currentUser = useSelector((state) => state.login.currentUser);
    console.log(currentUser);

    const [booking,setBooking] = useState([]);

    async function getBooking ()  {
        const q = query(collection(db, "booking"), where("uid", "==", currentUser));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const bookings = doc.data();
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data())
            console.log(bookings.date)
            console.log(bookings.dogs)
            console.log(bookings.human)
            console.log(bookings.time)
            console.log(bookings.timestamp)
            console.log(bookings.uid)
            console.log(bookings.username)

            setBooking((prev)=>{
                return [...prev,  bookings.username, bookings.date, bookings.time, bookings.human, bookings.dogs , bookings.timestamp ]
            });



            //settext(bookings.text);
           // settimestamp(bookings.timestamp);
            //setDataName (bookings); 
        });
        console.log("예약이 없습니다.")
    }


    return ( 
        <div>
<button onClick={getBooking}> 예약 보기 </button> 
<br />
<div className='getreviewbox'>
 {booking.map((item) => ( 
<div key ={item}>
<li>  {item} </li>
</div>
))}  
</div>


        </div>
     );
}
 
export default MyBookingBox;