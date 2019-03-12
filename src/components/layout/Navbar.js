import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
const Navbar = () => {
    return (
        <div>
            <nav className="red darken-2">
                <div className="nav-wrapper">
                    <Link to='#' className="brand-logo"><img className="responsive-img" src={process.env.REACT_APP_BASE_NAME + "/img/logo.png"} height="50" alt="Marvel Manager"/></Link>
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <SignedInLinks className="right hide-on-med-and-down"/>
                </div>

            </nav>
            <SignedInLinks id="mobile-demo" className="sidenav"/>
            
        </div>

    )
}

export default Navbar;