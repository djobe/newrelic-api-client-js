var api = require('../api.js');
var insights = require('../insights.js');

var assert = require('assert');

describe('newrelic-api-test', function() {
  before(function(){

  });
  beforeEach(function(){

  });
  it('calls the application api', function(done) {
    api.applicationList(function(error, response, body) {
      assert.equal(error, null);
      assert.equal(response.statusCode, 200);
      done();
    });
  });
  after(function() {

  });
});

describe('insights-test', function() {
  before(function(){

  });
  it('calls the query api', function(done) {
    var nrql = 'SELECT count(*) FROM ARG';
    insights.query(nrql, function(error, response, body) {
      assert.equal(error, null);
      assert.equal(response.statusCode, 200);
      done();
    });
  });
  after(function() {

  });
});

