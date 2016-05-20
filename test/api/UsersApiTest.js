(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ArtikCloud);
  }
}(this, function(expect, ArtikCloud) {
  'use strict';

  var api;

  beforeEach(function() {
    var newClient = new ArtikCloud.ApiClient();

    // Configure OAuth2 access token for authorization: artikcloud_oauth
    var artikcloud_oauth = newClient.authentications['artikcloud_oauth'];
    artikcloud_oauth.accessToken = "6ffc6e5e1dbf4168816ab7e4cc7da667"

    api = new ArtikCloud.UsersApi(newClient);
    api.getApiClient
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UsersApi', function() {

    it('getSelf', function(done) {
      api.getSelf(function(error, response) {
        if (error) throw error;

        //expect(response).to.be.a(ArtikCloud.InlineResponse200);
        expect(response.data.fullName).to.be("Maneesh Sahu");
        expect(response.data.name).to.be("maneesh");

        done();
      });
    });

    it('getUserDevices', function(done) {
      var userId = '04ddbd35d57d4d7b8f07f219c44457b2';
      var opts = {};

      api.getUserDevices(userId, opts, function(error, response) {
        if (error) throw error;

        console.log(response);

        done();
      });
    });

  });
}));
