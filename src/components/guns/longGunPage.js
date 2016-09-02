"use strict";

var React = require('react');
var LongGunApi = require('../../api/longGunApi');
var LongGunList = require('./longGunList');

var LongGunPage = React.createClass({
  getInitialState: function () {
    return {
      longGuns: []
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({ longGuns: LongGunApi.getAllGuns() });
    }
  },

  render: function () {
    return (
      <div>
        <LongGunList longGuns={this.state.longGuns} />
      </div>
    );
  }
});

module.exports = LongGunPage;
