"use strict";

var React = require('react');
// var Route = require('react-router');
// var Link = Route.Link;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

$(document).ready(function () {
  $('.navbar-collapse').click('li', function() {
    $('.navbar-toggle').click();
  });
});

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink to="/" className="navbar-brand">
                <img src="images/mtn-range-armory-logo.png" className="nav-logo" />
              </IndexLink>
            </div>
            <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/">HOME</IndexLink></li>
                <li><Link to="/guns">GUNS</Link></li>
                <li><Link to="/longGuns">LONG GUNS</Link></li>
                <li><Link to="/ammunition">AMMUNITION</Link></li>
                <li><Link to="/">CONTACT</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
