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
    instance = new ArtikCloud.ValidityPeriod();
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

  describe('ValidityPeriod', function() {
    it('should create an instance of ValidityPeriod', function() {
      // uncomment below and update the code to test ValidityPeriod
      //var instane = new ArtikCloud.ValidityPeriod();
      //expect(instance).to.be.a(ArtikCloud.ValidityPeriod);
    });

    it('should have the property notBefore (base name: "notBefore")', function() {
      // uncomment below and update the code to test the property notBefore
      //var instane = new ArtikCloud.ValidityPeriod();
      //expect(instance).to.be();
    });

    it('should have the property notAfter (base name: "notAfter")', function() {
      // uncomment below and update the code to test the property notAfter
      //var instane = new ArtikCloud.ValidityPeriod();
      //expect(instance).to.be();
    });

  });

}));
