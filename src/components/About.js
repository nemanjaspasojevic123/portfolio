/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavBar from './NavBar';

const About = () => {
    return (
        <>
            <NavBar />
            <section className="box">
                <div className="box__inner">
                    <div className="about">
                        <h1>O meni</h1>
                        <div className="about__body">
                            <div className="about__body_left">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><br></br>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus praesentium ut quos culpa perferendis libero ullam nulla, harum a quam.</p><br></br>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus debitis consequatur architecto aut eligendi dolorem at nobis est expedita. Ex, minima nostrum!</p><br></br>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti tempore rerum laudantium laboriosam in dicta ipsa corporis cupiditate.</p><br></br>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit facere, harum nam neque nulla. Mollitia corrupti reprehenderit veritatis ut porro!</p><br></br>
                            </div>
                            <div className="about__body_right">
                                <div className="contact-box">
                                    <div className="contact-box__row">
                                        <div className="contact-box__row_icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="contact-box__row_text">
                                            <h5>Email</h5>
                                            <p>nemanja.spasojevic.memi@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-box__row">
                                        <div className="contact-box__row_icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="contact-box__row_text">
                                            <h5>Telefon</h5>
                                            <p>+381 65 406 43 42</p>
                                        </div>
                                    </div>
                                    <div className="contact-box__row">
                                        <div className="contact-box__row_icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-box__row_text">
                                            <h5>Adresa</h5>
                                            <address>
                                                <p>Klare Cetkin, 7</p>
                                                <p>Novi Beograd, Srbija</p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box__inner_foot">
                        <a href="#" className="btn"><span>Preuzmite moj CV<i className="fas fa-download"></i></span></a>
                        <a href="portfolio.html" className="btn"><span>Portfolio <i className="fas fa-long-arrow-alt-right"></i></span></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;