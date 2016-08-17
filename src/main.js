$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Guns = require('./components/guns/gunPage');
var About = require('./about/aboutPage');
var Header = require('./common/header');

(function (win) {
  "use strict";

  var App = React.createClass({
    render: function () {
      var Child;

      switch(this.props.route) {
        case 'about': Child = About;
        break;
        case 'guns': Child = Guns;
        break;
        default: Child = Home;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );

    }
  });

  function render() {
    var route = win.location.hash.substring(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener('hashchange', render);
  render();
})(window);
