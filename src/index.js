'use strict';

var XhrAdapter = require('./xhr-adapter');
var NodeRequestAdapter = require('./node-request-adapter');


var RequestAdapter = function(requestResponse) {
  if(requestResponse.xhr) {
    return new XhrAdapter(requestResponse);
  }

  return new NodeRequestAdapter(requestResponse);
};

module.exports = RequestAdapter;
