function XhrAdapter(xhr) {
  this.xhr = xhr;
}

XhrAdapter.prototype.xhr = function() {
  return this.xhr;
};

XhrAdapter.prototype.status = function() {
  return this.xhr.status;
};

XhrAdapter.prototype.body = function() {
  return this.xhr.responseText;
};

XhrAdapter.prototype.responseObject = function() {
  if(typeof this.xhr.response === 'object') {
    return this.xhr.response;
  }

  return JSON.parse(this.xhr.responseText);
};

XhrAdapter.prototype.allResponseHeaders = function() {
  return this.xhr.getAllResponseHeaders();
};

XhrAdapter.prototype.responseHeader = function(header) {
  return this.xhr.getResponseHeader(header);
};

module.exports = XhrAdapter;
