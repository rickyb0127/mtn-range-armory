"use strict";

var React = require('react');

var Calendar = React.createClass({
  render: function () {
    return (
      <div>
        <div className="bg-1-other">
        </div>
        <div className="in-background-text-other">
          <h1>CCW Calendar</h1>
        </div>
        <div className="bg-2">
        </div>
        <div className="container">
          <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=joeguy0127%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FDenver" style={{border: 0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    );
  }
});

module.exports = Calendar;
