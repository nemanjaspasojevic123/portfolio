import React from 'react';
import NavBar from './NavBar';

const Contact = () => {
    return (
        <>
        <NavBar />
        <section className="box">
            <div className="box__inner">
                <div className="contact">
                    <h1>Kontakt</h1>
                    <div className="contact__body">
                        <div className="contact__body_left">
                            <form className="form">
                                <div className="form__group">
                                    <input type="text" name="name" id="name" placeholder="Vaše ime" required autoComplete="off" />
                                </div>
                                <div className="form__group">
                                    <input type="email" name="email" id="email" placeholder="vaš email" required autoComplete="off" />
                                </div>
                                <div className="form__group">
                                    <input type="text" name="subject" id="subject" placeholder="Naslov" required autoComplete="off" />
                                </div>
                                <div className="form__group">
                                    <textarea name="message" id="message" placeholder="Vaša poruka"></textarea>
                                </div>
                                <button className="form__submit">Pošalji</button>
                            </form>
                        </div>
                        <div className="contact__body_right">
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