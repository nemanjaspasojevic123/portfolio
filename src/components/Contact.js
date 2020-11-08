import React from 'react';
import NavBar from './NavBar';

const Contact = () => {
    return (
        <>
        <NavBar />
        <section className="box">
            <div className="box-inner">
                <div className="contact">
                    <h1>Kontakt</h1>
                    <div className="contact-body">
                        <div className="contact-bodyLeft">
                            <form className="form">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" placeholder="Vaše ime" required autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="vaš email" required autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" id="subject" placeholder="Naslov" required autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" placeholder="Vaša poruka"></textarea>
                                </div>
                                <button className="form-submit">Pošalji</button>
                            </form>
                        </div>
                        <div className="contact-bodyRight">
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
                                            <p>Klare Cetkin 7</p>
                                            <p>Novi Beograd, Srbija</p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;