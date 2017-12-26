/**
 * ARTIK Cloud API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    instance = new ArtikCloud.DevicesApi();
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
    describe('addDevice', function() {
      it('should call addDevice successfully', function(done) {
        //uncomment below and update the code to test addDevice
        //instance.addDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDevice', function() {
      it('should call deleteDevice successfully', function(done) {
        //uncomment below and update the code to test deleteDevice
        //instance.deleteDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDeviceToken', function() {
      it('should call deleteDeviceToken successfully', function(done) {
        //uncomment below and update the code to test deleteDeviceToken
        //instance.deleteDeviceToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevice', function() {
      it('should call getDevice successfully', function(done) {
        //uncomment below and update the code to test getDevice
        //instance.getDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevicePresence', function() {
      it('should call getDevicePresence successfully', function(done) {
        //uncomment below and update the code to test getDevicePresence
        //instance.getDevicePresence(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceToken', function() {
      it('should call getDeviceToken successfully', function(done) {
        //uncomment below and update the code to test getDeviceToken
        //instance.getDeviceToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDevice', function() {
      it('should call updateDevice successfully', function(done) {
        //uncomment below and update the code to test updateDevice
        //instance.updateDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeviceToken', function() {
      it('should call updateDeviceToken successfully', function(done) {
        //uncomment below and update the code to test updateDeviceToken
        ///var opts = {};

        //instance.updateDeviceToken(function(error) {
        //  if (error) throw error;

        //expect().to.be();

        //});
        done();
      });
    });
  });

}));
