"use strict";

//This file is mocking a web API by hitting hard coded data.
var guns = require('./gunData').guns;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(gun) {
	return gun.id;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var GunApi = {
	getAllGuns: function() {
		return _clone(guns);
	},

	getGunById: function(id) {
		var gun = _.find(guns, {id: id});
		return _clone(gun);
	},

	saveGun: function(gun) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the gun to the DB via AJAX call...');

		if (gun.id) {
			var existingGunIndex = _.indexOf(guns, _.find(guns, {id: gun.id}));
			guns.splice(existingGunIndex, 1, gun);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new guns in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			gun.id = _generateId(gun);
			guns.push(gun);
		}

		return _clone(gun);
	},

	deleteGun: function(id) {
		console.log('Pretend this just deleted the gun from the DB via an AJAX call...');
		_.remove(guns, { id: id});
	}
};

module.exports = GunApi;
