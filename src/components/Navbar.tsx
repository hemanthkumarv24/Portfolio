import React from "react";

const Navbar:React.FC = () =>{
    return(
        <nav>
            <div className="brand-text">HK</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;