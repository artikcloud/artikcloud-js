(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DeviceShareInfo', '../model/DeviceSharing', '../model/DeviceSharingEnvelope', '../model/DeviceSharingId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceShareInfo'), require('../model/DeviceSharing'), require('../model/DeviceSharingEnvelope'), require('../model/DeviceSharingId'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicesSharesApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceShareInfo, root.ArtikCloud.DeviceSharing, root.ArtikCloud.DeviceSharingEnvelope, root.ArtikCloud.DeviceSharingId);
  }
}(this, function(ApiClient, DeviceShareInfo, DeviceSharing, DeviceSharingEnvelope, DeviceSharingId) {
  'use strict';

  /**
   * DevicesShares service.
   * @module api/DevicesSharesApi
   * @version 2.0.6
   */

  /**
   * Constructs a new DevicesSharesApi. 
   * @alias module:api/DevicesSharesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createShareForDevice operation.
     * @callback module:api/DevicesSharesApi~createShareForDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceSharingId data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Share a device 
     * Share a device 
     * @param String deviceId Device ID.
     * @param module:model/DeviceShareInfo deviceShareInfo Device object that needs to be added
     * @param {module:api/DevicesSharesApi~createShareForDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceSharingId
     */
    this.createShareForDevice = function(deviceId, deviceShareInfo, callback) {
      var postBody = deviceShareInfo;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling createShareForDevice";
      }

      // verify the required parameter 'deviceShareInfo' is set
      if (deviceShareInfo == undefined || deviceShareInfo == null) {
        throw "Missing the required parameter 'deviceShareInfo' when calling createShareForDevice";
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
      var returnType = DeviceSharingId;

      return this.apiClient.callApi(
        '/devices/{deviceId}/shares', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSharingForDevice operation.
     * @callback module:api/DevicesSharesApi~deleteSharingForDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceSharingId data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete specific share of the given device id
     * Delete specific share of the given device id
     * @param String deviceId Device ID.
     * @param String shareId Share ID.
     * @param {module:api/DevicesSharesApi~deleteSharingForDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceSharingId
     */
    this.deleteSharingForDevice = function(deviceId, shareId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling deleteSharingForDevice";
      }

      // verify the required parameter 'shareId' is set
      if (shareId == undefined || shareId == null) {
        throw "Missing the required parameter 'shareId' when calling deleteSharingForDevice";
      }


      var pathParams = {
        'deviceId': deviceId,
        'shareId': shareId
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
      var returnType = DeviceSharingId;

      return this.apiClient.callApi(
        '/devices/{deviceId}/shares/{shareId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSharesForDevice operation.
     * @callback module:api/DevicesSharesApi~getAllSharesForDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceSharingEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all shares for the given device id
     * List all shares for the given device id
     * @param String deviceId Device ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Desired count of items in the result set.
     * @param Number opts.offset Offset for pagination.
     * @param {module:api/DevicesSharesApi~getAllSharesForDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceSharingEnvelope
     */
    this.getAllSharesForDevice = function(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getAllSharesForDevice";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
        'count': opts['count'],
        'offset': opts['offset']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceSharingEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}/shares', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharingForDevice operation.
     * @callback module:api/DevicesSharesApi~getSharingForDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceSharing data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get specific share of the given device id
     * Get specific share of the given device id
     * @param String deviceId Device ID.
     * @param String shareId Share ID.
     * @param {module:api/DevicesSharesApi~getSharingForDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceSharing
     */
    this.getSharingForDevice = function(deviceId, shareId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getSharingForDevice";
      }

      // verify the required parameter 'shareId' is set
      if (shareId == undefined || shareId == null) {
        throw "Missing the required parameter 'shareId' when calling getSharingForDevice";
      }


      var pathParams = {
        'deviceId': deviceId,
        'shareId': shareId
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
      var returnType = DeviceSharing;

      return this.apiClient.callApi(
        '/devices/{deviceId}/shares/{shareId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
