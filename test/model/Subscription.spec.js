/**
 * ARTIK Cloud API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

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

  var instance;

  beforeEach(function() {
    instance = new ArtikCloud.Subscription();
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

  describe('Subscription', function() {
    it('should create an instance of Subscription', function() {
      // uncomment below and update the code to test Subscription
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be.a(ArtikCloud.Subscription);
    });

    it('should have the property awsRegion (base name: "awsRegion")', function() {
      // uncomment below and update the code to test the property awsRegion
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property includeSharedDevices (base name: "includeSharedDevices")', function() {
      // uncomment below and update the code to test the property includeSharedDevices
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property awsKey (base name: "awsKey")', function() {
      // uncomment below and update the code to test the property awsKey
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property awsSecret (base name: "awsSecret")', function() {
      // uncomment below and update the code to test the property awsSecret
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property awsKinesisStreamName (base name: "awsKinesisStreamName")', function() {
      // uncomment below and update the code to test the property awsKinesisStreamName
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "messageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property ddid (base name: "ddid")', function() {
      // uncomment below and update the code to test the property ddid
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionType (base name: "subscriptionType")', function() {
      // uncomment below and update the code to test the property subscriptionType
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property sdid (base name: "sdid")', function() {
      // uncomment below and update the code to test the property sdid
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property callbackUrl (base name: "callbackUrl")', function() {
      // uncomment below and update the code to test the property callbackUrl
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property aid (base name: "aid")', function() {
      // uncomment below and update the code to test the property aid
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property sdtid (base name: "sdtid")', function() {
      // uncomment below and update the code to test the property sdtid
      //var instane = new ArtikCloud.Subscription();
      //expect(instance).to.be();
    });

  });

}));