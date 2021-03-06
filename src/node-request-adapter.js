'use strict';

function NodeRequestAdapter(nodeRequest) {
  this.nodeRequest = nodeRequest;
}

NodeRequestAdapter.prototype.rawRequestResponse = function() {
  return this.nodeRequest;
};

NodeRequestAdapter.prototype.status = function() {
  return this.nodeRequest.statusCode;
};

NodeRequestAdapter.prototype.text = function() {
  return this.nodeRequest.text;
};

NodeRequestAdapter.prototype.responseObject = function() {
  if(typeof this.nodeRequest.body === 'object') {
    return this.nodeRequest.body;
  }

  return JSON.parse(this.nodeRequest.text);
};

NodeRequestAdapter.prototype.allResponseHeaders = function() {
  return this.nodeRequest.headers;
};

NodeRequestAdapter.prototype.responseHeader = function(header) {
  header = header.toLowerCase();
  return this.nodeRequest.headers[header];
};

NodeRequestAdapter.prototype.method = function() {
  return this.nodeRequest.req.method;
};

NodeRequestAdapter.prototype.methodLowerCase = function() {
  return this.nodeRequest.req.method.toLowerCase();
};

NodeRequestAdapter.prototype.url = function() {
  return this.nodeRequest.req.path;
};

module.exports = NodeRequestAdapter;
