"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <Link to="app" className="navbar-brand">
              <img src="images/mtn-range-armory-logo.png" />
            </Link>
            <ul className="nav navbar-nav">
              <li><Link to="app">HOME</Link></li>
              <li><Link to="guns">GUNS</Link></li>
              <li><Link to="app">LONG GUNS</Link></li>
              <li><Link to="app">AMUNITION</Link></li>
              <li><Link to="app">CONTACT</Link></li>
              <li><Link to="about">ABOUT</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="app">SIGN UP FOR OUR NEWSLETTER</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
