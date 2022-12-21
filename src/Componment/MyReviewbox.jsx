
import { useState } from 'react';
import { db } from "../Database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
 import '../Componment/Css/MyBox.css';

const MyReviewBox = () => {
    const currentUser = useSelector((state) => state.login.currentUser);
    //console.log(currentUser);

    const [reviewList,setReviewList]= useState([]);

 
        async function getReview() {
            const q = query(collection(db, "review"), where("uid", "==", currentUser));
            const querySnapshot = await getDocs(q);
            const rweetArray = [];
            querySnapshot.forEach((doc) => {
                const dataName = doc.data();
                rweetArray.push(dataName);
            }); 
            setReviewList(rweetArray);   
             }


    return ( 
      <div className='all-w'>


<button   onClick={getReview} className="simplebtn"> 리뷰 보기 </button> 
<br />

{reviewList.length ==0 ? 
<p> 값이 없습니다. </p>
:
<div className='docbox'>
  {
  reviewList.map((review)=>(
    <div className="reviewbtn" id={review} key={review}>
    <button className="stylechanges">
    <p> 별점 : { review.star }</p>
    <p> 리뷰 : { review.text }</p>
    </button>
    </div>
    ))
  }   </div>
}


{/* { star.map !== null
? <div className="getreviewbox">
{list.map((item) => ( 
<div key ={item.id} >
<li className='litext'> {item} </li>
</div>
))} </div> : <div><p>리뷰가 없습니다. </p> </div> } */}









        </div> );
}
 
export default MyReviewBox;