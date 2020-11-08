import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Experience = () => {
    return (
        <>
            <NavBar />
                <section className="box">
                    <div className="box-inner">
                        <div className="experience">
                            <h1>Iskustvo</h1>
                                <div className="experience-box">
                                    <h4>PROJEKTANT NA UREĐIVANJU ŠUMA</h4>
                                    <h6>Nacionalni park "Tara", Bajina Bašta</h6>
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