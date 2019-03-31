import React, { Component } from 'react';
import dems_logo from 'assets/dems.svg';

// import Home from './Home';
// import Install from './install/Installer';

// import { BrowserRouter, Route} from 'react-router-dom';


export class Navbar extends Component {

  redirectToComponentHome = () => {
    return (
      this.props.history.push("/")
    );
  }

  redirectToComponentInstall = () => {
    return (
      this.props.history.push("/install")
    );
  }
  render() {
    return (

      <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
        <img className="rounded-circle" alt="64x64" src={dems_logo} width="64" height="64" />
          <a className="navbar-brand" href="/" >Dems Interface</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" onClick={this.redirectToComponentHome}> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={this.redirectToComponentInstall}>Insaller</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>

    )
  }
}

export default Navbar
