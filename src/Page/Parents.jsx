import React, {useState}from "react";


const Parents = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname:'',
    password:'',
    phone:''
});

const {name, nickname,password,phone} = inputs;

const onChange = (e) => {
    const {name, value} = e.target;
    const nextInputs = {
        ...inputs,
        [name]: value, //e.target의 name과 value이다.
    };

   setInputs(nextInputs)
}

const onReset = () => {
    setInputs({
      name: '',
      nickname:'',
      password:'',
      phone:''
    })
}


const submit = (e) => {
  e.preventDefault();  //새로고침 방지
  const about_lists = lists.concat({ //원래 있는 리스트에 붙여주기
    id: nextId,

    name: name,
    nickname:nickname,
    password:password,
    phone:phone

  });
  setNextId(nextId + 1); //id값 +1

 
};

    return ( <div> <br /><br /><br /><br /><br />
 <div> <form onSubmit={submit}>
            <input name = "name" 
              placeholder="이름" 
              onChange={onChange} 
              value={name} /> <br />

            <input name = "nickname" 
              placeholder="닉네임" 
              onChange={onChange} 
              value={nickname} /> <br />

            <input name = "password" 
              type="password"
              placeholder="비밀번호" 
              onChange={onChange} 
              value={password} /> <br />

              <input name = "phone" 
              placeholder="phone" 
              onChange={onChange} 
              value={phone} /> <br />



            <button onClick={onReset}>초기화</button>
            <button type="submit">초기화</button>

            </form>
            <div>
            
           아이디  {name}   <br /> 
           비밀번호 {nickname}<br /> 
           비밀번호 {password}<br /> 
           전화번호 {phone}
                
            </div><br /><br /><br /><br />
        </div>

    </div> );
}
 
export default Parents;