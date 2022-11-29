import { Link } from "react-router-dom";
import "./Css/logo2.css";

const Logo2 = () => {
    return ( <div>  <Link to="/" style={{ textDecoration: "none", color:"black"}}>
        <div className="logo-W">
        <span className="logo-dog">Dog</span> <span className="logo-n">N People</span>
         </div> </Link>
    </div> );
}
 
export default Logo2;
