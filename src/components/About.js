/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../assets/css/About.min.css'
import about_img from '../assets/images/DSC_8450.JPG'

const About = () => {
    return (
        <>
        <NavBar />
            <section className="about-box">
                <div className="box-inner">
                    <div className="about">
                            <div className="about-body">
                                <div className="about-bodyLeft">
                                    <h1 className='about-subject'>O meni</h1>
                                    <div className='about-subjectText'>
                                    <p>Zdravo, ja sam Nemanja.</p>
                                    <p>Dizajner i Front End Developer.</p>
                                    </div>
                                </div>
                                <div className="about-image">
                                    <img src={about_img} alt="" className="about-imageProfil"></img>
                                </div>
                            </div>

                            <div className="about-social">
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://www.linkedin.com/in/nemanjaspasojevic/"><i className="fab fa-linkedin fa-3x"></i></a>
                                    </div>
                                </div>
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://www.instagram.com/majstor.boob/"><i className="fab fa-instagram fa-3x"></i></a>
                                    </div>
                                </div>
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://www.behance.net/nemanjaspasojevic"><i className="fab fa-behance fa-3x"></i></a>
                                    </div>
                                </div>
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://github.com/nemanjaspasojevic123"><i className="fab fa-github fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    <div className="box-slider">
                        <a href="https://drive.google.com/file/d/1RldO_5aJv4cBlj6R7NZPsZK4D_qTXRnk/view?usp=sharing" className="box-sliderDownloadLink"><span>Preuzmite moj CV<i className="fas fa-download"></i></span></a>
                        <Link to='/portfolio' className='box-sliderPortfolioLink'><span>Portfolio <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;