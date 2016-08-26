"use strict";

var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <div className="bg-1-other">
        </div>
        <div className="in-background-text-other">
          <h1>About</h1>
        </div>
        <div className="bg-2">
        </div>
        <div className="break"></div>
        <div className="container">
          <p>
          Lorem ipsum dolor sit amet, tota movet te nec, enim complectitur ius eu. An eripuit qualisque mei, eam epicurei constituto cu. Est ut vide dolor prodesset, ius epicurei persecuti in. Sed ad voluptatum scripserit, his in noster liberavisse. Eam eius iriure definiebas ei, nam alii adhuc quando ne. Soluta maiorum vis at.
          </p>
        </div>
        <div className="bg-3">
          <div className="container footer">
            <address>
              7512 Grandview Ave<br></br>
              Arvada, CO 80002<br></br>
              720-988-9853<br></br>
              TUES-SAT: 10-7  SUN: 12-7
            </address>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
