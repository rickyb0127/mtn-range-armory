"use strict";

var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img src="images/mtn-range-armory-logo.png" />
            </a>
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/">Guns</a></li>
              <li><a href="/">Long Guns</a></li>
              <li><a href="/">Ammunition</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/#about">About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Sign Up for Our Newsletter</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
