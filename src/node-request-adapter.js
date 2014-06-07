'use strict';

function NodeRequestAdapter(nodeRequest) {
  this.nodeRequest = nodeRequest;
}

NodeRequestAdapter.prototype.object = function() {
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

module.exports = NodeRequestAdapter;
