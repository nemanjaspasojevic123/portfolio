import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Services = () => {
    return (
        <>
            <NavBar />
                <section className="box">
                    <div className="box-inner">
                        <div className="services">
                            <div className="services-content">
                            <h1>Usluge</h1>
                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                    <i className="fas fa-code"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                    <p>Razvoj web stranica</p>
                                    </div>
                                </div>

                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                    <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                    <p>Web i 3D dizajn</p>
                                    </div>
                                </div>
                            </div>

                        <div className="services-content">
                            <h4>Tehnologije</h4>
                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                        <i className="fab fa-html5"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                        <p>HTML5</p>
                                    </div>
                                </div>

                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                        <i className="fab fa-css3"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                        <p>CSS</p>
                                    </div>
                                </div>

                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                        <i className="fab fa-js"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                        <p>JS</p>
                                    </div>
                                </div>

                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                        <i className="fab fa-react"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                        <p>React JS</p>
                                    </div>
                                </div>

                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                        <i className="fab fa-github"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                        <p>Git Hub</p>
                                    </div>
                                </div>

                                <div className="services-contentItem">
                                    <div className="services-contentItemIcon">
                                        <i className="fab fa-sass"></i>
                                    </div>
                                    <div className="services-contentItemText">
                                        <p>SCSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-slider">
                            <Link to='/portfolio' className='box-sliderPortfolioLink'><span><i className="fas fa-long-arrow-alt-left"></i> Portfolio</span></Link>
                            <Link to='/experience' className='box-sliderExperienceLink'><span>Iskustvo <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Services;