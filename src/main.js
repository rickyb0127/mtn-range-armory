"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var render = ReactDOM.render;
var hashHistory = ReactRouter.hashHistory;

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
);
