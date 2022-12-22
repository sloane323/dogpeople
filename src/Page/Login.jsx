import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from"./Css/Login.module.css";

import { getAuth, GoogleAuthProvider, signInWithPopup ,signInWithEmailAndPassword    } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { doc, setDoc, getDoc} from "firebase/firestore";
import { db } from "../Database/firebase";
import {LOGIN} from "../modules1/Login";
import FindPassword from './FindPassword';


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });

      const [email,setEmail] = useState();
      const [emailError, setEmailError] = useState(false);

  const onChangeEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
};


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // 비밀번호 아이콘 작동 
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const createUser = async (user) => {
    await setDoc(doc(db, "user", user.uid), {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      phone: user.phoneNumber,
      profile: "",
      booking:"",
      review:"",
      timestamp: new Date().toLocaleDateString()
    });
  };


  // 구글로 로그인하기 버튼을 눌렀을때 파이어스토어를 들고와서 사용
  const googleLogin = (e) => {
    console.log("로그인?")
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // 로그인된 결과를 구글인증을 통해서 확인 > 토큰 발급
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        //console.log(user);

        const checkDoc = async () => {
          const docRef = doc(db, "user", user.uid);
          const docSnap = await getDoc(docRef);
          console.log(docSnap);
          if (!docSnap.exists()){
            createUser(user);
            console.log("실행")
          }  
        } 
        checkDoc();
        navigate("/user");
        dispatch(LOGIN(user.uid));
        console.log("구글로그인성공!")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };



  // 일반 로그인 
  const dblogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       // console.log(user)
        console.log("로그인성공!")
        dispatch(LOGIN(user.uid));
        navigate('/user')
      })
      .catch((error) => {
        console.log("로그인실패!")
        alert("아이디와 비밀번호를 확인해주세요")

      });
  };


    return ( 
    <div> <br /><br />
        <div>


    <div className="login">
     <h1>로그인</h1>
    <div> 서비스 시작을 위해 로그인을 해주세요 </div>
<form> 

        <FormControl sx={{ m: 1, width: '50%' }} variant="standard">
          <div className={styles.lable}>이메일 Email</div>
          <Input
          style={{font:'2px'}}
            id="standard-email"
            type="email"
            placeholder="Email Address" 
            value={email}
            onChange={onChangeEmail}/>
             {emailError && <div className="invalid-input" style={{fontSize:'11px', color:"#D73E3E"}} >
            이메일 주소를 확인해주세요. </div>}
        </FormControl> <br></br>

  <br></br>
          <FormControl sx={{ m: 1,  width: '50%'  }} variant="standard">
          <div className={styles.lable}>비밀번호 Password</div>
                    <Input
            id="standard-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>


  <span>   <FindPassword /> </span>  
  <br />

<button className={styles.simplebtn} onClick={dblogin}>로그인</button><br></br>
<span  style={{fontSize:'small', margin:"7px"}}> or </span><br></br>
<button type = "button" className={styles.simplebtn2} onClick={googleLogin} > google 계정으로 계속하기</button><br></br>


<div className={styles.textm}> 계정이 없으시다면 <span><Link to="/register" className='text0' style={{fontWeight: "bold"}} ><u>회원가입</u></Link></span>을 해주세요 </div>
</form>

</div>
  </div>
        <br /><br /><br /><br />
    </div> 
    );
}
 
export default Login;
