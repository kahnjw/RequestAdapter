'use strict';

function XhrAdapter(response) {
  this.response = response;
}

XhrAdapter.prototype.rawRequestResponse = function() {
  return this.response;
};

XhrAdapter.prototype.status = function() {
  return this.response.xhr.status;
};

XhrAdapter.prototype.text = function() {
  return this.response.xhr.responseText;
};

XhrAdapter.prototype.responseObject = function() {
  if(typeof this.response.xhr.response === 'object') {
    return this.response.xhr.response;
  }

  return JSON.parse(this.response.xhr.responseText);
};

XhrAdapter.prototype.allResponseHeaders = function() {
  return this.response.xhr.getAllResponseHeaders();
};

XhrAdapter.prototype.responseHeader = function(header) {
  return this.response.xhr.getResponseHeader(header);
};

XhrAdapter.prototype.method = function() {
  return this.response.req.method;
}

XhrAdapter.prototype.methodLowerCase = function() {
  return this.response.req.method.toLowerCase();
}

XhrAdapter.prototype.url = function() {
  return this.response.req.url;
}

module.exports = XhrAdapter;
