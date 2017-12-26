(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DeviceTypeEnvelope', '../model/DeviceTypesEnvelope', '../model/ManifestPropertiesEnvelope', '../model/ManifestVersionsEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceTypeEnvelope'), require('../model/DeviceTypesEnvelope'), require('../model/ManifestPropertiesEnvelope'), require('../model/ManifestVersionsEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypesApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceTypeEnvelope, root.ArtikCloud.DeviceTypesEnvelope, root.ArtikCloud.ManifestPropertiesEnvelope, root.ArtikCloud.ManifestVersionsEnvelope);
  }
}(this, function(ApiClient, DeviceTypeEnvelope, DeviceTypesEnvelope, ManifestPropertiesEnvelope, ManifestVersionsEnvelope) {
  'use strict';

  /**
   * DeviceTypes service.
   * @module api/DeviceTypesApi
   * @version 2.0.6
   */

  /**
   * Constructs a new DeviceTypesApi. 
   * @alias module:api/DeviceTypesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAvailableManifestVersions operation.
     * @callback module:api/DeviceTypesApi~getAvailableManifestVersionsCallback
     * @param {String} error Error message, if any.
     * @param module:model/ManifestVersionsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Available Manifest Versions
     * Get a Device Type&#39;s available manifest versions
     * @param String deviceTypeId deviceTypeId
     * @param {module:api/DeviceTypesApi~getAvailableManifestVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/ManifestVersionsEnvelope
     */
    this.getAvailableManifestVersions = function(deviceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceTypeId' is set
      if (deviceTypeId == undefined || deviceTypeId == null) {
        throw "Missing the required parameter 'deviceTypeId' when calling getAvailableManifestVersions";
      }


      var pathParams = {
        'deviceTypeId': deviceTypeId
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
      var returnType = ManifestVersionsEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{deviceTypeId}/availablemanifestversions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceType operation.
     * @callback module:api/DeviceTypesApi~getDeviceTypeCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypeEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Device Type
     * Retrieves a Device Type
     * @param String deviceTypeId deviceTypeId
     * @param {module:api/DeviceTypesApi~getDeviceTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypeEnvelope
     */
    this.getDeviceType = function(deviceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceTypeId' is set
      if (deviceTypeId == undefined || deviceTypeId == null) {
        throw "Missing the required parameter 'deviceTypeId' when calling getDeviceType";
      }


      var pathParams = {
        'deviceTypeId': deviceTypeId
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
      var returnType = DeviceTypeEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{deviceTypeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceTypes operation.
     * @callback module:api/DeviceTypesApi~getDeviceTypesCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Device Types
     * Retrieves Device Types
     * @param String name Device Type name
     * @param {Object} opts Optional parameters
     * @param Number opts.offset Offset for pagination.
     * @param Number opts.count Desired count of items in the result set
     * @param String opts.tags Elements tagged with the list of tags. (comma separated)
     * @param {module:api/DeviceTypesApi~getDeviceTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypesEnvelope
     */
    this.getDeviceTypes = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling getDeviceTypes";
      }


      var pathParams = {
      };
      var queryParams = {
        'name': name,
        'offset': opts['offset'],
        'count': opts['count'],
        'tags': opts['tags']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceTypesEnvelope;

      return this.apiClient.callApi(
        '/devicetypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceTypesByApplication operation.
     * @callback module:api/DeviceTypesApi~getDeviceTypesByApplicationCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Device Types by Application
     * Get Device Types by Application
     * @param String appId Application ID.
     * @param {Object} opts Optional parameters
     * @param Boolean opts.productInfo Flag to include the associated ProductInfo if present
     * @param Number opts.count Desired count of items in the result set.
     * @param Number opts.offset Offset for pagination.
     * @param {module:api/DeviceTypesApi~getDeviceTypesByApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypesEnvelope
     */
    this.getDeviceTypesByApplication = function(appId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId == undefined || appId == null) {
        throw "Missing the required parameter 'appId' when calling getDeviceTypesByApplication";
      }


      var pathParams = {
        'appId': appId
      };
      var queryParams = {
        'productInfo': opts['productInfo'],
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
      var returnType = DeviceTypesEnvelope;

      return this.apiClient.callApi(
        '/applications/{appId}/devicetypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLatestManifestProperties operation.
     * @callback module:api/DeviceTypesApi~getLatestManifestPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/ManifestPropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Latest Manifest Properties
     * Get a Device Type&#39;s manifest properties for the latest version.
     * @param String deviceTypeId Device Type ID.
     * @param {module:api/DeviceTypesApi~getLatestManifestPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/ManifestPropertiesEnvelope
     */
    this.getLatestManifestProperties = function(deviceTypeId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceTypeId' is set
      if (deviceTypeId == undefined || deviceTypeId == null) {
        throw "Missing the required parameter 'deviceTypeId' when calling getLatestManifestProperties";
      }


      var pathParams = {
        'deviceTypeId': deviceTypeId
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
      var returnType = ManifestPropertiesEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{deviceTypeId}/manifests/latest/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManifestProperties operation.
     * @callback module:api/DeviceTypesApi~getManifestPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/ManifestPropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get manifest properties
     * Get a Device Type&#39;s manifest properties for a specific version.
     * @param String deviceTypeId Device Type ID.
     * @param String version Manifest Version.
     * @param {module:api/DeviceTypesApi~getManifestPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/ManifestPropertiesEnvelope
     */
    this.getManifestProperties = function(deviceTypeId, version, callback) {
      var postBody = null;

      // verify the required parameter 'deviceTypeId' is set
      if (deviceTypeId == undefined || deviceTypeId == null) {
        throw "Missing the required parameter 'deviceTypeId' when calling getManifestProperties";
      }

      // verify the required parameter 'version' is set
      if (version == undefined || version == null) {
        throw "Missing the required parameter 'version' when calling getManifestProperties";
      }


      var pathParams = {
        'deviceTypeId': deviceTypeId,
        'version': version
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
      var returnType = ManifestPropertiesEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{deviceTypeId}/manifests/{version}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
