(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CertificateEnvelope', '../model/DeviceTypeUpdateInput', '../model/RejectedCSVRowsEnvelope', '../model/UploadIdEnvelope', '../model/UploadStatusEnvelope', '../model/WhitelistEnvelope', '../model/WhitelistResultEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CertificateEnvelope'), require('../model/DeviceTypeUpdateInput'), require('../model/RejectedCSVRowsEnvelope'), require('../model/UploadIdEnvelope'), require('../model/UploadStatusEnvelope'), require('../model/WhitelistEnvelope'), require('../model/WhitelistResultEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.WhitelistingApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.CertificateEnvelope, root.ArtikCloud.DeviceTypeUpdateInput, root.ArtikCloud.RejectedCSVRowsEnvelope, root.ArtikCloud.UploadIdEnvelope, root.ArtikCloud.UploadStatusEnvelope, root.ArtikCloud.WhitelistEnvelope, root.ArtikCloud.WhitelistResultEnvelope);
  }
}(this, function(ApiClient, CertificateEnvelope, DeviceTypeUpdateInput, RejectedCSVRowsEnvelope, UploadIdEnvelope, UploadStatusEnvelope, WhitelistEnvelope, WhitelistResultEnvelope) {
  'use strict';

  /**
   * Whitelisting service.
   * @module api/WhitelistingApi
   * @version 4.2.0
   */

  /**
   * Constructs a new WhitelistingApi. 
   * @alias module:api/WhitelistingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteVdid operation.
     * @callback module:api/WhitelistingApi~deleteVdidCallback
     * @param {String} error Error message, if any.
     * @param module:model/WhitelistEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a vdid from the devicetype whitelist.
     * Delete a vdid from the devicetype whitelist.
     * @param String dtid Device Type ID.
     * @param String vdid Vendor Device ID.
     * @param {module:api/WhitelistingApi~deleteVdidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/WhitelistEnvelope
     */
    this.deleteVdid = function(dtid, vdid, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling deleteVdid";
      }

      // verify the required parameter 'vdid' is set
      if (vdid == undefined || vdid == null) {
        throw "Missing the required parameter 'vdid' when calling deleteVdid";
      }


      var pathParams = {
        'dtid': dtid,
        'vdid': vdid
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
      var returnType = WhitelistEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist/{vdid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWhitelistCertificate operation.
     * @callback module:api/WhitelistingApi~deleteWhitelistCertificateCallback
     * @param {String} error Error message, if any.
     * @param module:model/WhitelistEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a whitelist certificate associated with a devicetype.
     * Delete a whitelist certificate associated with a devicetype.
     * @param String dtid Device Type ID.
     * @param String cid Certificate ID.
     * @param {module:api/WhitelistingApi~deleteWhitelistCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/WhitelistEnvelope
     */
    this.deleteWhitelistCertificate = function(dtid, cid, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling deleteWhitelistCertificate";
      }

      // verify the required parameter 'cid' is set
      if (cid == undefined || cid == null) {
        throw "Missing the required parameter 'cid' when calling deleteWhitelistCertificate";
      }


      var pathParams = {
        'dtid': dtid,
        'cid': cid
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
      var returnType = WhitelistEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist/certificates/{cid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the enableWhitelist operation.
     * @callback module:api/WhitelistingApi~enableWhitelistCallback
     * @param {String} error Error message, if any.
     * @param module:model/WhitelistEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable or disble whitelist feature of a device type
     * Enable or disble whitelist feature of a device type
     * @param String dtid Device Type ID.
     * @param module:model/DeviceTypeUpdateInput deviceTypeUpdateInfo Device type update input.
     * @param {module:api/WhitelistingApi~enableWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/WhitelistEnvelope
     */
    this.enableWhitelist = function(dtid, deviceTypeUpdateInfo, callback) {
      var postBody = deviceTypeUpdateInfo;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling enableWhitelist";
      }

      // verify the required parameter 'deviceTypeUpdateInfo' is set
      if (deviceTypeUpdateInfo == undefined || deviceTypeUpdateInfo == null) {
        throw "Missing the required parameter 'deviceTypeUpdateInfo' when calling enableWhitelist";
      }


      var pathParams = {
        'dtid': dtid
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
      var returnType = WhitelistEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/:dtid/whitelist/enable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRejectedRowList operation.
     * @callback module:api/WhitelistingApi~getRejectedRowListCallback
     * @param {String} error Error message, if any.
     * @param module:model/RejectedCSVRowsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of rejected rows for an uploaded CSV file.
     * Get the list of rejected rows for an uploaded CSV file.
     * @param String dtid Device type id related to the uploaded CSV file.
     * @param String uploadId Upload id related to the uploaded CSV file.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Max results count.
     * @param Number opts.offset Result starting offset.
     * @param {module:api/WhitelistingApi~getRejectedRowListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RejectedCSVRowsEnvelope
     */
    this.getRejectedRowList = function(dtid, uploadId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getRejectedRowList";
      }

      // verify the required parameter 'uploadId' is set
      if (uploadId == undefined || uploadId == null) {
        throw "Missing the required parameter 'uploadId' when calling getRejectedRowList";
      }


      var pathParams = {
        'dtid': dtid,
        'uploadId': uploadId
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
      var returnType = RejectedCSVRowsEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist/{uploadId}/rejectedRows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUploadStatus operation.
     * @callback module:api/WhitelistingApi~getUploadStatusCallback
     * @param {String} error Error message, if any.
     * @param module:model/UploadStatusEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status of a uploaded CSV file.
     * Get the status of a uploaded CSV file.
     * @param String dtid Device type id related to the uploaded CSV file.
     * @param String uploadId Upload id related to the uploaded CSV file.
     * @param {module:api/WhitelistingApi~getUploadStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/UploadStatusEnvelope
     */
    this.getUploadStatus = function(dtid, uploadId, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getUploadStatus";
      }

      // verify the required parameter 'uploadId' is set
      if (uploadId == undefined || uploadId == null) {
        throw "Missing the required parameter 'uploadId' when calling getUploadStatus";
      }


      var pathParams = {
        'dtid': dtid,
        'uploadId': uploadId
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
      var returnType = UploadStatusEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist/{uploadId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhitelist operation.
     * @callback module:api/WhitelistingApi~getWhitelistCallback
     * @param {String} error Error message, if any.
     * @param module:model/WhitelistResultEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get whitelisted vdids of a device type.
     * Get whitelisted vdids of a device type.
     * @param String dtid Device Type ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Max results count.
     * @param Number opts.offset Result starting offset.
     * @param {module:api/WhitelistingApi~getWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/WhitelistResultEnvelope
     */
    this.getWhitelist = function(dtid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getWhitelist";
      }


      var pathParams = {
        'dtid': dtid
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
      var returnType = WhitelistResultEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhitelistCertificate operation.
     * @callback module:api/WhitelistingApi~getWhitelistCertificateCallback
     * @param {String} error Error message, if any.
     * @param module:model/CertificateEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get whitelist certificate of device type.
     * Get whitelist certificate of device type.
     * @param String dtid Device Type ID.
     * @param {module:api/WhitelistingApi~getWhitelistCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/CertificateEnvelope
     */
    this.getWhitelistCertificate = function(dtid, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getWhitelistCertificate";
      }


      var pathParams = {
        'dtid': dtid
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
      var returnType = CertificateEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist/certificates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWhitelistStatus operation.
     * @callback module:api/WhitelistingApi~getWhitelistStatusCallback
     * @param {String} error Error message, if any.
     * @param module:model/WhitelistEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status of whitelist feature (enabled/disabled) of a device type.
     * Get the status of whitelist feature (enabled/disabled) of a device type.
     * @param String dtid Device Type ID.
     * @param {module:api/WhitelistingApi~getWhitelistStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/WhitelistEnvelope
     */
    this.getWhitelistStatus = function(dtid, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getWhitelistStatus";
      }


      var pathParams = {
        'dtid': dtid
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
      var returnType = WhitelistEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadCSV operation.
     * @callback module:api/WhitelistingApi~uploadCSVCallback
     * @param {String} error Error message, if any.
     * @param module:model/UploadIdEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a CSV file related to the Device Type.
     * Upload a CSV file related to the Device Type.
     * @param String dtid Device Type ID.
     * @param String file Device Type ID.
     * @param {module:api/WhitelistingApi~uploadCSVCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/UploadIdEnvelope
     */
    this.uploadCSV = function(dtid, file, callback) {
      var postBody = file;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling uploadCSV";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling uploadCSV";
      }


      var pathParams = {
        'dtid': dtid
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
      var returnType = UploadIdEnvelope;

      return this.apiClient.callApi(
        '/devicetypes/{dtid}/whitelist', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
