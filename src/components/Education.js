import React from 'react';
import NavBar from './NavBar';

const Education = () => {
    return (
        <>
        <NavBar />
        <section className="box">
        <div className="box__inner">
          <div className="education">
            <h1>Obrazovanje</h1>
            <div className="education__box">
              <h4>IT BOOTCAMP</h4>
              <h6>Razvoj Web aplikacija (JS)</h6>
              <div className="time">Januar - Maj 2020</div>
            </div>
            <div className="education__box">
              <h4>IT ACADEMY</h4>
              <h6>3D Dizajn i CAD</h6>
              <div className="time">Septembar 2019 - Jul 2020</div>
            </div>
            <div className="education__box">
              <h4>ŠUMARSKI FAKULTET</h4>
              <h6>Univerzitet u Beogradu</h6>
              <div className="time">Diplomirani inženjer šumarstva, Klasa 2011</div>
            </div>
            <div className="education__box">
              <h4>GIMNAZIJA ''JOSIF PANČIĆ''</h4>
              <h6>Bajina Bašta</h6>
              <div className="time">Prirodno-matematički smer, Klasa 2007</div>
            </div>
          </div>
          <div className="box__inner_foot">
            <a href="services.html" className="btn btn--icon-before"><span><i className="fas fa-long-arrow-alt-left"></i> Usluge</span></a>
            <a href="contact.html" className="btn"><span>Iskustvo <i className="fas fa-long-arrow-alt-right"></i></span></a>
          </div>
        </div>
      </section>
      </>
    )
}

export default Education;