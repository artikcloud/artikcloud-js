(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AppProperties', '../model/DeviceSharingEnvelope', '../model/DeviceTypesEnvelope', '../model/DevicesEnvelope', '../model/PropertiesEnvelope', '../model/RulesEnvelope', '../model/UserEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AppProperties'), require('../model/DeviceSharingEnvelope'), require('../model/DeviceTypesEnvelope'), require('../model/DevicesEnvelope'), require('../model/PropertiesEnvelope'), require('../model/RulesEnvelope'), require('../model/UserEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.UsersApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.AppProperties, root.ArtikCloud.DeviceSharingEnvelope, root.ArtikCloud.DeviceTypesEnvelope, root.ArtikCloud.DevicesEnvelope, root.ArtikCloud.PropertiesEnvelope, root.ArtikCloud.RulesEnvelope, root.ArtikCloud.UserEnvelope);
  }
}(this, function(ApiClient, AppProperties, DeviceSharingEnvelope, DeviceTypesEnvelope, DevicesEnvelope, PropertiesEnvelope, RulesEnvelope, UserEnvelope) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 2.0.6
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUserProperties operation.
     * @callback module:api/UsersApi~createUserPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/PropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create User Application Properties
     * Create application properties for a user
     * @param String userId User Id
     * @param module:model/AppProperties properties Properties to be updated
     * @param {Object} opts Optional parameters
     * @param String opts.aid Application ID
     * @param {module:api/UsersApi~createUserPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/PropertiesEnvelope
     */
    this.createUserProperties = function(userId, properties, opts, callback) {
      opts = opts || {};
      var postBody = properties;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createUserProperties";
      }

      // verify the required parameter 'properties' is set
      if (properties == undefined || properties == null) {
        throw "Missing the required parameter 'properties' when calling createUserProperties";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'aid': opts['aid']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PropertiesEnvelope;

      return this.apiClient.callApi(
        '/users/{userId}/properties', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserProperties operation.
     * @callback module:api/UsersApi~deleteUserPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/PropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Application Properties
     * Deletes a user&#39;s application properties
     * @param String userId User Id
     * @param {Object} opts Optional parameters
     * @param String opts.aid Application ID
     * @param {module:api/UsersApi~deleteUserPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/PropertiesEnvelope
     */
    this.deleteUserProperties = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUserProperties";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'aid': opts['aid']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PropertiesEnvelope;

      return this.apiClient.callApi(
        '/users/{userId}/properties', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelf operation.
     * @callback module:api/UsersApi~getSelfCallback
     * @param {String} error Error message, if any.
     * @param module:model/UserEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Current User Profile
     * Get&#39;s the current user&#39;s profile
     * @param {module:api/UsersApi~getSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/UserEnvelope
     */
    this.getSelf = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = UserEnvelope;

      return this.apiClient.callApi(
        '/users/self', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserDeviceTypes operation.
     * @callback module:api/UsersApi~getUserDeviceTypesCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Device Types
     * Retrieve User&#39;s Device Types
     * @param String userId User ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.offset Offset for pagination.
     * @param Number opts.count Desired count of items in the result set
     * @param Boolean opts.includeShared Optional. Boolean (true/false) - If false, only return the user&#39;s device types. If true, also return device types shared by other users.
     * @param {module:api/UsersApi~getUserDeviceTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypesEnvelope
     */
    this.getUserDeviceTypes = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUserDeviceTypes";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'offset': opts['offset'],
        'count': opts['count'],
        'includeShared': opts['includeShared']
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
        '/users/{userId}/devicetypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserDevices operation.
     * @callback module:api/UsersApi~getUserDevicesCallback
     * @param {String} error Error message, if any.
     * @param module:model/DevicesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Devices
     * Retrieve User&#39;s Devices
     * @param String userId User ID
     * @param {Object} opts Optional parameters
     * @param Number opts.offset Offset for pagination.
     * @param Number opts.count Desired count of items in the result set
     * @param Boolean opts.includeProperties Optional. Boolean (true/false) - If false, only return the user&#39;s device types. If true, also return device types shared by other users.
     * @param String opts.owner Return owned and/or shared devices. Default to ALL.
     * @param Boolean opts.includeShareInfo Include share info
     * @param {module:api/UsersApi~getUserDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DevicesEnvelope
     */
    this.getUserDevices = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUserDevices";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'offset': opts['offset'],
        'count': opts['count'],
        'includeProperties': opts['includeProperties'],
        'owner': opts['owner'],
        'includeShareInfo': opts['includeShareInfo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DevicesEnvelope;

      return this.apiClient.callApi(
        '/users/{userId}/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProperties operation.
     * @callback module:api/UsersApi~getUserPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/PropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User application properties
     * Get application properties of a user
     * @param String userId User Id
     * @param {Object} opts Optional parameters
     * @param String opts.aid Application ID
     * @param {module:api/UsersApi~getUserPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/PropertiesEnvelope
     */
    this.getUserProperties = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUserProperties";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'aid': opts['aid']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PropertiesEnvelope;

      return this.apiClient.callApi(
        '/users/{userId}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserRules operation.
     * @callback module:api/UsersApi~getUserRulesCallback
     * @param {String} error Error message, if any.
     * @param module:model/RulesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Rules
     * Retrieve User&#39;s Rules
     * @param String userId User ID.
     * @param {Object} opts Optional parameters
     * @param Boolean opts.excludeDisabled Exclude disabled rules in the result.
     * @param Number opts.count Desired count of items in the result set.
     * @param Number opts.offset Offset for pagination.
     * @param module:model/String opts.owner Rule owner
     * @param {module:api/UsersApi~getUserRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RulesEnvelope
     */
    this.getUserRules = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUserRules";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'excludeDisabled': opts['excludeDisabled'],
        'count': opts['count'],
        'offset': opts['offset'],
        'owner': opts['owner']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RulesEnvelope;

      return this.apiClient.callApi(
        '/users/{userId}/rules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllSharesForUser operation.
     * @callback module:api/UsersApi~listAllSharesForUserCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceSharingEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User shares
     * Get User shares
     * @param String userId User ID.
     * @param String filter filter
     * @param {Object} opts Optional parameters
     * @param Number opts.count Desired count of items in the result set.
     * @param Number opts.offset Offset for pagination.
     * @param {module:api/UsersApi~listAllSharesForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceSharingEnvelope
     */
    this.listAllSharesForUser = function(userId, filter, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling listAllSharesForUser";
      }

      // verify the required parameter 'filter' is set
      if (filter == undefined || filter == null) {
        throw "Missing the required parameter 'filter' when calling listAllSharesForUser";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'filter': filter,
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
        '/users/{userId}/shares', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserProperties operation.
     * @callback module:api/UsersApi~updateUserPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/PropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Application Properties
     * Updates application properties of a user
     * @param String userId User Id
     * @param module:model/AppProperties properties Properties to be updated
     * @param {Object} opts Optional parameters
     * @param String opts.aid Application ID
     * @param {module:api/UsersApi~updateUserPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/PropertiesEnvelope
     */
    this.updateUserProperties = function(userId, properties, opts, callback) {
      opts = opts || {};
      var postBody = properties;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateUserProperties";
      }

      // verify the required parameter 'properties' is set
      if (properties == undefined || properties == null) {
        throw "Missing the required parameter 'properties' when calling updateUserProperties";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'aid': opts['aid']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PropertiesEnvelope;

      return this.apiClient.callApi(
        '/users/{userId}/properties', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
