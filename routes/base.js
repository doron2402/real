'use strict';
var controllers = require(__base + '/controllers');
var HomeController = controllers.home;

exports.register = function(server, options, next) {
  server.route([{
    method: 'GET',
    path: '/',
    config: {
      handler: function (request, reply) {
        var context = {
          'title': 'Views Example',
          'data': 'Hello, World',
          'js_file': 'hello'
        };
        return reply.view('home', context);
      }
    }
  }, {
    method: 'GET',
    path: '/home',
    config: {
      handler: function (request, reply) {
        var context = {
          'title': 'Views Example',
          'data': 'Hello, World',
          'js_file': 'hello'
        };

        return reply.view('home', context);
      }
    }
  },
  //Public directory
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        'path': './public',
        'listing': false,
        'index': false
      }
    }
  }
  ]);
  next();
};

exports.register.attributes = {
    name: 'routes-base',
    version: '1.0.1'
};
