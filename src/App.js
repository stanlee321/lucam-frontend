import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Installer from './components/install/Installer';

import './App.css';

class App extends Component {
  
  render() {

    return (
      
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/install" component={Installer} ></Route>
            <Route path="/monitor" component={Home} ></Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
