"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var App = require('./components/app');
var HomePage = require('./components/homePage');
var Guns = require('./components/guns/gunPage');
var LongGuns = require('./components/guns/longGunPage');
var About = require('./components/about/aboutPage');
var Ammunitions = require('./components/ammunition/ammoPage');
var Contact = require('./components/contact/contactPage');
var Calendar = require('./components/calendar/calendarPage');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="guns" component={Guns} />
    <Route path="longGuns" component={LongGuns} />
    <Route path="about" component={About} />
    <Route path="ammunition" component={Ammunitions} />
    <Route path="contact" component={Contact} />
    <Route path="calendar" component={Calendar} />
  </Route>
);

module.exports = routes;
