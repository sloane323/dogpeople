import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN , LOGOUT } from '../modules1/Login';


import { BiMenu } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiMessageCheck } from "react-icons/bi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Database/firebase";
import { GET_CURRENT_USER_INFO } from "../modules1/User";
import "./Css/Side.css";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Sideicon = () => {
  const currentUser = useSelector((state) => state.login.currentUser);
  const isLogincheck = useSelector((state) => state.login.isLoggedIn);
    const dispatch = useDispatch();

  const getCurrentUserInfo = async () => {
    const docRef = doc(db, "user", currentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(GET_CURRENT_USER_INFO(docSnap.data()));
    }
  };

  useEffect(() => {
    if (currentUser) {
      dispatch(LOGIN(currentUser));
      getCurrentUserInfo();
    }
  }, [currentUser, dispatch]);

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
          <ListItemButton> <BiHome /> &nbsp;
              <NavLink to="/" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium" }} >  Home <br></br></NavLink>
          </ListItemButton> </ListItem>
      </List>


      <Divider/>
      <List>
          <ListItem> 
            <ListItemButton> <BiInfoCircle />  &nbsp;
              <NavLink to="/info" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >Info<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>


      <List>
          <ListItem> 
            <ListItemButton> <BiMap />  &nbsp;
              <NavLink to="/course" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >Caurse<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem> 
            <ListItemButton>
            <BiMapAlt />&nbsp;
              <NavLink to="/place"style={{ textDecoration: "none", color:"black" ,fontFamily: "GmarketSansMedium" }} >Place<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem> 
            <ListItemButton>
            <BiMessageCheck /> &nbsp;
              <NavLink  to="/Booking" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}}>Booking<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem>
            <ListItemButton> 
              <BiMessageRoundedDots />&nbsp; 
              <NavLink  to="/Review" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >Review<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

<hr/>

<List>
          <ListItem>
            <ListItemButton> 
              <BiMessageRoundedDots />&nbsp; 
              <NavLink  to="/login" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >로그인<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem>
            <ListItemButton> 
              <BiMessageRoundedDots />&nbsp; 
              <NavLink  to="/register" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >가입하기<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>
  
    </Box>
  );



  const listist = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
          <ListItemButton> <BiHome /> &nbsp;
              <NavLink to="/" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium" }} >  Home <br></br></NavLink>
          </ListItemButton> </ListItem>
      </List>


      <Divider/>
      <List>
          <ListItem> 
            <ListItemButton> <BiInfoCircle />  &nbsp;
              <NavLink to="/info" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >Info<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>


      <List>
          <ListItem> 
            <ListItemButton> <BiMap />  &nbsp;
              <NavLink to="/course" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >Caurse<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem> 
            <ListItemButton>
            <BiMapAlt />&nbsp;
              <NavLink to="/place"style={{ textDecoration: "none", color:"black" ,fontFamily: "GmarketSansMedium" }} >Place<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem> 
            <ListItemButton>
            <BiMessageCheck /> &nbsp;
              <NavLink  to="/Booking" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}}>Booking<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem>
            <ListItemButton> 
              <BiMessageRoundedDots />&nbsp; 
              <NavLink  to="/Review" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >Review<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

<hr/>

<List>
          <ListItem>
            <ListItemButton> 
              <BiMessageRoundedDots />&nbsp; 
              <NavLink  to="/user" style={{ textDecoration: "none", color:"black", fontFamily: "GmarketSansMedium"}} >마이페이지<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem>
            <ListItemButton> 
              <BiMessageRoundedDots />&nbsp; 
              <NavLink  to="/" onClick={()=>{ dispatch(LOGOUT())}} style={{ textDecoration: "none", color:"red", fontFamily: "GmarketSansMedium"}}  >로그아웃<br></br></NavLink>
            </ListItemButton>
          </ListItem>
      </List>

  
    </Box>
  );

    return ( <div>


      
{ !isLogincheck ? 
    <div>
    {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)} className="bimenu"><BiMenu className='bimenu'/></Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div> 
  : 
  <div>
  {['right'].map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)} className="bimenu"><BiMenu className='bimenu'/></Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {listist(anchor)}
      </Drawer>
    </React.Fragment>
  ))}
</div> 

}


     </div> );
}
 
export default Sideicon;