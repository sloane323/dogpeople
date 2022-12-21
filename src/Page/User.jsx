import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { db } from "../Database/firebase";
import {  getDoc, doc } from "firebase/firestore";
import {LOGOUT} from "../modules1/Login"
import MyReviewBox from '../Componment/MyReviewbox';
import MyBookingBox from '../Componment/MyBookingBox';
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const User = (props) => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.login.currentUser);


const [name, setName] = useState();
const [email, setemamil] = useState();
const docRef = doc(db, "user", currentUser);

async function getUsers() {
    const docSnap = await getDoc(docRef);  
if (docSnap.exists()) {
 //  console.log("Document data:", docSnap.data());
  const userinfo = docSnap.data()
  // console.log(userinfo);
  setName (userinfo.name);
  setemamil (userinfo.email)
} else {
  // doc.data() will be undefined in this case
 //  console.log("No such document!");
} return docSnap.data; 
      
};

  // 로그아웃
  const onLogOutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(LOGOUT());
        console.log("로그아웃성공");
        navigate('/');
      })
      .catch((error) => {
        console.log("로그아웃실패");
      });
  };



return ( <div className='all-w'> <br />

 {/* <button onClick={getUsers} > 시작 </button> */}
            <h1> 마이페이지입니다</h1>
     {/* <p>  {name}  님 안녕하세요. <br />
     고객님의 이메일은 {email} 입니다. </p>   */}
           

            <MyBookingBox /> <br />
             <MyReviewBox /> 
      



            <hr />
            <br /><br />
           

 <button className="simplebtn" onClick={onLogOutClick}>로그아웃</button> 



<br /><br /><br /><br /><br />
</div> );

}

export default User;