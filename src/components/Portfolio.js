/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import lincura from '../assets/lincura.png';
import weather from '../assets/weather.png';
import todo from '../assets/todoList.png';
import pixabay from '../assets/pixabay.png';
import girlWarrior from '../assets/Margot.jpg';
import jelena from '../assets/Jelena1.jpg';
import table from '../assets/Prikaz 1.png';

const Portfolio = () => {
    return (
        <>
            <NavBar />
                <section className="box">
                    <div className="box-inner">
                        <div className="portfolio">
                        <h1>Moji radovi</h1>
                            <div className="portfolio-items">

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="https://lincura.netlify.app/"><img src={lincura} alt="noImg" height="200px"></img></a>    
                                        <h3><a href="https://lincura.netlify.app/">Lincura sajt</a></h3>
                                    </div>
                                        <div className="portfolio-itemCategory">
                                        <span>Website</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="https://weathermyapp.netlify.app/"><img src={weather} alt="" height="200px"></img></a>
                                        <h3><a href="https://weathermyapp.netlify.app/">Weather App</a></h3>
                                    </div>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="https://nemanjaspasojevic123.github.io"><img src={pixabay} alt="" height="200px"></img></a>  
                                        <h3><a href="https://nemanjaspasojevic123.github.io">Pixabay Gallery</a></h3>
                                    </div>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="https://mojatodolista.netlify.app/"><img src={todo} alt="" height="200px"></img></a>
                                        <h3><a href="https://mojatodolista.netlify.app/">ToDo List</a></h3>
                                    </div>
                                        <div className="portfolio-itemCategory">
                                        <span>React JS App</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="#"><img src={table} alt="" height="200px"></img></a>
                                        <h3><a href="https://www.behance.net/gallery/101871001/BilliarDining-Table">BilliarDining Table</a></h3>
                                    </div>
                                        <div className="portfolio-itemCategory">
                                        <span>3D Design</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="#"><img src={girlWarrior} alt="" height="200px"></img></a>
                                        <h3><a href="https://www.behance.net/gallery/104711155/Character-Design-Girl-Warrior">Girl Warrior</a></h3>
                                    </div>
                                        <div className="portfolio-itemCategory">
                                        <span>Character Design</span>
                                        </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio-itemImg">
                                        <a href="#"><img src={jelena} alt="" height="200px"></img></a>
                                        <h3><a href="https://www.behance.net/gallery/103926293/Jelena">Jelena</a></h3>
                                    </div>
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
                    </div>
                </section>
        </>
    )
}

export default Portfolio;