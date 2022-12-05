import { collection, query, where, getDocs, orderBy} from "firebase/firestore"
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { useEffect } from "react";
import {db} from '../Database/firebase'
import { doc, setDoc ,updateDoc, arrayUnion, arrayRemove ,addDoc   } from "firebase/firestore"; 
import { useState } from "react";


let i = 1;
const Glogin = () => {

    // 데이터 읽어오기 
   const  getUserData  = async() => {
    let array = [];
    try {
      const q = query(collection(db, "Register"), ); //where("Uerid", "==", 14 )
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
await addDoc(collection(db, "Register"),{

   Uerid : idValue +1,
    email: "yㄹㄴㅇㄹ",
    nickname: "키ㅇㄴㅁㄹ미",
    password: "USㅁㄴㅇㄻ렁ㄴㅁA",
    phone: "23ㅇㅁㄴㄹㄴㄹ2450" 

}); }
  



  return (
    <div>
      <h1>홈입니다</h1>

      <button onClick={getUserData} > 가입하기 </button>
      <button onClick={addUserData} > addUserData 가입하기 </button>

 

  <div className="App">
      firebase 확인해보기!
    </div>


    </div>
  );
};

export default Glogin;