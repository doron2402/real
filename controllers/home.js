'use strict';
var adapters = require(__base + '/adapters');
var ErrorAdapter = adapters.error;

function HomeController(options) {
  this.options = options;
}

HomeController.prototype.newHome = function(request, reply) {
  var viewObj = {
    eyas: [{id: 1, name: '123'}, {id:2, name: 'Doron'}, {id:3, name: 'Rodrigo'}]
  };

  return reply.view('new_home', viewObj);
};


module.exports = HomeController;