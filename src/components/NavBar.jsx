import {Link} from "react-router-dom"

const NavBar = (props) =>{
    return (
        <div className="d-flex justify-content-evenly align-items-center mb">
            <header>Product Manager System</header>
            <Link to={"/"}>Home</Link>

        </div>
    )
}

export default NavBar;