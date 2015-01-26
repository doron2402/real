'use strict';

var apis = {
	prod: {
		main: 'api.our-domain.com/'
	},
	dev: {
		main: 'http://localhost:5000/'
	},
	getSettings: function(env){
		return apis[env];
	}
};

module.exports = apis;
