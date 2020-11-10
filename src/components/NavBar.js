import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/NavBar.min.css'


const NavBar = () => {
    return (
        <div className="nav-bar"> 
            <div className="nav-fildes">
                <div className="nav-filed aboutFiled">
                    <Link to='/about' className='navLink'>
                        <div className="nav-text">O meni</div>
                    </Link>
                </div>

                <div className="nav-filed portfolioFiled">
                    <Link to='/portfolio' className='navLink'>
                        <div className="nav-text">Portfolio</div>
                    </Link>
                </div>

                <div className="nav-filed servicesFiled">
                    <Link to='/services' className='navLink'>
                        <div className="nav-text">Usluge</div>
                    </Link>
                </div>

                <div className="nav-filed educationFiled">
                    <Link to='/education' className='navLink'>
                        <div className="nav-text">Obrazovanje</div>
                    </Link>
                </div>

                <div className="nav-filed experienceFiled">
                    <Link to='/experience' className='navLink'>
                        <div className="nav-text">Iskustvo</div>
                    </Link>
                </div>

                <div className="nav-filed contactFiled">
                    <Link to='/contact' className='navLink'>
                        <div className="nav-text">Kontakt</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar