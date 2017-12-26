(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DeviceStatus', '../model/DeviceStatusBatch', '../model/DeviceStatusPut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceStatus'), require('../model/DeviceStatusBatch'), require('../model/DeviceStatusPut'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicesStatusApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceStatus, root.ArtikCloud.DeviceStatusBatch, root.ArtikCloud.DeviceStatusPut);
  }
}(this, function(ApiClient, DeviceStatus, DeviceStatusBatch, DeviceStatusPut) {
  'use strict';

  /**
   * DevicesStatus service.
   * @module api/DevicesStatusApi
   * @version 2.0.6
   */

  /**
   * Constructs a new DevicesStatusApi. 
   * @alias module:api/DevicesStatusApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDeviceStatus operation.
     * @callback module:api/DevicesStatusApi~getDeviceStatusCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceStatus data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Device Status
     * Get Device Status
     * @param String deviceId Device ID.
     * @param {Object} opts Optional parameters
     * @param Boolean opts.includeSnapshot Include device snapshot into the response
     * @param Boolean opts.includeSnapshotTimestamp Include device snapshot timestamp into the response
     * @param {module:api/DevicesStatusApi~getDeviceStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceStatus
     */
    this.getDeviceStatus = function(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling getDeviceStatus";
      }


      var pathParams = {
        'deviceId': deviceId
      };
      var queryParams = {
        'includeSnapshot': opts['includeSnapshot'],
        'includeSnapshotTimestamp': opts['includeSnapshotTimestamp']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceStatus;

      return this.apiClient.callApi(
        '/devices/{deviceId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevicesStatus operation.
     * @callback module:api/DevicesStatusApi~getDevicesStatusCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceStatusBatch data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Devices Status
     * Get Devices Status
     * @param String dids List of device ids (comma-separated) for which the statuses are requested.
     * @param {Object} opts Optional parameters
     * @param Boolean opts.includeSnapshot Include device snapshot into the response
     * @param Boolean opts.includeSnapshotTimestamp Include device snapshot timestamp into the response
     * @param {module:api/DevicesStatusApi~getDevicesStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceStatusBatch
     */
    this.getDevicesStatus = function(dids, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dids' is set
      if (dids == undefined || dids == null) {
        throw "Missing the required parameter 'dids' when calling getDevicesStatus";
      }


      var pathParams = {
      };
      var queryParams = {
        'dids': dids,
        'includeSnapshot': opts['includeSnapshot'],
        'includeSnapshotTimestamp': opts['includeSnapshotTimestamp']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceStatusBatch;

      return this.apiClient.callApi(
        '/devices/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putDeviceStatus operation.
     * @callback module:api/DevicesStatusApi~putDeviceStatusCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceStatus data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Device Status
     * Update Device Status
     * @param String deviceId Device ID.
     * @param {Object} opts Optional parameters
     * @param module:model/DeviceStatusPut opts.body Body
     * @param {module:api/DevicesStatusApi~putDeviceStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceStatus
     */
    this.putDeviceStatus = function(deviceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling putDeviceStatus";
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
      var returnType = DeviceStatus;

      return this.apiClient.callApi(
        '/devices/{deviceId}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
