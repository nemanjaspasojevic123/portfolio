import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Education = () => {
  return (
    <>
      <NavBar />
        <section className="box">
            <div className="box-inner">
                <div className="education">
                    <h1>Obrazovanje</h1>
                        <div className="education-box">
                            <h4>IT BOOTCAMP</h4>
                            <h6>Razvoj Web aplikacija (JS)</h6>
                            <div className="time">Januar - Maj 2020</div>
                        </div>
                        <div className="education-box">
                            <h4>IT ACADEMY</h4>
                            <h6>3D Dizajn i CAD</h6>
                            <div className="time">Septembar 2019 - Jul 2020</div>
                        </div>
                        <div className="education-box">
                            <h4>ŠUMARSKI FAKULTET</h4>
                            <h6>Univerzitet u Beogradu</h6>
                            <div className="time">Diplomirani inženjer šumarstva, Klasa 2011</div>
                        </div>
                        <div className="education-box">
                            <h4>GIMNAZIJA ''JOSIF PANČIĆ''</h4>
                            <h6>Bajina Bašta</h6>
                            <div className="time">Prirodno-matematički smer, Klasa 2007</div>
                        </div>
                </div>
                <div className="box-slider">
                    <Link to='/services' className='box-sliderServicesLink'><span><i className="fas fa-long-arrow-alt-left"></i> Usluge</span></Link>
                    <Link to='/experience' className='box-sliderExperienceLink'><span>Iskustvo <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Education;