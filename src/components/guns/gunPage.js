"use strict";

var React = require('react');
var GunApi = require('../../api/gunApi');

var Guns = React.createClass({
  getInitialState: function () {
    return {
      guns: []
    };
  },
  componentWillMount: function () {
    this.setState({ guns: GunApi.getAllGuns() });
  },
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
        <div className="bg-1">
          <div className="container">
            <div className="jumbotron welcome-panel-1">
              <h2>GUNS</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.guns.map(createGunRow, this)}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Guns;
