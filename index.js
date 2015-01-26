'use strict';

var is_prod = false;
var env = 'dev';
if (process.env.NODE_ENV && process.env.NODE_ENV.indexOf('prod') !== -1) {
    is_prod = true;
    env = 'prod';
    //Run production script here
}
var settings = require(__base + 'settings').getSettings(env);

if (!global.__base) {
	global.__base = __dirname + '/';
}


//Node Modules
var Hapi = require('hapi');
var mongoose = require('mongoose');
var hbs = require('handlebars');

//variables
var serverOptions = settings.server.options;

var server = new Hapi.Server(serverOptions);

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connection Successfully.');
});

/* Routes/Plugins */
var plugins = [
    {
      register: require('./routes/base'),
      options: {
          database: db
      }
    },
    {
      register: require('./routes/users'),
      options: {
          database: db
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