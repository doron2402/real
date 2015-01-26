'use strict';
var controllers = require(__base + '/controllers');
var UsersController = controllers.users;

exports.register = function(server, options, next) {
  server.route([{
    method: 'GET',
    path: '/users',
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
    path: '/users/{id}',
    config: {
      handler: function (request, reply) {
        return reply({code: 'ok', body: {id: 1, name: 'user full name'}});
      }
    }
  },
  { //Update user document
    method: 'POST',
    path: '/users/{id}',
    config: {
      handler: function (request, reply) {
        return reply({code: 'ok'});
      }
    }
  }
  ]);
  next();
};

exports.register.attributes = {
    name: 'routes-users',
    version: '1.0.1'
};
