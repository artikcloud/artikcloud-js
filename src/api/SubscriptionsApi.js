(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/NotifMessagesResponse', '../model/SubscriptionEnvelope', '../model/SubscriptionInfo', '../model/SubscriptionsEnvelope', '../model/ValidationCallbackInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NotifMessagesResponse'), require('../model/SubscriptionEnvelope'), require('../model/SubscriptionInfo'), require('../model/SubscriptionsEnvelope'), require('../model/ValidationCallbackInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.SubscriptionsApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.NotifMessagesResponse, root.ArtikCloud.SubscriptionEnvelope, root.ArtikCloud.SubscriptionInfo, root.ArtikCloud.SubscriptionsEnvelope, root.ArtikCloud.ValidationCallbackInfo);
  }
}(this, function(ApiClient, NotifMessagesResponse, SubscriptionEnvelope, SubscriptionInfo, SubscriptionsEnvelope, ValidationCallbackInfo) {
  'use strict';

  /**
   * Subscriptions service.
   * @module api/SubscriptionsApi
   * @version 2.0.6
   */

  /**
   * Constructs a new SubscriptionsApi. 
   * @alias module:api/SubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:api/SubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param module:model/SubscriptionEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Subscription
     * Create Subscription
     * @param module:model/SubscriptionInfo subscriptionInfo Subscription details
     * @param {module:api/SubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/SubscriptionEnvelope
     */
    this.createSubscription = function(subscriptionInfo, callback) {
      var postBody = subscriptionInfo;

      // verify the required parameter 'subscriptionInfo' is set
      if (subscriptionInfo == undefined || subscriptionInfo == null) {
        throw "Missing the required parameter 'subscriptionInfo' when calling createSubscription";
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
      var returnType = SubscriptionEnvelope;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubscription operation.
     * @callback module:api/SubscriptionsApi~deleteSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param module:model/SubscriptionEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Subscription
     * Delete Subscription
     * @param String subId Subscription ID.
     * @param {module:api/SubscriptionsApi~deleteSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/SubscriptionEnvelope
     */
    this.deleteSubscription = function(subId, callback) {
      var postBody = null;

      // verify the required parameter 'subId' is set
      if (subId == undefined || subId == null) {
        throw "Missing the required parameter 'subId' when calling deleteSubscription";
      }


      var pathParams = {
        'subId': subId
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
      var returnType = SubscriptionEnvelope;

      return this.apiClient.callApi(
        '/subscriptions/{subId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSubscriptions operation.
     * @callback module:api/SubscriptionsApi~getAllSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param module:model/SubscriptionsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Subscriptions
     * Get All Subscriptions
     * @param {Object} opts Optional parameters
     * @param String opts.uid User ID
     * @param Number opts.offset Offset for pagination.
     * @param Number opts.count Desired count of items in the result set.
     * @param {module:api/SubscriptionsApi~getAllSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/SubscriptionsEnvelope
     */
    this.getAllSubscriptions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'uid': opts['uid'],
        'offset': opts['offset'],
        'count': opts['count']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SubscriptionsEnvelope;

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessages operation.
     * @callback module:api/SubscriptionsApi~getMessagesCallback
     * @param {String} error Error message, if any.
     * @param module:model/NotifMessagesResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Messages
     * Get Messages
     * @param String notifId Notification ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.offset Offset for pagination.
     * @param Number opts.count Desired count of items in the result set.
     * @param String opts.order Sort order of results by ts. Either &#39;asc&#39; or &#39;desc&#39;.
     * @param {module:api/SubscriptionsApi~getMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/NotifMessagesResponse
     */
    this.getMessages = function(notifId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'notifId' is set
      if (notifId == undefined || notifId == null) {
        throw "Missing the required parameter 'notifId' when calling getMessages";
      }


      var pathParams = {
        'notifId': notifId
      };
      var queryParams = {
        'offset': opts['offset'],
        'count': opts['count'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotifMessagesResponse;

      return this.apiClient.callApi(
        '/notifications/{notifId}/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param module:model/SubscriptionEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Subscription
     * Get Subscription
     * @param String subId Subscription ID.
     * @param {module:api/SubscriptionsApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/SubscriptionEnvelope
     */
    this.getSubscription = function(subId, callback) {
      var postBody = null;

      // verify the required parameter 'subId' is set
      if (subId == undefined || subId == null) {
        throw "Missing the required parameter 'subId' when calling getSubscription";
      }


      var pathParams = {
        'subId': subId
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
      var returnType = SubscriptionEnvelope;

      return this.apiClient.callApi(
        '/subscriptions/{subId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateSubscription operation.
     * @callback module:api/SubscriptionsApi~validateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param module:model/SubscriptionEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Subscription
     * Validate Subscription
     * @param String subId Subscription ID.
     * @param module:model/ValidationCallbackInfo validationCallbackRequest Subscription validation callback request
     * @param {module:api/SubscriptionsApi~validateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/SubscriptionEnvelope
     */
    this.validateSubscription = function(subId, validationCallbackRequest, callback) {
      var postBody = validationCallbackRequest;

      // verify the required parameter 'subId' is set
      if (subId == undefined || subId == null) {
        throw "Missing the required parameter 'subId' when calling validateSubscription";
      }

      // verify the required parameter 'validationCallbackRequest' is set
      if (validationCallbackRequest == undefined || validationCallbackRequest == null) {
        throw "Missing the required parameter 'validationCallbackRequest' when calling validateSubscription";
      }


      var pathParams = {
        'subId': subId
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
      var returnType = SubscriptionEnvelope;

      return this.apiClient.callApi(
        '/subscriptions/{subId}/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
