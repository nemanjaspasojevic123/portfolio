import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../assets/css/Education.min.css'

const Education = () => {
  return (
    <>
      <NavBar />
        <section className="education-box">
            <div className="box-inner">
                <div className="education">
                    <h1 className="education-subject">Obrazovanje</h1>
                        <div className="education-boxItem">
                            <a href="https://itbootcamp.rs/" className="education-boxItemTitle"><h2>IT BOOTCAMP</h2></a>
                            <h4 className="education-boxItemSubtitle">Razvoj Web aplikacija (JS)</h4>
                            <div className="time">Januar - Maj 2020</div>
                        </div>
                        <div className="education-boxItem">
                            <a href="https://www.it-akademija.com/" className="education-boxItemTitle"><h2>IT ACADEMY</h2></a>
                            <h4 className="education-boxItemSubtitle">3D Dizajn i CAD</h4>
                            <div className="time">Septembar 2019 - Jul 2020</div>
                        </div>
                        <div className="education-boxItem">
                            <a href="http://www.sfb.bg.ac.rs/" className="education-boxItemTitle"><h2>ŠUMARSKI FAKULTET</h2></a>
                            <h4 className="education-boxItemSubtitle">Univerzitet u Beogradu</h4>
                            <div className="time">Diplomirani inženjer šumarstva, Klasa 2011</div>
                        </div>
                        <div className="education-boxItem">
                            <a href="http://gimnazijabb.edu.rs/" className="education-boxItemTitle"><h2>GIMNAZIJA ''JOSIF PANČIĆ''</h2></a>
                            <h4 className="education-boxItemSubtitle">Bajina Bašta</h4>
                            <div className="time">Prirodno-matematički smer, Klasa 2007</div>
                        </div>
                </div>
                <div className="box-slider">
                    <Link to='/services' className="box-sliderServicesLink"><span><i className="fas fa-long-arrow-alt-left"></i> Usluge</span></Link>
                    <Link to='/experience' className="box-sliderExperienceLink"><span>Iskustvo<i className="fas fa-long-arrow-alt-right"></i></span></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Education;