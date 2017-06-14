(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Actions', '../model/AggregatesHistogramResponse', '../model/AggregatesResponse', '../model/FieldPresenceEnvelope', '../model/Message', '../model/MessageIDEnvelope', '../model/NormalizedActionsEnvelope', '../model/NormalizedMessagesEnvelope', '../model/SnapshotResponses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Actions'), require('../model/AggregatesHistogramResponse'), require('../model/AggregatesResponse'), require('../model/FieldPresenceEnvelope'), require('../model/Message'), require('../model/MessageIDEnvelope'), require('../model/NormalizedActionsEnvelope'), require('../model/NormalizedMessagesEnvelope'), require('../model/SnapshotResponses'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.MessagesApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Actions, root.ArtikCloud.AggregatesHistogramResponse, root.ArtikCloud.AggregatesResponse, root.ArtikCloud.FieldPresenceEnvelope, root.ArtikCloud.Message, root.ArtikCloud.MessageIDEnvelope, root.ArtikCloud.NormalizedActionsEnvelope, root.ArtikCloud.NormalizedMessagesEnvelope, root.ArtikCloud.SnapshotResponses);
  }
}(this, function(ApiClient, Actions, AggregatesHistogramResponse, AggregatesResponse, FieldPresenceEnvelope, Message, MessageIDEnvelope, NormalizedActionsEnvelope, NormalizedMessagesEnvelope, SnapshotResponses) {
  'use strict';

  /**
   * Messages service.
   * @module api/MessagesApi
   * @version 2.0.6
   */

  /**
   * Constructs a new MessagesApi. 
   * @alias module:api/MessagesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAggregatesHistogram operation.
     * @callback module:api/MessagesApi~getAggregatesHistogramCallback
     * @param {String} error Error message, if any.
     * @param module:model/AggregatesHistogramResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Normalized Message Histogram
     * Get Histogram on normalized messages.
     * @param Number startDate Timestamp of earliest message (in milliseconds since epoch).
     * @param Number endDate Timestamp of latest message (in milliseconds since epoch).
     * @param {Object} opts Optional parameters
     * @param String opts.sdid Source device ID of the messages being searched.
     * @param String opts.field Message field being queried for building histogram.
     * @param String opts.interval Interval of time for building histogram blocks. (Valid values: minute, hour, day, month, year)
     * @param {module:api/MessagesApi~getAggregatesHistogramCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/AggregatesHistogramResponse
     */
    this.getAggregatesHistogram = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getAggregatesHistogram";
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getAggregatesHistogram";
      }


      var pathParams = {
      };
      var queryParams = {
        'startDate': startDate,
        'endDate': endDate,
        'sdid': opts['sdid'],
        'field': opts['field'],
        'interval': opts['interval']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AggregatesHistogramResponse;

      return this.apiClient.callApi(
        '/messages/analytics/histogram', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFieldPresence operation.
     * @callback module:api/MessagesApi~getFieldPresenceCallback
     * @param {String} error Error message, if any.
     * @param module:model/FieldPresenceEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get normalized message presence
     * Get normalized message presence.
     * @param Number startDate startDate
     * @param Number endDate endDate
     * @param String interval String representing grouping interval. One of: &#39;minute&#39; (1 hour limit), &#39;hour&#39; (1 day limit), &#39;day&#39; (31 days limit), &#39;month&#39; (1 year limit), or &#39;year&#39; (10 years limit).
     * @param {Object} opts Optional parameters
     * @param String opts.sdid Source device ID of the messages being searched.
     * @param String opts.fieldPresence String representing a field from the specified device ID.
     * @param {module:api/MessagesApi~getFieldPresenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/FieldPresenceEnvelope
     */
    this.getFieldPresence = function(startDate, endDate, interval, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getFieldPresence";
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getFieldPresence";
      }

      // verify the required parameter 'interval' is set
      if (interval == undefined || interval == null) {
        throw "Missing the required parameter 'interval' when calling getFieldPresence";
      }


      var pathParams = {
      };
      var queryParams = {
        'sdid': opts['sdid'],
        'fieldPresence': opts['fieldPresence'],
        'startDate': startDate,
        'endDate': endDate,
        'interval': interval
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FieldPresenceEnvelope;

      return this.apiClient.callApi(
        '/messages/presence', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLastNormalizedMessages operation.
     * @callback module:api/MessagesApi~getLastNormalizedMessagesCallback
     * @param {String} error Error message, if any.
     * @param module:model/NormalizedMessagesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Last Normalized Message
     * Get last messages normalized.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Number of items to return per query.
     * @param String opts.sdids Comma separated list of source device IDs (minimum: 1).
     * @param String opts.fieldPresence String representing a field from the specified device ID.
     * @param {module:api/MessagesApi~getLastNormalizedMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/NormalizedMessagesEnvelope
     */
    this.getLastNormalizedMessages = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'count': opts['count'],
        'sdids': opts['sdids'],
        'fieldPresence': opts['fieldPresence']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NormalizedMessagesEnvelope;

      return this.apiClient.callApi(
        '/messages/last', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessageAggregates operation.
     * @callback module:api/MessagesApi~getMessageAggregatesCallback
     * @param {String} error Error message, if any.
     * @param module:model/AggregatesResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Normalized Message Aggregates
     * Get Aggregates on normalized messages.
     * @param String sdid Source device ID of the messages being searched.
     * @param String field Message field being queried for aggregates.
     * @param Number startDate Timestamp of earliest message (in milliseconds since epoch).
     * @param Number endDate Timestamp of latest message (in milliseconds since epoch).
     * @param {module:api/MessagesApi~getMessageAggregatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/AggregatesResponse
     */
    this.getMessageAggregates = function(sdid, field, startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'sdid' is set
      if (sdid == undefined || sdid == null) {
        throw "Missing the required parameter 'sdid' when calling getMessageAggregates";
      }

      // verify the required parameter 'field' is set
      if (field == undefined || field == null) {
        throw "Missing the required parameter 'field' when calling getMessageAggregates";
      }

      // verify the required parameter 'startDate' is set
      if (startDate == undefined || startDate == null) {
        throw "Missing the required parameter 'startDate' when calling getMessageAggregates";
      }

      // verify the required parameter 'endDate' is set
      if (endDate == undefined || endDate == null) {
        throw "Missing the required parameter 'endDate' when calling getMessageAggregates";
      }


      var pathParams = {
      };
      var queryParams = {
        'sdid': sdid,
        'field': field,
        'startDate': startDate,
        'endDate': endDate
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AggregatesResponse;

      return this.apiClient.callApi(
        '/messages/analytics/aggregates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessageSnapshots operation.
     * @callback module:api/MessagesApi~getMessageSnapshotsCallback
     * @param {String} error Error message, if any.
     * @param module:model/SnapshotResponses data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Message Snapshots
     * Get message snapshots.
     * @param String sdids Device IDs for which the snapshots are requested. Max 100 device ids per call.
     * @param {Object} opts Optional parameters
     * @param Boolean opts.includeTimestamp Indicates whether to return timestamps of the last update for each field.
     * @param {module:api/MessagesApi~getMessageSnapshotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/SnapshotResponses
     */
    this.getMessageSnapshots = function(sdids, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sdids' is set
      if (sdids == undefined || sdids == null) {
        throw "Missing the required parameter 'sdids' when calling getMessageSnapshots";
      }


      var pathParams = {
      };
      var queryParams = {
        'sdids': sdids,
        'includeTimestamp': opts['includeTimestamp']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SnapshotResponses;

      return this.apiClient.callApi(
        '/messages/snapshots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNormalizedActions operation.
     * @callback module:api/MessagesApi~getNormalizedActionsCallback
     * @param {String} error Error message, if any.
     * @param module:model/NormalizedActionsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Normalized Actions
     * Get the actions normalized
     * @param {Object} opts Optional parameters
     * @param String opts.uid User ID. If not specified, assume that of the current authenticated user. If specified, it must be that of a user for which the current authenticated user has read access to.
     * @param String opts.ddid Destination device ID of the actions being searched.
     * @param String opts.mid The message ID being searched.
     * @param String opts.offset A string that represents the starting item, should be the value of &#39;next&#39; field received in the last response. (required for pagination)
     * @param Number opts.count count
     * @param Number opts.startDate startDate
     * @param Number opts.endDate endDate
     * @param String opts.order Desired sort order: &#39;asc&#39; or &#39;desc&#39;
     * @param {module:api/MessagesApi~getNormalizedActionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/NormalizedActionsEnvelope
     */
    this.getNormalizedActions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'uid': opts['uid'],
        'ddid': opts['ddid'],
        'mid': opts['mid'],
        'offset': opts['offset'],
        'count': opts['count'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NormalizedActionsEnvelope;

      return this.apiClient.callApi(
        '/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNormalizedMessages operation.
     * @callback module:api/MessagesApi~getNormalizedMessagesCallback
     * @param {String} error Error message, if any.
     * @param module:model/NormalizedMessagesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Normalized Messages
     * Get the messages normalized
     * @param {Object} opts Optional parameters
     * @param String opts.uid User ID. If not specified, assume that of the current authenticated user. If specified, it must be that of a user for which the current authenticated user has read access to.
     * @param String opts.sdid Source device ID of the messages being searched.
     * @param String opts.mid The message ID being searched.
     * @param String opts.fieldPresence String representing a field from the specified device ID.
     * @param String opts.filter Filter.
     * @param String opts.offset A string that represents the starting item, should be the value of &#39;next&#39; field received in the last response. (required for pagination)
     * @param Number opts.count count
     * @param Number opts.startDate startDate
     * @param Number opts.endDate endDate
     * @param String opts.order Desired sort order: &#39;asc&#39; or &#39;desc&#39;
     * @param {module:api/MessagesApi~getNormalizedMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/NormalizedMessagesEnvelope
     */
    this.getNormalizedMessages = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'uid': opts['uid'],
        'sdid': opts['sdid'],
        'mid': opts['mid'],
        'fieldPresence': opts['fieldPresence'],
        'filter': opts['filter'],
        'offset': opts['offset'],
        'count': opts['count'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NormalizedMessagesEnvelope;

      return this.apiClient.callApi(
        '/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendActions operation.
     * @callback module:api/MessagesApi~sendActionsCallback
     * @param {String} error Error message, if any.
     * @param module:model/MessageIDEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Actions
     * Send Actions
     * @param module:model/Actions data Actions that are passed in the body
     * @param {module:api/MessagesApi~sendActionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MessageIDEnvelope
     */
    this.sendActions = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw "Missing the required parameter 'data' when calling sendActions";
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
      var returnType = MessageIDEnvelope;

      return this.apiClient.callApi(
        '/actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendMessage operation.
     * @callback module:api/MessagesApi~sendMessageCallback
     * @param {String} error Error message, if any.
     * @param module:model/MessageIDEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Message
     * Send a message
     * @param module:model/Message data Message object that is passed in the body
     * @param {module:api/MessagesApi~sendMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MessageIDEnvelope
     */
    this.sendMessage = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw "Missing the required parameter 'data' when calling sendMessage";
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
      var returnType = MessageIDEnvelope;

      return this.apiClient.callApi(
        '/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
