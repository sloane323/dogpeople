import { Link } from "react-router-dom";
import "./Css/Logo.css";

const Logo = () => {
    return ( <div>  <Link to="/" style={{ textDecoration: "none", color:"black"}}>
        <div className="logo-W1">
        <span className="logo-dog1">Dog</span> <span className="logo-n">N People</span>
         </div> </Link>
    </div> );
}
 
export default Logo;
