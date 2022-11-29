
import "./Css/Footer.css";
import footerimg from '../img/footerboy.png';
import { FiLoader } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Logo2 from "../Componment/Logo2";

const Footer = () => {
    return ( 
        <div>

<div className="footer">

<div className="f_logo-W">
<Logo2 />
</div>

<div className="f_con_T">
    <br></br><br></br>
    <h2> < FiLoader /> 주최</h2>
    <p><FiChevronRight />부산광역시 부산관광공사</p>
    <p><FiChevronRight />사회공헌활동</p>
    <p><FiChevronRight />시티투어</p>
</div>
<img src={footerimg} alt={`footerimg`} className="footerimg"/>
<div> </div>

</div> 
        </div>
     );
}
 
export default Footer;