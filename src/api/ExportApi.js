(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ExportHistoryResponse', '../model/ExportRequestInfo', '../model/ExportRequestResponse', '../model/ExportStatusResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExportHistoryResponse'), require('../model/ExportRequestInfo'), require('../model/ExportRequestResponse'), require('../model/ExportStatusResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ExportApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ExportHistoryResponse, root.ArtikCloud.ExportRequestInfo, root.ArtikCloud.ExportRequestResponse, root.ArtikCloud.ExportStatusResponse);
  }
}(this, function(ApiClient, ExportHistoryResponse, ExportRequestInfo, ExportRequestResponse, ExportStatusResponse) {
  'use strict';

  /**
   * Export service.
   * @module api/ExportApi
   * @version 2.0.6
   */

  /**
   * Constructs a new ExportApi. 
   * @alias module:api/ExportApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the exportRequest operation.
     * @callback module:api/ExportApi~exportRequestCallback
     * @param {String} error Error message, if any.
     * @param module:model/ExportRequestResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Export Request
     * Export normalized messages. The following input combinations are supported:&lt;br/&gt;&lt;table&gt;&lt;tr&gt;&lt;th&gt;Combination&lt;/th&gt;&lt;th&gt;Parameters&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by users&lt;/td&gt;&lt;td&gt;uids&lt;/td&gt;&lt;td&gt;Search by a list of User IDs. For each user in the list, the current authenticated user must have read access over the specified user.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by devices&lt;/td&gt;&lt;td&gt;sdids&lt;/td&gt;&lt;td&gt;Search by Source Device IDs.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by device types&lt;/td&gt;&lt;td&gt;uids,sdtids&lt;/td&gt;&lt;td&gt;Search by list of Source Device Type IDs for the given list of users.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by trial&lt;/td&gt;&lt;td&gt;trialId&lt;/td&gt;&lt;td&gt;Search by Trial ID.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by combination of parameters&lt;/td&gt;&lt;td&gt;uids,sdids,sdtids&lt;/td&gt;&lt;td&gt;Search by list of Source Device IDs. Each Device ID must belong to a Source Device Type ID and a User ID.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Common&lt;/td&gt;&lt;td&gt;startDate,endDate,order,format,url,csvHeaders&lt;/td&gt;&lt;td&gt;Parameters that can be used with the above combinations.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
     * @param module:model/ExportRequestInfo exportRequestInfo ExportRequest object that is passed in the body
     * @param {module:api/ExportApi~exportRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/ExportRequestResponse
     */
    this.exportRequest = function(exportRequestInfo, callback) {
      var postBody = exportRequestInfo;

      // verify the required parameter 'exportRequestInfo' is set
      if (exportRequestInfo == undefined || exportRequestInfo == null) {
        throw "Missing the required parameter 'exportRequestInfo' when calling exportRequest";
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
      var returnType = ExportRequestResponse;

      return this.apiClient.callApi(
        '/messages/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExportHistory operation.
     * @callback module:api/ExportApi~getExportHistoryCallback
     * @param {String} error Error message, if any.
     * @param module:model/ExportHistoryResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Export History
     * Get the history of export requests.
     * @param {Object} opts Optional parameters
     * @param String opts.trialId Filter by trialId.
     * @param Number opts.count Pagination count.
     * @param Number opts.offset Pagination offset.
     * @param {module:api/ExportApi~getExportHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/ExportHistoryResponse
     */
    this.getExportHistory = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'trialId': opts['trialId'],
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
      var returnType = ExportHistoryResponse;

      return this.apiClient.callApi(
        '/messages/export/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExportResult operation.
     * @callback module:api/ExportApi~getExportResultCallback
     * @param {String} error Error message, if any.
     * @param 'String' data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Export Result
     * Retrieve result of the export query in tgz format. The tar file may contain one or more files with the results.
     * @param String exportId Export ID of the export query.
     * @param {module:api/ExportApi~getExportResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: 'String'
     */
    this.getExportResult = function(exportId, callback) {
      var postBody = null;

      // verify the required parameter 'exportId' is set
      if (exportId == undefined || exportId == null) {
        throw "Missing the required parameter 'exportId' when calling getExportResult";
      }


      var pathParams = {
        'exportId': exportId
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/messages/export/{exportId}/result', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getExportStatus operation.
     * @callback module:api/ExportApi~getExportStatusCallback
     * @param {String} error Error message, if any.
     * @param module:model/ExportStatusResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Export Status
     * Check status of the export query.
     * @param String exportId Export ID of the export query.
     * @param {module:api/ExportApi~getExportStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/ExportStatusResponse
     */
    this.getExportStatus = function(exportId, callback) {
      var postBody = null;

      // verify the required parameter 'exportId' is set
      if (exportId == undefined || exportId == null) {
        throw "Missing the required parameter 'exportId' when calling getExportStatus";
      }


      var pathParams = {
        'exportId': exportId
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
      var returnType = ExportStatusResponse;

      return this.apiClient.callApi(
        '/messages/export/{exportId}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
