
import { useState } from 'react';
import { db } from "../Database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';


const MyReviewBox = () => {
    const currentUser = useSelector((state) => state.login.currentUser);

    const [dataName,setDataName] = useState([]);
    const [star,setStar] = useState([]);
    const [text,settext] = useState();
    const [timestamp,settimestamp] = useState();

           console.log(currentUser);
        async function getReview() {
        
            const q = query(collection(db, "review"), where("uid", "==", currentUser));
        
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const dataName = doc.data();
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data())
                console.log(dataName.star)
               console.log(dataName.reviewid)
                console.log(dataName.text)
                console.log(dataName.timestamp)
                console.log(dataName.uid)

                setStar((prev)=>{
                    return [...prev, dataName.text, dataName.timestamp , dataName.star  ]
                });
                //settext(dataName.text);
               // settimestamp(dataName.timestamp);
                //setDataName (dataName);
            });
             }


            //  const reviewList =  // 사람선택 
            //  [ {
            //  star : star,
            //  text : text,
            //  timestamp : timestamp 
            // }
            // ];

    return ( 
        <div>


<button onClick={getReview}> 리뷰 보기 </button> 
<br />
 {star.map((item) => ( 
<div key ={item.id}>
<li> {item}</li>
</div>
))}  

{/* {reviewList.map((item) => (
<div>

</div>
          ))} */}

        </div>);
}
 
export default MyReviewBox;