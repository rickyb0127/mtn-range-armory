"use strict";

var React = require('react');

var Contact = React.createClass({
  render: function () {
    return (
      <div>
        <div className="bg-1-other">
        </div>
        <div className="in-background-text-other">
          <h1>Contact</h1>
        </div>
        <div className="bg-2">
        </div>
        <div className="break"></div>
        <div className="container">
          <div className="centered">
            <h3>ORDERS, QUESTIONS, FEEDBACK, CUSTOM QUOTES: </h3>
          </div>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="subject">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <div className="form-group">
              <input className="btn btn-default" type="submit" value="Submit" />
            </div>
          </form>
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

module.exports = Contact;
