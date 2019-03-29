import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h3>HELLO WORLD</h3>
                  </div>
                  <div className="card-body">
                    <p>Asi es la vid</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
  }
}
