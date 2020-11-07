import React from 'react';
import NavBar from './NavBar';

const Experience = () => {
    return (
        <>
        <NavBar />
        <section className="box">
        <div className="box__inner">
          <div className="experience">
            <h1>Iskustvo</h1>
            <div className="experience__box">
              <h4>PROJEKTANT NA UREĐIVANJU ŠUMA</h4>
              <h6>Nacionalni park "Tara", Bajina Bašta</h6>
              <div className="time">Decembar 2017 - April 2019</div>
              <p>Ovaj posao podrazumeva obaveze koje uključuju rad na planiranju, iskorišćavanju i očuvanju šuma u periodu od 10 godina.</p>
            </div>
          </div>
          <div className="box__inner_foot">
            <a href="services.html" className="btn btn--icon-before"><span><i className="fas fa-long-arrow-alt-left"></i> Obrazovanje</span></a>
            <a href="contact.html" className="btn"><span>Kontakt <i className="fas fa-long-arrow-alt-right"></i></span></a>
          </div>
        </div>
      </section>
      </>
    )
}

export default Experience;