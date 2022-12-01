
import { Phone } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';

const Btn = () => {

	const [email, password,userName,phone] = useState("");

	const [list, setlist] = useState({
        email: '',
        password: '',
        userName: '',
		phone:''
    })

	const onChangeInput = (e) => {
        const {id, value} = e.target // destructuring
        setlist({
            ...list,
            [id]:value
        })
    }


	return (
    		<div> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

          <input
            id="standard-email"
            type="email"
            placeholder="Email Address" name="email" value={email} onChange={onChangeInput}
			  />   <br /> <br />

			<input
            id="standard-Pw"
            type="password"
            placeholder="password" value={password} onChange={onChangeInput}
			 />    <br /> <br />

			<input
            id="standard-name"
            type="text"
            placeholder="userName" value={userName} onChange={onChangeInput}
			  />    <br /> <br /> 
			<input
            id="standard-phone"
            type="text"
            placeholder="phone2" value={phone}  onChange={onChangeInput}
			  />    <br /> <br />



			<button> 회원가입 </button>

			{email}  {password}  {userName} {phone}



<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
       	 	</div>
	);
};

export default Btn;