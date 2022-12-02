import React, {useState}from "react";
import { collection} from "firebase/firestore"

import {db} from '../Database/firebase'
import { doc, setDoc,addDoc   } from "firebase/firestore"; 

let i = 50142421;

const Parents = () => {

  const [inputs, setInputs] = useState({
    name: '',
    nickname:'',
    password:'',
    phone:''
});

const {name, nickname,password,phone} = inputs;
const [lists, setLists] = useState([]);
const [nextId, setNextId] = useState(0);

const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };
   setInputs(nextInputs) }

const onReset = () => {
    setInputs({
      name: '',
      nickname:'',
      password:'',
      phone:''
    }) }

const submit = (e) => {
  e.preventDefault();  //새로고침 방지
  
  const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
    id: nextId,
    name: inputs.name,
    nickname: inputs.nickname,
    password: inputs.password,
    phone: inputs.phone
  });
  setNextId(nextId + 1); //id값 + 
  setLists(about_lists);
}; 


const input_list = lists.map((list) => (
  <div>
    <div> 
    id : <br></br> 
    이름 : {list.name} <br></br> 
    닉네임 : {list.nickname} <br></br> 
  비밀번호: {list.password}   <br></br> 
  폰번호 :{list.phone} </div>
  </div>
));

const [idValue, setidValue] = useState();

// 데이터 추가하기


const  addUserData2  = async() => { i++;
  await setDoc(doc (db, "Register",inputs.name),{
     Uerid : inputs.phone+inputs.password,
     email: inputs.name,
     nickname: inputs.nickname,
     password: inputs.password,
     phone: inputs.phone 
 }); }
   
 

 const  addUserData  = async() => { i++;
  await addDoc(collection (db, "Register"),{
  
    Uerid : i,
     email: inputs.name,
     nickname: inputs.nickname,
     password: inputs.password,
     phone: inputs.phone 
 }); }
   


    return ( <div> <br /><br /><br /><br /><br />
 <div> <form onSubmit={submit}>

            <label> 이름 </label>
            <input name = "name" 
              placeholder="이름" onChange={onChange} 
              value={name} /> <br />

            <label> 닉네임 </label>
            <input name = "nickname" 
              placeholder="닉네임"  onChange={onChange} 
              value={nickname} /> <br />

             <label> 비밀번호 </label>
            <input name = "password" 
              type="password"
              placeholder="비밀번호"  onChange={onChange} 
              value={password} /> <br />

              <label> phone </label>
              <input name = "phone" 
              placeholder="phone"  onChange={onChange} 
              value={phone} /> <br />

            <button onClick={onReset}>초기화</button>
            <button type="submit">완료</button>
            <button onClick={addUserData2} > setDoc 데이터베이스에 업데이트하기 </button>
            <button onClick={addUserData} > addDoc 데이터베이스에 업데이트하기 </button>


            </form>
            <div>
            <h1> Onchange Valuse</h1>
           아이디  {name}   <br /> 
           비밀번호 {nickname}<br /> 
           비밀번호 {password}<br /> 
           전화번호 {phone}
                
            </div><br /><br />
            
            <div className='inputlistun'>
            <h1> submit Valuse</h1>
           <ul>{input_list}</ul> </div>


            <br /><br />
        </div>

    </div> );
}
 
export default Parents;