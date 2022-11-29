import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { BiMenu } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BiMapAlt } from "react-icons/bi";
import { BiMessageCheck } from "react-icons/bi";
import { BiMessageRoundedDots } from "react-icons/bi";

import "./Css/Side.css";
import { NavLink } from 'react-router-dom';
const Sideicon = () => {
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

  
    </Box>
  );

    return ( <div>
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
    
     </div> );
}
 
export default Sideicon;