"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

var LongGunList = React.createClass({
  render: function () {
    var createGunRow = function (gun) {
      return (
        <div key={gun.id}>
          <div className="gunRow col-md-3">
            <div className="img-thumbnail img-responsive"><img height="100px" src={gun.image}/></div>
            <div>{gun.modelName}</div>
            <div>${gun.price}</div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div className="bg-1-other">
        </div>
        <div className="in-background-text-other">
          <h1>Long Guns</h1>
        </div>
        <div className="bg-2">
        </div>
        <div className="break"></div>
        <div className="container">
          <div className="row">
            {this.props.guns.map(createGunRow, this)}
          </div>
        </div>
        <div className="bg-3">
          <div className="container footer">
            <address>
              7512 Grandview Ave<br></br>
              Arvada, CO 80002<br></br>
              720-988-9853<br></br>
              TUES-SAT: 10-7  SUN: 12-7
            </address>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LongGunList;
