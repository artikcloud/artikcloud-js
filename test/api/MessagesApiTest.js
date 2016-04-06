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
    artikcloud_oauth.accessToken = "2fd493b9877e48bd9fe699deb1e07003"

    api = new ArtikCloud.MessagesApi(newClient);
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

  describe('MessagesApi', function() {

    it('sendMessageAction', function(done) {
      var message = new ArtikCloud.MessageAction();
      message.sdid = '993925c3cd994bf7a51c620884be65e9';
      message.type = 'message';
      message.ts = Date.now();
      message.data = { 'volume': 5};

      api.sendMessageAction(message, function(error, response) {
        if (error) throw error;

        var messageId = response.data.mid;
        var opts = {'mid': messageId};

        api.getNormalizedMessages(opts, function(error2, response2) {
          if (error2) throw error2;

          expect(response2.size).to.be(1);

          var normalized = response2.data[0];
          expect(normalized.mid).to.be(messageId);

          var volume = normalized.data['volume'];
          expect(volume).to.be(5.0);

          done();
        });
      });
    });

  });
}));
