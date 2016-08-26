"use strict";

var React = require('react');
var GunApi = require('../../api/gunApi');
var GunList = require('./longGunList');

var LongGunPage = React.createClass({
  getInitialState: function () {
    return {
      guns: []
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({ guns: GunApi.getAllGuns() });
    }
  },

  render: function () {
    return (
      <div>
        <GunList guns={this.state.guns} />
      </div>
    );
  }
});

module.exports = LongGunPage;
