import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../assets/css/Services.min.css';
import mysql from '../assets/icons/mysql.png';
import figma from '../assets/icons/figma.png';
import office from '../assets/icons/office.png';
import gulp from '../assets/icons/gulp.png';
import autocad from '../assets/icons/autocad.png';
import max from '../assets/icons/3ds-max.png';
import photoshop from '../assets/icons/photoshop.png';
import illustrator from '../assets/icons/adobe-illustrator.png';

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
                                <div className="services-contentSecondItem">
                                    <div className="services-contentItem">
                                            <i className="fab fa-html5 fa-2x"></i>
                                            <p>HTML5</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <i className="fab fa-css3 fa-2x"></i>
                                            <p>CSS3</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <i className="fab fa-js fa-2x"></i>
                                            <p>JavaScript</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <i className="fab fa-react fa-2x"></i>
                                            <p>React JS</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <i className="fab fa-github fa-2x"></i>
                                            <p>Git Hub</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <i className="fab fa-sass fa-2x"></i>
                                            <p>SASS</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={gulp} alt=""></img>
                                            <p>Gulp</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={mysql} alt=""></img>
                                            <p>MySQL</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={photoshop} alt=""></img>
                                            <p>Adobe Photoshop</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={illustrator} alt=""></img>
                                            <p>Adobe Illustrator</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={max} alt=""></img>
                                            <p>3ds Max</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={autocad} alt=""></img>
                                            <p>AutoCAD</p>
                                    </div>


                                    <div className="services-contentItem">
                                            <img src={figma} alt=""></img>
                                            <p>Figma</p>
                                    </div>

                                    <div className="services-contentItem">
                                            <img src={office} alt=""></img>
                                            <p>Microsoft Office</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-slider">
                            <Link to='/portfolio' className='box-sliderPortfolioLink'><span><i className="fas fa-long-arrow-alt-left"></i> Portfolio</span></Link>
                            <Link to='/education' className='box-sliderEducationLink'><span>Obrazovanje<i className="fas fa-long-arrow-alt-right"></i></span></Link>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Services;