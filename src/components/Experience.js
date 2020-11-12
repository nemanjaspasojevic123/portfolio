import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../assets/css/Expirience.min.css'

const Experience = () => {
    return (
        <>
            <NavBar />
                <section className="experience-box">
                    <div className="box-inner">
                        <div className="experience">
                            <h1 className="experience-subject">Iskustvo</h1>
                                <div className="experience-boxItem">
                                    <h2>PROJEKTANT NA UREĐIVANJU ŠUMA</h2>
                                    <h4>Nacionalni park "Tara", Bajina Bašta</h4>
                                    <div className="time">Decembar 2017 - April 2019</div>
                                     <p>Ovaj posao podrazumeva obaveze koje uključuju rad na planiranju, iskorišćavanju i očuvanju šuma u periodu od 10 godina.</p>
                                </div>
                        </div>
                        <div className="box-slider">
                            <Link to='/education' className='box-sliderEducationLink'><span><i className="fas fa-long-arrow-alt-left"></i> Obrazovanje</span></Link>
                            <Link to='/contact' className='box-sliderContactLink'><span>Kontakt <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Experience;