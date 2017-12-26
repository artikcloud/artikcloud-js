(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Device', '../model/DeviceEnvelope', '../model/DeviceTokenEnvelope', '../model/PresenceEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Device'), require('../model/DeviceEnvelope'), require('../model/DeviceTokenEnvelope'), require('../model/PresenceEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicesApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Device, root.ArtikCloud.DeviceEnvelope, root.ArtikCloud.DeviceTokenEnvelope, root.ArtikCloud.PresenceEnvelope);
  }
}(this, function(ApiClient, Device, DeviceEnvelope, DeviceTokenEnvelope, PresenceEnvelope) {
  'use strict';

  /**
   * Devices service.
   * @module api/DevicesApi
   * @version 2.0.6
   */

  /**
   * Constructs a new DevicesApi. 
   * @alias module:api/DevicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addDevice operation.
     * @callback module:api/DevicesApi~addDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Device
     * Create a device
     * @param module:model/Device device Device to be added to the user
     * @param {module:api/DevicesApi~addDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceEnvelope
     */
    this.addDevice = function(device, callback) {
      var postBody = device;

      // verify the required parameter 'device' is set
      if (device == undefined || device == null) {
        throw "Missing the required parameter 'device' when calling addDevice";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeviceEnvelope;

      return this.apiClient.callApi(
        '/devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDevice operation.
     * @callback module:api/DevicesApi~deleteDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Device
     * Deletes a device
     * @param String deviceId deviceId
     * @param {module:api/DevicesApi~deleteDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceEnvelope
     */
    this.deleteDevice = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling deleteDevice";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeviceToken operation.
     * @callback module:api/DevicesApi~deleteDeviceTokenCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTokenEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Device Token
     * Deletes a device&#39;s token
     * @param String deviceId deviceId
     * @param {module:api/DevicesApi~deleteDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTokenEnvelope
     */
    this.deleteDeviceToken = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling deleteDeviceToken";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceTokenEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}/tokens', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevice operation.
     * @callback module:api/DevicesApi~getDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Device
     * Retrieves a device
     * @param String deviceId deviceId
     * @param {module:api/DevicesApi~getDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceEnvelope
     */
    this.getDevice = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getDevice";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevicePresence operation.
     * @callback module:api/DevicesApi~getDevicePresenceCallback
     * @param {String} error Error message, if any.
     * @param module:model/PresenceEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get device presence information
     * Return the presence status of the given device along with the time it was last seen
     * @param String deviceId Device ID.
     * @param {module:api/DevicesApi~getDevicePresenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/PresenceEnvelope
     */
    this.getDevicePresence = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getDevicePresence";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PresenceEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}/presence', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceToken operation.
     * @callback module:api/DevicesApi~getDeviceTokenCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTokenEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Device Token
     * Retrieves a device&#39;s token
     * @param String deviceId deviceId
     * @param {module:api/DevicesApi~getDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTokenEnvelope
     */
    this.getDeviceToken = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getDeviceToken";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceTokenEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDevice operation.
     * @callback module:api/DevicesApi~updateDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Device
     * Updates a device
     * @param String deviceId deviceId
     * @param module:model/Device device Device to be updated
     * @param {module:api/DevicesApi~updateDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceEnvelope
     */
    this.updateDevice = function(deviceId, device, callback) {
      var postBody = device;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling updateDevice";
      }

      // verify the required parameter 'device' is set
      if (device == undefined || device == null) {
        throw "Missing the required parameter 'device' when calling updateDevice";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeviceEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeviceToken operation.
     * @callback module:api/DevicesApi~updateDeviceTokenCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTokenEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Device Token
     * Updates a device&#39;s token
     * @param String deviceId deviceId
     * @param {module:api/DevicesApi~updateDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTokenEnvelope
     */
    this.updateDeviceToken = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling updateDeviceToken";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = DeviceTokenEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}/tokens', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
