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
    artikcloud_oauth.accessToken = "f3765b72139742c2b2ec4a93d32d1703"

    api = new ArtikCloud.DevicesApi(newClient);
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

  describe('DevicesApi', function() {

    it('updateDeviceToken', function(done) {
      var deviceId = '5f1d6d85ad0141f3b9a07f0107dbd704';
      ///var opts = {};

      api.updateDeviceToken(deviceId, function(error, data, response) {
        if (error) throw error;

        console.log(response);

        done();
      });
    });

  });
}));
