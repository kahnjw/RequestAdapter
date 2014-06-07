'use strict';

function XhrAdapter(response) {
  this.response = response;
}

XhrAdapter.prototype.object = function() {
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

module.exports = XhrAdapter;
