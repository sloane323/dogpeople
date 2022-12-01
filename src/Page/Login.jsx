import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    
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

  const navigater = useNavigate();

  // 구글로 로그인하기 버튼을 눌렀을때 파이어스토어를 들고와서 사용
  const googleLogin = () => {
    console.log("로그인?")
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");


    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // 로그인된 결과를 구글인증을 통해서 확인 > 토큰 발급
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // 로그인된 결과 중에서 user를 통해서 관련 정보를 가져올수 있다
        const user = result.user;
        console.log(user) 
        console.log(user.displayName) 
        console.log(user.photoURL) 
        navigater('/user',{state:{
            name : user.displayName,
            email : user.email,
            photo : user.photoURL
        }});
      })
      .catch((error) => {
        // 
        const errorCode = error.code;
        const errorMessage = error.message;
        // 
        const email = error.customData.email;
        // 
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };



    return ( 
    <div> <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div>


    <div className="login">
     <h1>로그인</h1>
    <div> 서비스 시작을 위해 로그인을 해주세요 </div>
<form> 


        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-email">email</InputLabel>
          <Input
            id="standard-email"
            type="email"
            placeholder="Email Address" 
            value={email}
            onChange={onChangeEmail}/>

             {emailError && <div className="invalid-input" style={{fontSize:'11px', color:"#D73E3E"}} >
            이메일 주소를 확인해주세요. </div>}
        </FormControl> <br></br>

  <br></br>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-password">Password</InputLabel>
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
  <br></br>
  <div>
  <span> 아이디찾기 </span> /
  <span> 비밀번호 찾기 </span>  <br></br>
  </div>  <br></br>

  <Button>로그인</Button><br></br>
<span  style={{fontSize:'12px', margin:"7px"}}> or </span><br></br>
<button onClick={googleLogin} > <GoogleIcon />  계정으로 계속하기</button><br></br>


<div> 계정이 없으시다면 <span><Link to="/register" className='text0' style={{fontWeight: "bold"}} >회원가입</Link></span>을 해주세요 </div>
</form>

</div>
  </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div> 
    );
}
 
export default Login;
