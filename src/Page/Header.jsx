
import Logo from '../Componment/Logo';
import Sideicon from '../Componment/Side';
import "./Css/Header.css";

const Header = () => {
    return ( 
        <div>

<div className="home-header">
        <div className="home-logo"><Logo /></div>
        <div className="home-Sideicon"> <Sideicon /></div>
        </div> 
        </div>
     );
}
 
export default Header;