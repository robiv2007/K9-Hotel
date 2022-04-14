import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="list">
            <ul className="navbar">
                <li>

                </li>
                <li>
                    <Link to="/">Start</Link>
                </li>
                <li>
                    <Link to="/register">Dogs</Link>
                </li>
                <li>
                    <Link to="/dogInfo/:chipNumber">Info</Link>
                </li>

            </ul>

        </div>
    );

}

export default NavBar
