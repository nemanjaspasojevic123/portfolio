/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../assets/css/Portfolio.min.css';
import lincura from '../assets/images/lincura.png';
import weather from '../assets/images/weather.png';
import todo from '../assets/images/todoList.png';
import pixabay from '../assets/images/pixabay.png';
import girlWarrior from '../assets/images/Margot.jpg';
import jelena from '../assets/images/Jelena1.jpg';
import table from '../assets/images/Render bilijar.jpg';

const Portfolio = () => {
    return (
        <>
            <NavBar />
                <section className="portfolio-box">
                        <div className="portfolio">
                            <h1 className="portfolio-subject">Moji radovi</h1>

                            <div className="portfolio-items">
                                <div className="portfolio-item">
                                        <a href="https://lincura.netlify.app/"><img src={lincura} alt="noImg" className="portfolio-img"></img></a>    
                                        <h3 className="portfolio-itemTitle"><a href="https://lincura.netlify.app/" className="portfolio-itemLink">Lincura sajt</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Website</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                        <a href="https://weathermyapp.netlify.app/"><img src={weather} alt="" className="portfolio-img"></img></a>
                                        <h3 className="portfolio-itemTitle"><a href="https://weathermyapp.netlify.app/" className="portfolio-itemLink">Weather App</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                        <a href="https://nemanjaspasojevic123.github.io"><img src={pixabay} alt="" className="portfolio-img"></img></a>  
                                        <h3 className="portfolio-itemTitle"><a href="https://nemanjaspasojevic123.github.io" className="portfolio-itemLink">Pixabay Gallery</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                        <a href="https://mojatodolista.netlify.app/"><img src={todo} alt="" className="portfolio-img"></img></a>
                                        <h3 className="portfolio-itemTitle"><a href="https://mojatodolista.netlify.app/" className="portfolio-itemLink">ToDo List</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                        <a href="#"><img src={table} alt="" className="portfolio-img"></img></a>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/101871001/BilliarDining-Table" className="portfolio-itemLink">BilliarDining Table</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>3D Design</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                        <a href="#"><img src={girlWarrior} alt="" className="portfolio-img"></img></a>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/104711155/Character-Design-Girl-Warrior" className="portfolio-itemLink">Girl Warrior</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Character Design</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                        <a href="#"><img src={jelena} alt="" className="portfolio-img"></img></a>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/103926293/Jelena" className="portfolio-itemLink">Jelena</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Character Design</span>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-slider">
                            <Link to='/about' className='box-sliderAboutLink'><span><i className="fas fa-long-arrow-alt-left"></i> O meni</span></Link>
                            <Link to='/services' className='box-sliderServicesLink'><span>Usluge <i className="fas fa-long-arrow-alt-right"></i></span></Link>
                        </div>
                </section>
        </>
    )
}

export default Portfolio;