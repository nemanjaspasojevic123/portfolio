import React from 'react';
import NavBar from './NavBar';

const Services = () => {
    return (
        <>
        <NavBar />
        <section className="box">
            <div className="box__inner">
                <div className="services">
                    <div className="services__content">
                        <h1>Usluge</h1>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>Razvoj web stranica</p>
                            </div>
                        </div>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>Web i 3D dizajn</p>
                            </div>
                        </div>
                    </div>
                    <div className="services__content">
                        <h4>Tehnologije</h4>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fab fa-html5"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>HTML5</p>
                            </div>
                        </div>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fab fa-css3"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>CSS</p>
                            </div>
                        </div>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fab fa-js"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>JS</p>
                            </div>
                        </div>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fab fa-react"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>React JS</p>
                            </div>
                        </div>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>Git Hub</p>
                            </div>
                        </div>
                        <div className="services__content_item">
                            <div className="services__content_item-icon">
                                <i className="fab fa-sass"></i>
                            </div>
                            <div className="services__content_item-text">
                                <p>SCSS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box__inner_foot">
                    <a href="portfolio.html" className="btn btn--icon-before"><span><i className="fas fa-long-arrow-alt-left"></i> Portfolio</span></a>
                    <a href="experience.html" className="btn"><span>Iskustvo <i className="fas fa-long-arrow-alt-right"></i></span></a>
                </div>
            </div>
        </section>
        </>
    );
}

export default Services;