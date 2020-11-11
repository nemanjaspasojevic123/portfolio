import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../assets/css/Services.min.css';

const Services = () => {
    return (
        <>
            <NavBar />
                <section className="services-box">
                    <div className="box-inner">
                        <div className="services">
                            <div className="services-contentFirst">
                                <h1 className="services-subject">Usluge</h1>
                                <div className="services-contentFirstItem">
                                    <div className="services-item">
                                        <div className="services-contentIcon">
                                        <i className="fas fa-code fa-4x"></i>
                                        <p>Razvoj web stranica</p>
                                        </div>
                                    </div>

                                    <div className="services-item">
                                        <div className="services-contentIcon">
                                        <i className="fas fa-cubes fa-4x"></i>
                                        <p>Web i 3D dizajn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="services-contentSecond">
                                <h4 className="services-sub">Tehnologije</h4>
                                <div className="services-contentFirstItem">
                                    <div className="services-contentItem">
                                        <div className="services-contentItemIcon">
                                            <i className="fab fa-html5 fa-2x"></i>
                                        </div>
                                        <div className="services-contentItemText">
                                            <p>HTML5</p>
                                        </div>
                                    </div>

                                    <div className="services-contentItem">
                                        <div className="services-contentItemIcon">
                                            <i className="fab fa-css3 fa-2x"></i>
                                        </div>
                                        <div className="services-contentItemText">
                                            <p>CSS</p>
                                        </div>
                                    </div>

                                    <div className="services-contentItem">
                                        <div className="services-contentItemIcon">
                                            <i className="fab fa-js fa-2x"></i>
                                        </div>
                                        <div className="services-contentItemText">
                                            <p>JS</p>
                                        </div>
                                    </div>

                                    <div className="services-contentItem">
                                        <div className="services-contentItemIcon">
                                            <i className="fab fa-react fa-2x"></i>
                                        </div>
                                        <div className="services-contentItemText">
                                            <p>React JS</p>
                                        </div>
                                    </div>

                                    <div className="services-contentItem">
                                        <div className="services-contentItemIcon">
                                            <i className="fab fa-github fa-2x"></i>
                                        </div>
                                        <div className="services-contentItemText">
                                            <p>Git Hub</p>
                                        </div>
                                    </div>

                                    <div className="services-contentItem">
                                        <div className="services-contentItemIcon">
                                            <i className="fab fa-sass fa-2x"></i>
                                        </div>
                                        <div className="services-contentItemText">
                                            <p>SCSS</p>
                                        </div>
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