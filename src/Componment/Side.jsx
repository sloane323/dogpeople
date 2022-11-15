import { NavLink } from "react-router-dom";
import "./Css/Side.css";
const Sideicon = () => {
    const activeStyle = {
        color:"black"
      }

      
    return ( <div>
        <input type="checkbox" id="check_box" />
    <label for="check_box">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div id="side_menu">

<div className="sideh-menu">
<div className="sideh-menu-1">

<NavLink to="/"  activeStyle={activeStyle} >Home <br></br></NavLink>
<NavLink to="/info"  activeStyle={activeStyle}>Introduce<br></br></NavLink>
<NavLink to="course"  activeStyle={activeStyle}>Caurse<br></br></NavLink>
<NavLink  to="/Booking"  activeStyle={activeStyle}>Booking<br></br></NavLink>
<NavLink  to="/Review"  activeStyle={activeStyle}>Review<br></br></NavLink>



</div> </div> </div> </div> );
}
 
export default Sideicon;