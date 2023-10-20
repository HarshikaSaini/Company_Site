import React from "react";
import logo from "../Images/logo.png";
import {Link} from "react-router-dom";
import "../Component/nav.css";
const Navbar=()=>{
    return(
        <div className="Header">
         <div className="logo-img">
            <img  src= {logo} alt = "logoimage"/>
         </div>
         <div className="nav-div">
            <ul className="Nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contactus">Contact us</Link></li>

            </ul>
         </div>
        </div>
    )
}
export default Navbar