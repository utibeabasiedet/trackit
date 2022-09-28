import React from "react";
import img1 from "./new.jpg"
import './Nav.css'
import Navbar from './Navbar'

const Nav = () => {
    return(
        <div>
            <nav className="nav-main">
                <img src={img1} alt="0" className="img"/>
                <Navbar />
            </nav>

        </div>
    )
}

export default Nav