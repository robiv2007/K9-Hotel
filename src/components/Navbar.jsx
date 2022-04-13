import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="list">
            <ul className="navbar">
                <li>
             
                </li>
                <li>
                    <Link to="/">Start page</Link>
                </li>
                <li>
                    <Link to="/register">Dogs List</Link>
                </li>
                <li>
                    <Link to="/dogInfo/:chipNumber">Dog Info</Link>
                </li>

            </ul>

        </div>
    );
    
}

export default NavBar
