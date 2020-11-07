/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavBar from './NavBar';

const Portfolio = () => {
    return (
        <>
        <NavBar />
        <section className="box">
          <div className="box__inner">
            <div className="portfolio">
              <h1>Moji radovi</h1>
              <div className="portfolio__items">
                <div className="portfolio__items_item">
                  <div className="portfolio__items_item-img">
                    <a href="#"><i className="fas fa-link"></i></a>
                    <img src="dist/assets/images/portfolio-item-1.jpg" alt=""></img>
                  </div>
                  <div className="portfolio__items_item-category">
                    <span>Website</span>
                  </div>
                  <h3><a href="#">Portfolio item 1</a></h3>
                </div>
                <div className="portfolio__items_item">
                  <div className="portfolio__items_item-img">
                    <a href="#"><i className="fas fa-link"></i></a>
                    <img src="dist/assets/images/portfolio-item-2.jpg" alt=""></img>
                  </div>
                  <div className="portfolio__items_item-category">
                    <span>React JS App</span>
                  </div>
                  <h3><a href="#">Portfolio item 2</a></h3>
                </div>
                <div className="portfolio__items_item">
                  <div className="portfolio__items_item-img">
                    <a href="#"><i className="fas fa-link"></i></a>
                    <img src="dist/assets/images/portfolio-item-3.jpg" alt=""></img>
                  </div>
                  <div className="portfolio__items_item-category">
                    <span>Website</span>
                  </div>
                  <h3><a href="#">Portfolio item 3</a></h3>
                </div>
              </div>
            </div>
            <div className="box__inner_foot">
              <a href="about.html" className="btn btn--icon-before"><span><i className="fas fa-long-arrow-alt-left"></i> O meni</span></a>
              <a href="services.html" className="btn"><span>Usluge <i className="fas fa-long-arrow-alt-right"></i></span></a>
            </div>
          </div>
        </section>
        </>
    )
}

export default Portfolio;