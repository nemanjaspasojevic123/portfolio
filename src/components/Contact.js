import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from './NavBar';
import '../assets/css/Contact.min.css'
import { Link } from 'react-router-dom';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_memimail', e.target, 'user_fWkE8RDeYOrr1dbPXKpky')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          e.target.reset()
    }

    return (
        <>
        <NavBar />
        <section className="contact-box">
            <div className="box-inner">
                <div className="contact">
                    <h1 className="contact-subject">Kontakt</h1>
                    <div className="contact-bodyItem">
                        <div className="contact-bodyLeft">
                            <form className="form" onSubmit={sendEmail}>
                                <div className="form-group">
                                    <input type="text" name="name" id="name" placeholder="Vaše ime" required autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="Vaš email" required autoComplete="off" />
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
                            <div className="contact-boxItem">
                                <div className="contact-boxRow">
                                    <div className="contact-boxRowIcon">
                                        <i className="fas fa-envelope fa-2x"></i>
                                    </div>
                                    <div className="contact-boxRowText">
                                        <p>nemanja.spasojevic.memi@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-boxRow">
                                    <div className="contact-boxRowIcon">
                                        <i className="fas fa-phone fa-2x"></i>
                                    </div>
                                    <div className="contact-boxRowText">
                                        <p>+381 65 406 43 42</p>
                                    </div>
                                </div>
                                <div className="contact-boxRow">
                                    <div className="contact-boxRowIcon">
                                        <i className="fas fa-map-marker-alt fa-2x"></i>
                                    </div>
                                    <div className="contact-boxRowText">
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

            <div className="box-slider">
            <Link to='/experience' className="box-sliderExperienceLink"><span><i className="fas fa-long-arrow-alt-left"></i> Iskustvo</span></Link>
                <Link to='/about' className='box-sliderAboutLink'><span>O meni<i className="fas fa-long-arrow-alt-right"></i></span></Link>
            </div>
        </section>
        </>
    )  
}

export default Contact;