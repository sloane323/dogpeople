
import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 
import { db } from "../Database/firebase";
import { collection, query, where, getDocs,  doc, getDocFromCache ,DocumentReference } from "firebase/firestore";
import {GET_CURRENT_USER_INFO} from "../modules/Login"

const User = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const loginout = () => {  
        // 리덕스 혹은 Context의 user값을 null로 만들어 로그아웃을 해준다, 
        setUser(null);
        navigate('/');
    }
    const location = useLocation();
    useEffect(()=>{
       // console.log(location)
    })

    //console.log(location.state.uid);
    //console.log (localStorage.getItem("currentUser"));

const userinfo = async (user) => { 
    console.log(user);
    const q = query(collection(db, "user"), where("", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

}

return ( <div> <br /><br /><br /><br /><br />

            <h1>유저페이지입니다</h1>
            <p>{location.state.name}  ({location.state.email})님 안녕하세요. </p>
            <p></p>
            <img src={location.state.photo} alt="" />
    <button onClick={userinfo} > 클릭 </button>
            <hr />
            <p> {location.state.name}  님의 예약 </p>


<hr />
            <p> {location.state.name}  님의 리뷰</p>


            <hr />
            <br /><br />
            <button onClick={loginout}>로그아웃</button>


<br /><br /><br /><br /><br />
</div> );
}
 
export default User;