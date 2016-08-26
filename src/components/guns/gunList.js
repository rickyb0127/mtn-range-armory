"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

var GunList = React.createClass({
  render: function () {
    var createGunRow = function (gun) {
      return (
        <div key={gun.id}>
          <div className="gunRow col-md-3">
            <div className="img-thumbnail img-responsive"><img height="100px" src={gun.image}/></div>
            <div>{gun.modelName}</div>
            <div>${gun.price}</div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <div className="bg-2">
        </div>
        <div className="container">
          <div className="row">
            {this.props.guns.map(createGunRow, this)}
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

module.exports = GunList;
