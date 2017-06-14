(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/RuleCreationInfo', '../model/RuleEnvelope', '../model/RuleUpdateInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RuleCreationInfo'), require('../model/RuleEnvelope'), require('../model/RuleUpdateInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.RulesApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.RuleCreationInfo, root.ArtikCloud.RuleEnvelope, root.ArtikCloud.RuleUpdateInfo);
  }
}(this, function(ApiClient, RuleCreationInfo, RuleEnvelope, RuleUpdateInfo) {
  'use strict';

  /**
   * Rules service.
   * @module api/RulesApi
   * @version 2.0.6
   */

  /**
   * Constructs a new RulesApi. 
   * @alias module:api/RulesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createRule operation.
     * @callback module:api/RulesApi~createRuleCallback
     * @param {String} error Error message, if any.
     * @param module:model/RuleEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Rule
     * Create a new Rule
     * @param module:model/RuleCreationInfo ruleInfo Rule object that needs to be added
     * @param String userId User ID
     * @param {module:api/RulesApi~createRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RuleEnvelope
     */
    this.createRule = function(ruleInfo, userId, callback) {
      var postBody = ruleInfo;

      // verify the required parameter 'ruleInfo' is set
      if (ruleInfo == undefined || ruleInfo == null) {
        throw "Missing the required parameter 'ruleInfo' when calling createRule";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createRule";
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RuleEnvelope;

      return this.apiClient.callApi(
        '/rules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRule operation.
     * @callback module:api/RulesApi~deleteRuleCallback
     * @param {String} error Error message, if any.
     * @param module:model/RuleEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Rule
     * Delete a Rule
     * @param String ruleId Rule ID.
     * @param {module:api/RulesApi~deleteRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RuleEnvelope
     */
    this.deleteRule = function(ruleId, callback) {
      var postBody = null;

      // verify the required parameter 'ruleId' is set
      if (ruleId == undefined || ruleId == null) {
        throw "Missing the required parameter 'ruleId' when calling deleteRule";
      }


      var pathParams = {
        'ruleId': ruleId
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
      var returnType = RuleEnvelope;

      return this.apiClient.callApi(
        '/rules/{ruleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRule operation.
     * @callback module:api/RulesApi~getRuleCallback
     * @param {String} error Error message, if any.
     * @param module:model/RuleEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Rule
     * Get a rule using the Rule ID
     * @param String ruleId Rule ID.
     * @param {module:api/RulesApi~getRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RuleEnvelope
     */
    this.getRule = function(ruleId, callback) {
      var postBody = null;

      // verify the required parameter 'ruleId' is set
      if (ruleId == undefined || ruleId == null) {
        throw "Missing the required parameter 'ruleId' when calling getRule";
      }


      var pathParams = {
        'ruleId': ruleId
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
      var returnType = RuleEnvelope;

      return this.apiClient.callApi(
        '/rules/{ruleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRule operation.
     * @callback module:api/RulesApi~updateRuleCallback
     * @param {String} error Error message, if any.
     * @param module:model/RuleEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Rule
     * Update an existing Rule
     * @param String ruleId Rule ID.
     * @param module:model/RuleUpdateInfo ruleInfo Rule object that needs to be updated
     * @param {module:api/RulesApi~updateRuleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RuleEnvelope
     */
    this.updateRule = function(ruleId, ruleInfo, callback) {
      var postBody = ruleInfo;

      // verify the required parameter 'ruleId' is set
      if (ruleId == undefined || ruleId == null) {
        throw "Missing the required parameter 'ruleId' when calling updateRule";
      }

      // verify the required parameter 'ruleInfo' is set
      if (ruleInfo == undefined || ruleInfo == null) {
        throw "Missing the required parameter 'ruleInfo' when calling updateRule";
      }


      var pathParams = {
        'ruleId': ruleId
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
      var returnType = RuleEnvelope;

      return this.apiClient.callApi(
        '/rules/{ruleId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
