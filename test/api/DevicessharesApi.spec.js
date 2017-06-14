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
    instance = new ArtikCloud.DevicessharesApi();
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

  describe('DevicessharesApi', function() {
    describe('createShareForDevice', function() {
      it('should call createShareForDevice successfully', function(done) {
        //uncomment below and update the code to test createShareForDevice
        //instance.createShareForDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSharingForDevice', function() {
      it('should call deleteSharingForDevice successfully', function(done) {
        //uncomment below and update the code to test deleteSharingForDevice
        //instance.deleteSharingForDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllSharesForDevice', function() {
      it('should call getAllSharesForDevice successfully', function(done) {
        //uncomment below and update the code to test getAllSharesForDevice
        //instance.getAllSharesForDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSharingForDevice', function() {
      it('should call getSharingForDevice successfully', function(done) {
        //uncomment below and update the code to test getSharingForDevice
        //instance.getSharingForDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
