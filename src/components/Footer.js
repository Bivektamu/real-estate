import React from 'react';
import {NavLink} from 'react-router-dom';
const Footer = () => {

return (
    <footer className="py-5 mt-5">
        <div className="navbar navbar-expand navbar-expand-sm container-fluid">
            <div className="navbar-brand text-blue" href="#">Real Estate<span>.</span></div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link text-blue mx-3" activeClassName="active-page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/property/" exact className="nav-link text-blue mx-3" activeClassName="active-page">Property</NavLink>
                </li>

            </ul>
        </div>
    </footer>
)

}

export default Footer;