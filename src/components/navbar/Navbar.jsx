import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/register-login");
        // <div>User is successfully logged in</div>
    }
    return (
        <div className="navbar"> 
            <div className="navContainer">
                <span className="logo">yoyoBookings</span>
                    <div className="navItems">
                        <button className="navButton">Register</button>
                        <button className="navButton" onClick={handleRegister}>Login</button>
                    </div>
            </div>
        </div>
    );    
}

export default Navbar;