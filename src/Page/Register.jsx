import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { collection } from "firebase/firestore";
import { db } from "../Database/firebase";
import { doc, setDoc, addDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setphone] = useState("");

  const [error, setError] = useState({
    phoneError: false,
    passwordError: false,
    ConfirmPasswordError: false,
    userNameError: false,
    emailError: false,
  });

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const onChangephone = (e) => {
    const phoneRegex = /^[0-9\b -]{0,13}$/;
    console.log(e.target.value.length);
    // 문자 길이로 확인하여 그전에도 알림뜨기
    if (e.target.value.length !== 13) {
      setError({ ...error, phoneError: true });  }
      else setError({ ...error, phoneError: false });

    // 값이 없거나 혹은 입력한 값이 있을때 맞다 - 문자만 필터
    if (!e.target.value || phoneRegex.test(e.target.value)) {
      setphone(e.target.value);
    } else {
      setError({ ...error, phoneError: true });
      
    }
  };

  useEffect(() => {
    if (phone.length === 10) {
      setphone(phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phone.length === 13) {
      setphone(
        phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phone]);

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    console.log(e.target.value)
    if (!e.target.value || passwordRegex.test(e.target.value))
      setError({ ...error, passwordError: false });
    else {  console.log("error")
      setError({ ...error, passwordError: true });  }
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    if (password === e.target.value)
      setError({ ...error, ConfirmPasswordError: false });
    else {
      setError({ ...error, ConfirmPasswordError: true });
    }
    setConfirmPassword(e.target.value);
  };
  const onChangeUserName = (e) => {
    setError({ ...error, userNameError: false });
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setError({ ...error, emailError: false });
    else {
      setError({ ...error, emailError: true });
    }
    setEmail(e.target.value);
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

  const handleClickShowconfirmPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword,
    });
  };

  const handleMouseDownconfirmPassword = (event) => {
    event.preventDefault();
  };

  // 서버에 데이터 추가

  const [lists, setLists] = useState([]);
  const [nextId, setNextId] = useState(0);

  const submit = (e) => {
    e.preventDefault(); //새로고침 방지

    const about_lists = lists.concat({
      //원래 있는 리스트에 붙여주기
      id: nextId,
      email: email,
      username: username,
      password: password,
      phone: phone,
    });
    setNextId(nextId + 1); //id값 +
    setLists(about_lists);

  };

  const addUserData2 = async () => {
    await setDoc(doc(db, "Register", email), {
      Uerid: email,
      email: email,
      username: username,
      password: password,
      phone: phone,
    });
  };

  return (
    <div>

      <br />    <br />    <br /> 

      <h1> 가입하기 </h1>
      <div> 서비스 이용을 위해 필요한 필수 정보를 입력해주세요 </div> <br></br>
      <br></br>
      <form onSubmit={submit}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-email">email</InputLabel>
          <Input
            id="standard-email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onInput={onChangeEmail}
          />

          {error.emailError && (
            <div
              className="invalid-input"
              style={{ fontSize: "11px", color: "#D73E3E" }}
            >
              이메일 주소를 확인해주세요.{" "}
            </div>
          )}
        </FormControl>{" "}
        <br></br>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-password">Password</InputLabel>
          <Input
            type={values.showPassword ? "text" : "password"}
            id="standard-Password"
            name="password"
            maxLength={20}
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
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

          {error.passwordError && (
            <div
              className="invalid-input"
              style={{ fontSize: "11px", color: "#D73E3E" }}
            >
              비밀번호는 8자리 이상, 영문+숫자로 입력해주세요{" "}
            </div>
          )}
        </FormControl>{" "}
        <br></br>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-password">Password Confirm</InputLabel>
          <Input
            id="standard-Password"
            type={values.showconfirmPassword ? "text" : "password"}
            maxLength={20}
            placeholder="Confirm Password"
            value={confirmPassword}
            onInput={onChangeConfirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowconfirmPassword}
                  onMouseDown={handleMouseDownconfirmPassword}
                >
                  {values.showconfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          {error.ConfirmPasswordError && (
            <div
              className="invalid-input"
              style={{ fontSize: "11px", color: "#D73E3E" }}
            >
              비밀번호와 다릅니다.
            </div>
          )}
        </FormControl>{" "}
        <br></br>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-name">이름/닉네임</InputLabel>
          <Input
            id="standard-name"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onInput={onChangeUserName}
          />
          {error.userNameError && (
            <div
              class="invalid-input"
              style={{ fontSize: "11px", color: "#D73E3E" }}
            >
              닉네임/이름을 입력해주세요
            </div>
          )}
        </FormControl>{" "}
        <br></br>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-phone">phone</InputLabel>
          <Input
            id="standard-phone"
            type="text"
            name="phone"
            placeholder="phone"
            value={phone}
            onInput={onChangephone}
          />
          {error.phoneError && (
            <div
              class="invalid-input"
              style={{ fontSize: "11px", color: "#D73E3E" }}
            >
              정확한 폰 번호를 입력해주세요
            </div>
          )}
        </FormControl>{" "}
        <br></br>
        <br></br>
        <button type="submit" onClick={addUserData2}
        disabled={!(!error.phoneError && !error.passwordError && !error.ConfirmPasswordError && !error.userNameError && !error.emailError)}
        > 회원가입 </button>
        <br></br>{" "}
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Register;
