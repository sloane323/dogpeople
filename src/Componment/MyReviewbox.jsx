
import { useState } from 'react';
import { db } from "../Database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import style from '../Componment/Css/MyBox.css';

const MyReviewBox = () => {
    const currentUser = useSelector((state) => state.login.currentUser);


    const [star,setStar] = useState([]);
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
        <div>


<button onClick={getReview}> 리뷰 보기 </button> 
<br />



  {
  reviewList.map((review)=>(
    <div>
    
    <p> 나의 리뷰 </p>
    <p> { review.star }</p>
    <p> { review.uid }</p>
    <p> { review.text }</p>

    </div>
    ))
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