if (typeof module === 'object' && module.exports) {
  var expect = require('expect.js');
  var propertiesReader = require('properties-reader');
  var ArtikCloud = require('../src/index');
  var sinon = require('sinon');
}

var apiClient = ArtikCloud.ApiClient.instance;
var properties = propertiesReader('./test/artik.properties');

describe('ApiClient', function() {
  describe('properties', function() {
    it('should have artik.properties', function() {
      expect(properties.get('user1.id')).to.be('04ddbd35d57d4d7b8f07f219c44457b2');
    });
  });

  describe('defaults', function() {
    it('should have correct default values with the default API client', function() {
      expect(apiClient).to.be.ok();
      expect(apiClient.basePath).to.be('https://api.artik.cloud/v1.1');
      expect(apiClient.authentications).to.eql({
        artikcloud_oauth: {type: 'oauth2'}
      });
    });

    it('should have correct default values with new API client and can customize it', function() {
      var newClient = new ArtikCloud.ApiClient;
      expect(newClient.basePath).to.be('https://api.artik.cloud/v1.1');
      expect(newClient.buildUrl('/users', {})).to.be('https://api.artik.cloud/v1.1/users');

      newClient.basePath = 'https://api.samsungsami.io/v1.1';
      expect(newClient.basePath).to.be('https://api.samsungsami.io/v1.1');
      expect(newClient.buildUrl('/users', {})).to.be('https://api.samsungsami.io/v1.1/users');
    });
  });

  describe('#applyAuthToRequest', function() {
    var req, newClient;

    beforeEach(function() {
      req = {
        auth: function() {},
        set: function() {},
        query: function() {}
      };
      sinon.stub(req, 'auth');
      sinon.stub(req, 'set');
      sinon.stub(req, 'query');
      newClient = new ArtikCloud.ApiClient();
    });

    describe('oauth2', function() {
      var authName = 'artikcloud_oauth';
      var authNames = [authName];
      var auth;

      beforeEach(function() {
        newClient.authentications[authName] = {type: 'oauth2'};
        auth = newClient.authentications[authName];
      });

      it('sets access token in header', function() {
        auth.accessToken = 'my-access-token';
        newClient.applyAuthToRequest(req, authNames);
        sinon.assert.calledOnce(req.set);
        sinon.assert.calledWithMatch(req.set, {'Authorization': 'Bearer my-access-token'});
        sinon.assert.notCalled(req.auth);
        sinon.assert.notCalled(req.query);
      });

      it('works when access token is not set', function() {
        auth.accessToken = null;
        newClient.applyAuthToRequest(req, authNames);
        sinon.assert.notCalled(req.query);
        sinon.assert.notCalled(req.auth);
        sinon.assert.notCalled(req.set);
      });
    });

    describe('unknown type', function() {
      var authName = 'unknown';
      var authNames = [authName];

      beforeEach(function() {
        newClient.authentications[authName] = {type: 'UNKNOWN'};
      });

      it('throws error for unknown auth type', function() {
        expect(function() {
          newClient.applyAuthToRequest(req, authNames);
        }).to.throwError();
        sinon.assert.notCalled(req.set);
        sinon.assert.notCalled(req.auth);
        sinon.assert.notCalled(req.query);
      });
    });
  });

});

function makeDumbRequest(apiClient, opts) {
  opts = opts || {};
  var path = opts.path || '/users/self';
  var httpMethod = opts.httpMethod || 'GET';
  var pathParams = opts.pathParams || {};
  var queryParams = opts.queryParams || {};
  var headerParams = opts.headerParams || {};
  var formParams = opts.formParams || {};
  var bodyParam = opts.bodyParam;
  var authNames = [];
  var contentTypes = opts.contentTypes || [];
  var accepts = opts.accepts || [];
  var callback = opts.callback;
  return apiClient.callApi(path, httpMethod, pathParams, queryParams,
    headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
    callback
  );
}
