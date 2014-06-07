'use strict';

var XhrAdapter = require('../../src/xhr-adapter');
var request = require('superagent');
var qagent = require('qagent');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

require('../bind-polyfill');
chai.should();
chai.use(chaiAsPromised);

describe('XhrAdapter', function() {
  var promise;

  beforeEach(function() {
    var requestObject = request.get('/base/test/xhra-spec/fixture.json');
    promise = qagent.end(requestObject)
      .then(function(response) {
        return new XhrAdapter(response);
      });
  });

  it('gets the status', function(done) {
    promise
    .invoke('status')
    .should.eventually.equal(200)
    .notify(done);
  });

  it('gets the text', function(done) {
    var expectedBody = '{\n    "fixture": "data"\n}';
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
    .should.eventually.be.a('string')
    .notify(done);
  });

  it('get a responseHeader', function(done) {
    promise
    .invoke('responseHeader', 'Content-Type')
    .should.eventually.equal('application/json')
    .notify(done);
  });

  it('get a lower case method', function(done) {
    promise
    .invoke('methodLowerCase')
    .should.eventually.equal('get')
    .notify(done);
  });

  it('get the url', function(done) {
    promise
    .invoke('url')
    .should.eventually.equal('/base/test/xhra-spec/fixture.json')
    .notify(done);
  });
});
