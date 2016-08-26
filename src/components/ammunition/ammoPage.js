"use strict";

var React = require('react');
var AmmoApi = require('../../api/ammoApi');
var AmmoList = require('./ammoList');

var AmmoPage = React.createClass({
  getInitialState: function () {
    return {
      ammos: []
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({ ammos: AmmoApi.getAllAmmos() });
    }
  },

  render: function () {
    return (
      <div>
        <AmmoList ammos={this.state.ammos} />
      </div>
    );
  }
});

module.exports = AmmoPage;
