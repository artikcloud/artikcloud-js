(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DeviceRegConfirmUserRequest', '../model/DeviceRegConfirmUserResponseEnvelope', '../model/DeviceRegStatusResponseEnvelope', '../model/UnregisterDeviceResponseEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceRegConfirmUserRequest'), require('../model/DeviceRegConfirmUserResponseEnvelope'), require('../model/DeviceRegStatusResponseEnvelope'), require('../model/UnregisterDeviceResponseEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.RegistrationsApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceRegConfirmUserRequest, root.ArtikCloud.DeviceRegConfirmUserResponseEnvelope, root.ArtikCloud.DeviceRegStatusResponseEnvelope, root.ArtikCloud.UnregisterDeviceResponseEnvelope);
  }
}(this, function(ApiClient, DeviceRegConfirmUserRequest, DeviceRegConfirmUserResponseEnvelope, DeviceRegStatusResponseEnvelope, UnregisterDeviceResponseEnvelope) {
  'use strict';

  /**
   * Registrations service.
   * @module api/RegistrationsApi
   * @version 2.0.6
   */

  /**
   * Constructs a new RegistrationsApi. 
   * @alias module:api/RegistrationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the confirmUser operation.
     * @callback module:api/RegistrationsApi~confirmUserCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceRegConfirmUserResponseEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm User
     * This call updates the registration request issued earlier by associating it with an authenticated user and captures all additional information required to add a new device.
     * @param module:model/DeviceRegConfirmUserRequest registrationInfo Device Registration information.
     * @param {module:api/RegistrationsApi~confirmUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceRegConfirmUserResponseEnvelope
     */
    this.confirmUser = function(registrationInfo, callback) {
      var postBody = registrationInfo;

      // verify the required parameter 'registrationInfo' is set
      if (registrationInfo == undefined || registrationInfo == null) {
        throw "Missing the required parameter 'registrationInfo' when calling confirmUser";
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceRegConfirmUserResponseEnvelope;

      return this.apiClient.callApi(
        '/devices/registrations/pin', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRequestStatusForUser operation.
     * @callback module:api/RegistrationsApi~getRequestStatusForUserCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceRegStatusResponseEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Request Status For User
     * This call checks the status of the request so users can poll and know when registration is complete.
     * @param String requestId Request ID.
     * @param {module:api/RegistrationsApi~getRequestStatusForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceRegStatusResponseEnvelope
     */
    this.getRequestStatusForUser = function(requestId, callback) {
      var postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId == undefined || requestId == null) {
        throw "Missing the required parameter 'requestId' when calling getRequestStatusForUser";
      }


      var pathParams = {
        'requestId': requestId
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
      var returnType = DeviceRegStatusResponseEnvelope;

      return this.apiClient.callApi(
        '/devices/registrations/{requestId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unregisterDevice operation.
     * @callback module:api/RegistrationsApi~unregisterDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/UnregisterDeviceResponseEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister Device
     * This call clears any associations from the secure device registration.
     * @param String deviceId Device ID.
     * @param {module:api/RegistrationsApi~unregisterDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/UnregisterDeviceResponseEnvelope
     */
    this.unregisterDevice = function(deviceId, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling unregisterDevice";
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
      var returnType = UnregisterDeviceResponseEnvelope;

      return this.apiClient.callApi(
        '/devices/{deviceId}/registrations', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
