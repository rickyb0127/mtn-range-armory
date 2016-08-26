"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var App = require('./components/app');
var HomePage = require('./components/homePage');
var Guns = require('./components/guns/gunPage');
var About = require('./components/about/aboutPage');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="guns" component={Guns} />
    <Route path="about" component={About} />
  </Route>
);

module.exports = routes;
