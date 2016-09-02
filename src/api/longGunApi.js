"use strict";

//This file is mocking a web API by hitting hard coded data.
var longGuns = require('./longGunData').longGuns;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(longGun) {
	return longGun.id;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var LongGunApi = {
	getAllGuns: function() {
		return _clone(longGuns);
	},

	getGunById: function(id) {
		var longGun = _.find(longGuns, {id: id});
		return _clone(longGun);
	},

	saveGun: function(longGun) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the longGun to the DB via AJAX call...');

		if (longGun.id) {
			var existingLongGunIndex = _.indexOf(longGuns, _.find(longGuns, {id: longGun.id}));
			longGuns.splice(existingLongGunIndex, 1, longGun);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new longGuns in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			longGun.id = _generateId(longGun);
			longGuns.push(longGun);
		}

		return _clone(longGun);
	},

	deleteGun: function(id) {
		console.log('Pretend this just deleted the longGun from the DB via an AJAX call...');
		_.remove(longGuns, { id: id});
	}
};

module.exports = LongGunApi;
