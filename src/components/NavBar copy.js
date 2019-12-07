import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = () => {

return (
    <header>
        <nav className="navbar navbar-expand container-fluid">
        <NavLink to="/" exact className="navbar-brand white">Real Estate<span>.</span></NavLink>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link text-white mx-3" activeClassName="active-page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/property/" exact className="nav-link text-white mx-3" activeClassName="active-page">Property</NavLink>
                </li>

            </ul>
            </div>
        </nav>
    </header>
)

}

export default NavBar;