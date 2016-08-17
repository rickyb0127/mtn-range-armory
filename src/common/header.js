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
              <li><a href="/">HOME</a></li>
              <li><a href="/#guns">GUNS</a></li>
              <li><a href="/">LONG GUNS</a></li>
              <li><a href="/">AMUNITION</a></li>
              <li><a href="/">CONTACT</a></li>
              <li><a href="/#about">ABOUT</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">SIGN UP FOR OUR NEWSLETTER</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
