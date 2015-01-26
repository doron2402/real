'use strict';

var is_prod = false;
var env = 'dev';
if (process.env.NODE_ENV && process.env.NODE_ENV.indexOf('prod') !== -1) {
    is_prod = true;
    env = 'prod';
    //Run production script here
}
if (!global.__base) {
	global.__base = __dirname + '/';
}
var settings = require(__base + 'settings').getSettings(env);

//Node Modules
var Hapi = require('hapi');
var mongoose = require('mongoose');
var hbs = require('handlebars');

//variables
var serverOptions = settings.server.options;
var noSqlSettings = settings.nosql;
var server = new Hapi.Server(serverOptions);

mongoose.connect('mongodb://' + noSqlSettings.USERNAME + ':' + noSqlSettings.PASSWORD + '@' + noSqlSettings.HOST + '/' + noSqlSettings.DB_NAME);
var mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'connection error:'));
mongodb.once('open', function (callback) {
  console.log('Connection Successfully.');
});

/* Routes/Plugins */
var plugins = [
    {
      register: require('./routes/base'),
      options: {
          mongodb: mongodb
      }
    },
    {
      register: require('./routes/users'),
      options: {
          mongodb: mongodb
      }
    }
];

server.views({
    engines: {
        html: hbs
    },
    relativeTo: __dirname,
    path: './views',
    layoutPath: './views/layout',
    helpersPath: './views/helpers',
    partialsPath: './views/partials'

});
server.app.settings = settings;

// Create server
server.connection(settings.server.connection);

server.register(plugins, function (err) {
    if (err) { throw err; }
    server.start(function(err) {
        if (err) { throw err; }
        console.log('info', 'Server running at: ' + server.info.uri);
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

module.exports = server;