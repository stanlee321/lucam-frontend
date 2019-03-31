import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import logo from 'assets/logo.svg';

export default class Home extends Component {

  navigateTo = () => {
    return (
      this.props.history.push("/install"));
  }
  render() {
    const img1 =`
                data:image/gif;
                base64,
                R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="cover-heading">Cho,,,ose the app to Install.</h1>
        <p className="lead">From here you can start the installation process of the following apps.</p>
        <Container className="container-slider">
            <Row>
            <Col xs="6" sm="4">
                <div className="container">
                    <img className="rounded-circle" alt="140x140"  onClick={this.navigateTo} src="https://placehold.it/140x140" />
                    <h2>People Coungg</h2>
                </div>
            </Col>
            <Col xs="6" sm="4">
                <div className="container">
                    <img className="rounded-circle" src={img1}  alt="Generic placeholder 2" width="140" height="140"/>
                    <h2>App 2</h2>
                </div>
            </Col>
            <Col sm="4">
                <div className="container">
                    <img className="rounded-circle" src={img1} alt="Generic placeholder 3" width="140" height="140"/>
                    <h2>App 3</h2>
                </div>
            </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
