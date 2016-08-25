"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div className="bg-1-home"></div>
        <div className="in-background-text">
          <h1>
            YOUR ONE STOP SHOP FOR ALL YOUR GUN NEEDS
          </h1>
          <div className="break"></div>
          <Link className="btn btn-info btn-lg" to="app">SHOP NOW</Link>
        </div>
        <div className="bg-2">
          <h3 className="centered"><strong>GUNS * TRAINING * GUNSMITHING</strong></h3>
          <div className="break"></div>
          <div className="container">
            <div className="row centered">
              <div className="col-md-4">
                <img src="../images/store.jpeg" width="300"/>
              </div>
              <div className="col-md-4">
                <img src="../images/mtn-range-armory-logo-2.png" width="300"/>
              </div>
              <div className="col-md-4">
                <img src="../images/store-2.jpeg" width="300"/>
              </div>
            </div>
            <div className="break"></div>
            <div className="break"></div>
            <p>
              Lorem ipsum dolor sit amet, ius at fugit velit scriptorem, soleat verear apeirian cu vis. Forensibus scriptorem usu ne, sea decore patrioque argumentum at. Vix at odio commodo, cu mei quodsi salutatus. Labore efficiendi pro eu, mel no oratio nemore debitis. Prima instructior nec te. Ei nam facer deleniti.
              Vocibus concludaturque ex nec. Duo ut ridens probatus, eum fugit ceteros accommodare ut. Cu has tale falli eleifend. Cu has nonumy adversarium, quo an quaeque detraxit recusabo, eu vocibus evertitur suscipiantur his. Per habeo partem at, atomorum elaboraret mei te, audiam recteque vituperata vis ex.
              Te pro theophrastus consectetuer, option vocibus definiebas sea ei. Ne duo viderer assueverit, impetus apeirian phaedrum his eu, ubique essent id has. Pro cu movet zril. Ex agam ignota pri, vix munere fierent omittam eu. Mel cu ubique aperiam, sea probo vivendo te. An per duis labore antiopam, cu eum decore instructior.
              Eos labore omittam ei, erant tacimates sadipscing eu mei, his no illud mediocritatem. Esse wisi inciderint in mel, has id verear pertinax, ei mel veniam ignota. Nibh animal fabellas per te, ne his ignota civibus consequuntur. Has minimum offendit platonem ea, et duo concludaturque vituperatoribus, ea mea libris alterum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, ius at fugit velit scriptorem, soleat verear apeirian cu vis. Forensibus scriptorem usu ne, sea decore patrioque argumentum at. Vix at odio commodo, cu mei quodsi salutatus. Labore efficiendi pro eu, mel no oratio nemore debitis. Prima instructior nec te. Ei nam facer deleniti.
              Vocibus concludaturque ex nec. Duo ut ridens probatus, eum fugit ceteros accommodare ut. Cu has tale falli eleifend. Cu has nonumy adversarium, quo an quaeque detraxit recusabo, eu vocibus evertitur suscipiantur his. Per habeo partem at, atomorum elaboraret mei te, audiam recteque vituperata vis ex.
              Te pro theophrastus consectetuer, option vocibus definiebas sea ei. Ne duo viderer assueverit, impetus apeirian phaedrum his eu, ubique essent id has. Pro cu movet zril. Ex agam ignota pri, vix munere fierent omittam eu. Mel cu ubique aperiam, sea probo vivendo te. An per duis labore antiopam, cu eum decore instructior.
              Eos labore omittam ei, erant tacimates sadipscing eu mei, his no illud mediocritatem. Esse wisi inciderint in mel, has id verear pertinax, ei mel veniam ignota. Nibh animal fabellas per te, ne his ignota civibus consequuntur. Has minimum offendit platonem ea, et duo concludaturque vituperatoribus, ea mea libris alterum.
            </p>
            <br></br>
            <div className="row">
              <iframe width="100%" height="300" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=7512%20Grandview%20Avenue%2C%20Arvada%2C%20CO%2C%20United%20States&key=AIzaSyCisUkWAL2WnxISS9691pNmsKmTQYwW9g8" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="bg-3">
          <div className="container">
            <address>
              7512 Grandview Ave<br></br>
              Arvada, CO 80002<br></br>
              720-988-9853<br></br>
              TUES-SAT: 10-7  SUN: 12-7
            </address>
            <p>
              Lorem ipsum dolor sit amet, ius at fugit velit scriptorem, soleat verear apeirian cu vis. Forensibus scriptorem usu ne, sea decore patrioque argumentum at. Vix at odio commodo, cu mei quodsi salutatus. Labore efficiendi pro eu, mel no oratio nemore debitis. Prima instructior nec te. Ei nam facer deleniti.
              Vocibus concludaturque ex nec. Duo ut ridens probatus, eum fugit ceteros accommodare ut. Cu has tale falli eleifend. Cu has nonumy adversarium, quo an quaeque detraxit recusabo, eu vocibus evertitur suscipiantur his. Per habeo partem at, atomorum elaboraret mei te, audiam recteque vituperata vis ex.
              Te pro theophrastus consectetuer, option vocibus definiebas sea ei. Ne duo viderer assueverit, impetus apeirian phaedrum his eu, ubique essent id has. Pro cu movet zril. Ex agam ignota pri, vix munere fierent omittam eu. Mel cu ubique aperiam, sea probo vivendo te. An per duis labore antiopam, cu eum decore instructior.
              Eos labore omittam ei, erant tacimates sadipscing eu mei, his no illud mediocritatem. Esse wisi inciderint in mel, has id verear pertinax, ei mel veniam ignota. Nibh animal fabellas per te, ne his ignota civibus consequuntur. Has minimum offendit platonem ea, et duo concludaturque vituperatoribus, ea mea libris alterum.
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
