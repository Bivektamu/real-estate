import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = () => {

return (
    <nav className="navbar navbar-expand">
          <span class="navbar-brand text-white" href="#">Rel Estate</span>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to="/" className="nav-link text-white">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/property/" className="nav-link text-white">Property</NavLink>
            </li>

        </ul>
    </nav>
)

}

export default NavBar;