/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const About = () => {
    return (
        <>
        <NavBar />
            <section className="box">
                <div className="box-inner">
                    <div className="about">
                        <h1>O meni</h1>
                        <div className="about-body">
                            <div className="about-bodyLeft">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus praesentium ut quos culpa perferendis libero ullam nulla, harum a quam.</p>
                            </div>
                            <div className="about-bodyRight">
                                <div className="contact-box">
                                    <div className="contact-boxRow">
                                        <div className="contact-boxRowIcon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="contact-boxRowText">
                                            <h5>Email</h5>
                                            <p>nemanja.spasojevic.memi@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-boxRow">
                                        <div className="contact-boxRowIcon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="contact-boxRowText">
                                            <h5>Telefon</h5>
                                            <p>+381 65 406 43 42</p>
                                        </div>
                                    </div>
                                    <div className="contact-boxRow">
                                        <div className="contact-boxRowIcon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-boxRowText">
                                            <h5>Adresa</h5>
                                            <address>
                                                <p>Klare Cetkin, 7</p>
                                                <p>Novi Beograd, Srbija</p>
                                            </address>
                                        </div>
                                    </div>

                                    <div className="about-social">
                                        <div className="about-socialItem">
                                            <div className="about-socialItemIcon">
                                                <a href="https://www.linkedin.com/in/nemanjaspasojevic/"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="about-socialItem">
                                            <div className="about-socialItemIcon">
                                                <a href="https://www.instagram.com/majstor.boob/"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="about-socialItem">
                                            <div className="about-socialItemIcon">
                                                <a href="https://www.behance.net/nemanjaspasojevic"><i className="fab fa-behance"></i></a>
                                            </div>
                                        </div>
                                        <div className="about-socialItem">
                                            <div className="about-socialItemIcon">
                                                <a href="https://github.com/nemanjaspasojevic123"><i className="fab fa-github"></i></a>
                                            </div>
                                        </div>
                                    </div>    
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