import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = () => {

return (
    <header>
        <nav className="navbar navbar-expand">
            <div class="navbar-brand text-white" href="#">Real Estate<span>.</span></div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link text-white mx-3" activeClassName="active-page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/property/" exact className="nav-link text-white mx-3" activeClassName="active-page">Property</NavLink>
                </li>

            </ul>
        </nav>
    </header>
)

}

export default NavBar;