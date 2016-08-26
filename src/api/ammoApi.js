"use strict";

//This file is mocking a web API by hitting hard coded data.
var ammos = require('./ammoData').ammos;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(ammo) {
	return ammo.id;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var AmmoApi = {
	getAllAmmos: function() {
		return _clone(ammos);
	},

	getAmmoById: function(id) {
		var ammo = _.find(ammos, {id: id});
		return _clone(ammo);
	},

	saveAmmo: function(ammo) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the ammo to the DB via AJAX call...');

		if (ammo.id) {
			var existingAmmoIndex = _.indexOf(ammos, _.find(ammos, {id: ammo.id}));
			ammos.splice(existingAmmoIndex, 1, ammo);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new ammos in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			ammo.id = _generateId(ammo);
			ammos.push(ammo);
		}

		return _clone(ammo);
	},

	deleteAmmo: function(id) {
		console.log('Pretend this just deleted the ammo from the DB via an AJAX call...');
		_.remove(ammos, { id: id});
	}
};

module.exports = AmmoApi;
