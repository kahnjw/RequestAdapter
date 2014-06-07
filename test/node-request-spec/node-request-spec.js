'use strict';

var NodeRequestAdapter = require('../../src/node-request-adapter');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var mock = require('./mock-server');
var request = require('superagent');
var qagent = require('qagent');


chai.should();
chai.use(chaiAsPromised);
require('../bind-polyfill');

describe('NodeRequestAdapter', function() {
  var promise;

  beforeEach(function() {
    mock.get('/whatever').reply(200, {fixture: 'data'});

    var requestObject = request.get('http://localhost:9000/whatever');
    promise = qagent.end(requestObject)
      .then(function(response) {
        return new NodeRequestAdapter(response.res);
      });
  });

  it('gets the status', function(done) {
    promise
    .invoke('status')
    .should.eventually.equal(200)
    .notify(done);
  });

  it('gets the text', function(done) {
    var expectedBody = '{\n  \"fixture\": \"data\"\n}';
    promise

    .invoke('text')
    .should.eventually.equal(expectedBody)
    .notify(done);
  });

  it('gets the responseObject', function(done) {
    var expectedResponseObject = {
      fixture: 'data'
    };

    promise
    .invoke('responseObject')
    .should.eventually.eql(expectedResponseObject)
    .notify(done);
  });

  it('gets responseHeaders', function(done) {
    promise
    .invoke('allResponseHeaders')
    .should.eventually.be.a('object')
    .notify(done);
  });

  it('get a responseHeader', function(done) {
    promise
    .invoke('responseHeader', 'Content-Type')
    .should.eventually.equal('application/json; charset=utf-8')
    .notify(done);
  });
});
