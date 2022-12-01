import { Link, useLocation } from "react-router-dom";

const User = () => {
    const location = useLocation();
    const user = location.state.user;
    return ( <div>
        <button> <Link to="/"> home</Link> </button>
        <p> 로그인 완료!!!!!! </p>
        <p> {location.state.name}</p>
        <p> {location.state.email}</p>
        <p><button></button></p>
        <p> <img src={location.state.photoURL} alt="" /> </p>

    </div> );
}
 
export default User;