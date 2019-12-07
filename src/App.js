import React from 'react';
import './App.scss';
import './responsive.scss';
import Home from "./page/Home";
import Details from "./page/Details";
import Property from "./page/Property";
import Default from "./page/Default";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {

  
  render () {
    return (
        <React.Fragment>
          <NavBar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/property/" exact component={Property} />
              <Route path="/details/:id" exact component={Details} />
              <Route component={Default} />
          </Switch>
          <Footer />
        </React.Fragment>
          
    );
  }
}

export default App;

