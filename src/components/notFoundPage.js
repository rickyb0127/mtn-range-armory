"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function () {
    return (
      <div className="bg-1">
        <div className="container">
          <div className="jumbotron welcome-panel-1">
            <h1>404 Not Found</h1>
            <p>These are not the droids you are looking for</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NotFoundPage;
