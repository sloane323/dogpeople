
import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import { db } from "../Database/firebase";
import { collection, query, where, getDocs, getDoc, doc, getDocFromCache ,DocumentReference } from "firebase/firestore";
import {GET_CURRENT_USER_INFO} from "../modules/Login"
import { useSelector } from 'react-redux';
import {LOGOUT} from "../modules/Login"
import MyReviewBox from '../Componment/MyReviewbox';
import MyBookingBox from '../Componment/MyBookingBox';


const User = (props) => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.login.currentUser);

    const loginout = () => {  
        // 리덕스 혹은 Context의 user값을 null로 만들어 로그아웃을 해준다, 
        navigate('/');
        LOGOUT(false);
    }

const [name, setName] = useState();
const docRef = doc(db, "user", currentUser);

async function getUsers() {
    const docSnap = await getDoc(docRef);  
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const userinfo = docSnap.data()
  console.log(userinfo);
  setName (userinfo.name);

} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
} return docSnap.data; 
      
};





return ( <div> <br /><br /><br /><br /><br />

<button onClick={getUsers} > 시작 </button>
            <h1> 마이페이지입니다</h1>
         {name}  님 안녕하세요.
           
            <hr />
            <p>    {name}  님의 예약 </p>
            <MyBookingBox /> 
                <div>  <br />
              

                </div>
<hr />
            <p>    {name}  님의 리뷰</p>
            <MyReviewBox /> 

            <hr />
            <br /><br />
           

 <button onClick={loginout}>로그아웃</button> 



<br /><br /><br /><br /><br />
</div> );

}

export default User;