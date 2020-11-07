import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link className="navbar-brand" to="/" >
                {/* <img src={require("./assets/clipart3024702.png")} alt="no img" width="50px" height="40px"/> */}
            </Link>
            <div className="nav-fildes">
                <div className="nav-filed aboutFiled">
                    <Link to='/about' className='aboutLink'>
                        <div className="icon-wrapper">
                        <i className="fas fa-home"></i>
                            {/* <img src="/img/about.png" alt="icon" className="nav-bar-icon" /> */}
                        </div>
                        <div className="nav-text">O meni</div>
                    </Link>
                </div>

                <div className="nav-filed portfolioFiled">
                    <Link to='/portfolio' className='portfolioLink'>
                        <div className="icon-wrapper">
                        <i className="fas fa-folder-open"></i>
                            {/* <img src="/img/portfolio.png" alt="icon" className="nav-bar-icon" /> */}
                        </div>
                        <div className="nav-text">Portfolio</div>
                    </Link>
                </div>

                <div className="nav-filed servicesFiled">
                    <Link to='/services' className='servicesLink'>
                        <div className="icon-wrapper">
                        <i className="fas fa-tools"></i>
                            {/* <img src="/img/services.png" alt="icon" className="nav-bar-icon" /> */}
                        </div>
                        <div className="nav-text">Usluge</div>
                    </Link>
                </div>

                <div className="nav-filed educationFiled">
                    <Link to='/education' className='educationLink'>
                        <div className="icon-wrapper">
                        <i className="fas fa-scroll"></i>
                            {/* <img src="/img/experience.png" alt="icon" className="nav-bar-icon" /> */}
                        </div>
                        <div className="nav-text">Obrazovanje</div>
                    </Link>
                </div>

                <div className="nav-filed experienceFiled">
                    <Link to='/experience' className='experienceLink'>
                        <div className="icon-wrapper">
                        <i className="fas fa-scroll"></i>
                            {/* <img src="/img/experience.png" alt="icon" className="nav-bar-icon" /> */}
                        </div>
                        <div className="nav-text">Iskustvo</div>
                    </Link>
                </div>

                <div className="nav-filed contactFiled">
                    <Link to='/contact' className='contactLink'>
                        <div className="icon-wrapper">
                        <i className="far fa-id-card"></i>
                            {/* <img src="/img/contact.png" alt="icon" className="nav-bar-icon" /> */}
                        </div>
                        <div className="nav-text">Kontakt</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar