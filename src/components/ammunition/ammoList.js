"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

var AmmoList = React.createClass({
  render: function () {
    var createAmmoRow = function (ammo) {
      return (
        <div key={ammo.id}>
          <div className="item-row col-md-3">
            <div className="img-thumbnail img-responsive"><img height="100px" src={ammo.image}/></div>
            <div>{ammo.modelName}</div>
            <div>${ammo.price}</div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div className="bg-1-other">
        </div>
        <div className="in-background-text-other">
          <h1>Ammunition</h1>
        </div>
        <div className="bg-2">
        </div>
        <div className="break"></div>
        <div className="container">
          <div className="row">
            {this.props.ammos.map(createAmmoRow, this)}
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

module.exports = AmmoList;
