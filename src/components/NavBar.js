import React, { Component} from "react";
import { Link } from "react-router-dom";
import '../assets/css/NavBar.min.css'


class NavBar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
    return (
        <div className="nav-bar"> 
        <div className="nav-icon" onClick={this.handleClick}><i className={this.state.clicked ? 'fas fa-times fa-1x' : 'fas fa-bars fa-1x'}></i></div>
            <div className={this.state.clicked ? "nav-fildes active" : "nav-fildes"}>
                    <Link to='/about' className='navLink'>
                        <div className="nav-text">O meni</div>
                    </Link> 

                    <Link to='/portfolio' className='navLink'>
                        <div className="nav-text">Portfolio</div>
                    </Link>     

                    <Link to='/services' className='navLink'>
                        <div className="nav-text">Usluge</div>
                    </Link>

                    <Link to='/education' className='navLink'>
                        <div className="nav-text">Obrazovanje</div>
                    </Link>

                    <Link to='/experience' className='navLink'>
                        <div className="nav-text">Iskustvo</div>
                    </Link>

                    <Link to='/contact' className='navLink'>
                        <div className="nav-text">Kontakt</div>
                    </Link>
            </div>
        </div>
    )
    }
}


export default NavBar