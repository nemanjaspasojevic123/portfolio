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
                                    <h1 className="about-subject">O meni</h1>
                                    <div className="about-subjectText">
                                    <p>Zdravo, ja sam Nemanja.</p>
                                    <p>Dizajner i Front End Developer.</p>
                                    <div className="about-subjectSubtext">
                                    <label>Godine: </label><label className="about-subjectSubtextLeft"> 28</label>
                                    </div>
                                    <div className="about-subjectSubtext">
                                    <label>Grad: </label><label className="about-subjectSubtextLeft"> Beograd</label>
                                    </div>
                                    <div className="about-subjectInterestSubtext">
                                    <label>Interesovanja: </label>
                                    <div className="about-subjectInterestLeft">
                                        <div className="about-InterestLeftsocialItemIcon">
                                        <i className="fa fa-basketball-ball fa-2x"></i>
                                        </div>
                                        <div className="about-InterestLeftsocialItemIcon">
                                        <i className="fa fa-pencil-ruler fa-2x"></i>
                                        </div>
                                        <div className="about-InterestLeftsocialItemIcon">
                                        <i className="fa fa-camera fa-2x"></i>
                                        </div>
                                        <div className="about-InterestLeftsocialItemIcon">
                                        <i className="fa fa-tools fa-2x"></i>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="about-image">
                                    <img src={about_img} alt="" className="about-imageProfil"></img>
                                </div>
                            </div>

                            <div className="about-social">
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://www.linkedin.com/in/nemanjaspasojevic/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                                    </div>
                                </div>
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://www.instagram.com/majstor.boob/" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                                    </div>
                                </div>
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://www.behance.net/nemanjaspasojevic" target="_blank" rel="noreferrer"><i className="fab fa-behance fa-2x"></i></a>
                                    </div>
                                </div>
                                <div className="about-socialItem">
                                    <div className="about-socialItemIcon">
                                        <a href="https://github.com/nemanjaspasojevic123" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    <div className="box-slider">
                        <a href="https://drive.google.com/file/d/10bKAhLyuSGpBrB8yKaUMem6uiz1wR-Us/view?usp=sharing" target="_blank" rel="noreferrer" className="box-sliderDownloadLink"><span>Preuzmite moj CV <i className="fas fa-download"></i></span></a>
                        <Link to='/portfolio' className='box-sliderPortfolioLink'><span>Portfolio<i className="fas fa-long-arrow-alt-right"></i></span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;