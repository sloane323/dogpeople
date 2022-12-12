
import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import { db } from "../Database/firebase";
import { collection, query, where, getDocs,  doc, getDocFromCache ,DocumentReference } from "firebase/firestore";
import {GET_CURRENT_USER_INFO} from "../modules/Login"
import { useSelector } from 'react-redux';
import {LOGOUT} from "../modules/Login"


const User = (props) => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.login.currentUser);
    const loginout = () => {  
        // 리덕스 혹은 Context의 user값을 null로 만들어 로그아웃을 해준다, 
        navigate('/');
        LOGOUT(false);
    }

    console.log(currentUser);
    const docRef = doc(db, "user", currentUser);
    const finduserinfo = async (user) => { 

        const q = query(collection(db, "user"), where("uid", "==", currentUser));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data());
        });
    }

    

return ( <div> <br /><br /><br /><br /><br />

            <h1>유저페이지입니다</h1>
            <p>{doc.data(name)}  ({finduserinfo.email})님 안녕하세요. </p>
            <p></p>
            <img src={finduserinfo.uid} alt="" />
            <hr />
            <p> {finduserinfo.name}  님의 예약 </p>


<hr />
            <p> {finduserinfo.name}  님의 리뷰</p>


            <hr />
            <br /><br />
           
            <button>찾아랏</button> 
 <button onClick={loginout}>로그아웃</button> 

<br /><br /><br /><br /><br />
</div> );
}
 
export default User;