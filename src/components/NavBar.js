import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: null,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.setState({header: document.getElementById("header")});
        
      }

    
      handleScroll = () => {

        if(window.scrollY > 10) {
            this.state.header.classList.add('bg-blue');
        }
        else {
            this.state.header.classList.remove('bg-blue');
        }
      }

      handeToggle =() => {
        this.state.header.classList.toggle('active-nav');
      }
    render() {
        return (
            <header id="header">
                <NavLink to="/" exact className="navbar-brand white">Real Estate<span>.</span></NavLink>
                <div id="nav-toggle" onClick={this.handeToggle}><span></span></div>
                <nav id="menu" className="navbar navbar-expand-md navbar-expand-lg">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink onClick={this.handeToggle} to="/" exact className="nav-link text-white mx-3" activeClassName="active-page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={this.handeToggle} to="/property/" exact className="nav-link text-white mx-3" activeClassName="active-page">Property</NavLink>
                        </li>

                    </ul>
                </nav>
            </header>
            )
        }

}

export default NavBar;