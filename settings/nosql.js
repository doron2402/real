'use strict';

var nosql = {
	prod: {
    USERNAME: '',
    PASSWORD: '',
		HOST: '127.0.0.1',
    DB_NAME: 'real'
	},
	stage: {
		HOST: '127.0.0.1',
    DB_NAME: 'real'
	},
	dev: {
		USERNAME: '',
    PASSWORD: '',
    HOST: '127.0.0.1',
    DB_NAME: 'real'
	},
	getSettings: function(env){
		return nosql[env];
	}
};

module.exports = nosql;
