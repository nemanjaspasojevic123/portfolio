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
import myself from '../assets/images/ja-ilistracija.jpg';
import table from '../assets/images/Render bilijar.jpg';
import abroyal from '../assets/images/AB Logo Mockup.jpg';
import grand from '../assets/images/Grand.png';
import diopta from '../assets/images/Diopta_presentation_final.png'

const Portfolio = () => {
    return (
        <>
            <NavBar />
                <section className="portfolio-box">
                        <div className="portfolio">
                            <h1 className="portfolio-subject">Moji radovi</h1>

                            <div className="portfolio-items">
                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://lincura.netlify.app/" target="_blank" rel="noreferrer"><img src={lincura} alt="noImg" className="portfolio-img"></img></a>    
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://lincura.netlify.app/" target="_blank" rel="noreferrer" className="portfolio-itemLink">Lincura sajt</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Website</span>
                                        <a href="https://github.com/nemanjaspasojevic123/lincura_sajt" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-github fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://weathermyapp.netlify.app/" target="_blank" rel="noreferrer"><img src={weather} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://weathermyapp.netlify.app/" target="_blank" rel="noreferrer" className="portfolio-itemLink">Weather App</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        <a href="https://github.com/nemanjaspasojevic123/Weather-App" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-github fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://grandfront.netlify.app/" target="_blank" rel="noreferrer"><img src={grand} alt="noImg" className="portfolio-img"></img></a>    
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://grandfront.netlify.app/" target="_blank" rel="noreferrer" className="portfolio-itemLink">Grand sajt</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Website</span>
                                        <a href="https://github.com/nemanjaspasojevic123/grand_front" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-github fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://nemanjaspasojevic123.github.io" target="_blank" rel="noreferrer"><img src={pixabay} alt="" className="portfolio-img"></img></a>  
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://nemanjaspasojevic123.github.io" target="_blank" rel="noreferrer" className="portfolio-itemLink">Pixabay Gallery</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        <a href="https://github.com/nemanjaspasojevic123/projekat" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-github fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://mojatodolista.netlify.app/" target="_blank" rel="noreferrer"><img src={todo} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://mojatodolista.netlify.app/" target="_blank" rel="noreferrer" className="portfolio-itemLink">ToDo List</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        <a href="https://github.com/nemanjaspasojevic123/Todo-List" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-github fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://www.behance.net/gallery/101871001/BilliarDining-Table" target="_blank" rel="noreferrer"><img src={table} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/101871001/BilliarDining-Table" target="_blank" rel="noreferrer" className="portfolio-itemLink">BilliarDining Table</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>3D Design</span>
                                        <a href="https://www.behance.net/gallery/101871001/BilliarDining-Table" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-behance fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://www.behance.net/gallery/115733555/Diopta-Website-Redesign" target="_blank" rel="noreferrer"><img src={diopta} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/115733555/Diopta-Website-Redesign" target="_blank" rel="noreferrer" className="portfolio-itemLink">Diopta</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Website Redesign</span>
                                        <a href="https://www.behance.net/gallery/115733555/Diopta-Website-Redesign" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-behance fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://www.behance.net/gallery/104711155/Character-Design-Girl-Warrior" target="_blank" rel="noreferrer"><img src={girlWarrior} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/104711155/Character-Design-Girl-Warrior" target="_blank" rel="noreferrer" className="portfolio-itemLink">Girl Warrior</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Character Design</span>
                                        <a href="https://www.behance.net/gallery/104711155/Character-Design-Girl-Warrior" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-behance fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://www.behance.net/gallery/102433605/An-illustration-of-myself" target="_blank" rel="noreferrer"><img src={myself} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/102433605/An-illustration-of-myself" target="_blank" rel="noreferrer" className="portfolio-itemLink">Nemanja</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Illustration</span>
                                        <a href="https://www.behance.net/gallery/102433605/An-illustration-of-myself" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-behance fa-2x"></i></a>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                <div className="portfolio-itemImage">
                                        <a href="https://www.behance.net/gallery/103934673/AB-Royal-Logo" target="_blank" rel="noreferrer"><img src={abroyal} alt="" className="portfolio-img"></img></a>
                                        </div>
                                        <h3 className="portfolio-itemTitle"><a href="https://www.behance.net/gallery/103934673/AB-Royal-Logo" target="_blank" rel="noreferrer" className="portfolio-itemLink">AB Royal</a></h3>
                                        <div className="portfolio-itemCategory">
                                        <span>Logo Design </span>
                                        <a href="https://www.behance.net/gallery/103934673/AB-Royal-Logo" target="_blank" rel="noreferrer" className="portfolio-itemTitle"><i className="fab fa-behance fa-2x"></i></a>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-slider">
                            <Link to='/about' className='box-sliderAboutLink'><span><i className="fas fa-long-arrow-alt-left"></i> O meni</span></Link>
                            <Link to='/services' className='box-sliderServicesLink'><span>Usluge<i className="fas fa-long-arrow-alt-right"></i></span></Link>
                        </div>
                </section>
        </>
    )
}

export default Portfolio;