import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <div className="navbar-fixed">
            <nav className="red darken-2">
                <div className="nav-wrapper">
                    <div className="mobile-view"><Link to='/' className="brand-logo center"><img className="responsive-img" src="./img/logo1.png" alt="Marvel Manager" /></Link></div>
                    <div className="desktop-view"><Link to='/' className="brand-logo center"><img className="responsive-img" src="./img/logo1.png" alt="Marvel Manager" /></Link></div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;