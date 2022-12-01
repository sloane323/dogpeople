import { collection, query, where, getDocs, orderBy} from "firebase/firestore"
import { getFirestore } from 'firebase/firestore/lite';
import { useEffect } from "react";
import {db} from '../Database/firebase'
import { doc, setDoc ,updateDoc, arrayUnion, arrayRemove  } from "firebase/firestore"; 
import { useState } from "react";


let i = 1;
const Glogin = () => {

    // 데이터 읽어오기 
   const  getUserData  = async() => {
    let array = [];
    try {
      const q = query(collection(db, "User"), ); //where("Uerid", "==", 14 )
      const querySnapshot = await getDocs(q);
     
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Uerid}`);
        console.log(`${doc.id} => ${doc.data().email}`);
        console.log(`${doc.id} => ${doc.data().nickname}`);
        console.log(`${doc.id} => ${doc.data().password}`);
        console.log(`${doc.id} => ${doc.data().phone}`);
        array.push(doc.data());

        setidValue(doc.data().Uerid);
      });
    } catch (e) {
      console.log("오류", e);
    }
  };

  useEffect(
    ()=>{getUserData()}
  );

const [idValue, setidValue] = useState();
// 데이터 추가하기 


  
  const  addUserData  = async() => { i++;
await setDoc(doc(db, "User", "Register1"), 
{
    Uerid : idValue +1,
    email: "Los Angeles",
    nickname: "CA",
    password: "USA",
    phone: "000000000"

  } );

  };


// 중첩 개체의 필드 업데이트

const frankDocRef = doc(db, "User" ,"Register");
const  addUser  = async() => { 
  await setDoc(frankDocRef, {

    Uerid : i,
    email: "Korea",
    nickname: "Busan",
    password: "Southkorea",
    phone: "00000fds0000"
}); }

// To update age and favorite color:
const  updateUser  = async() => { 
await updateDoc(frankDocRef, {
    "age": 13,
    "favorites.color": "Red"
}); } 




  return (
    <div>
      <h1>홈입니다</h1>

      <button onClick={getUserData} > 가입하기 </button>
      <button onClick={addUserData} > addUserData 가입하기 </button>
      <button > frankDocRef 가입하기 </button>
 

  <div className="App">
      firebase 확인해보기!
    </div>

    

    </div>
  );
};

export default Glogin;