import { NavLink } from "react-router-dom";

const Navbar = () => {


    const Style = {
        display: "flex",
        gap: "30px"
    }


    return (
        <div>
            <nav style={Style}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/book">Book</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;