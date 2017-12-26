(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TagsEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TagsEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TagsApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TagsEnvelope);
  }
}(this, function(ApiClient, TagsEnvelope) {
  'use strict';

  /**
   * Tags service.
   * @module api/TagsApi
   * @version 2.0.6
   */

  /**
   * Constructs a new TagsApi. 
   * @alias module:api/TagsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTagCategories operation.
     * @callback module:api/TagsApi~getTagCategoriesCallback
     * @param {String} error Error message, if any.
     * @param module:model/TagsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all categories
     * Get all tags marked as categories
     * @param {module:api/TagsApi~getTagCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TagsEnvelope
     */
    this.getTagCategories = function(callback) {
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
      var returnType = TagsEnvelope;

      return this.apiClient.callApi(
        '/tags/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTagSuggestions operation.
     * @callback module:api/TagsApi~getTagSuggestionsCallback
     * @param {String} error Error message, if any.
     * @param module:model/TagsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tag suggestions
     * Get tag suggestions for applications, device types that have been most used with a group of tags.
     * @param {Object} opts Optional parameters
     * @param module:model/String opts.entityType Entity type name.
     * @param String opts.tags Comma separated list of tags.
     * @param String opts.name Name of tags used for type ahead.
     * @param Number opts.count Number of results to return. Max 10.
     * @param {module:api/TagsApi~getTagSuggestionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TagsEnvelope
     */
    this.getTagSuggestions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'entity_type': opts['entityType'],
        'tags': opts['tags'],
        'name': opts['name'],
        'count': opts['count']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TagsEnvelope;

      return this.apiClient.callApi(
        '/tags/suggestions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTagsByCategories operation.
     * @callback module:api/TagsApi~getTagsByCategoriesCallback
     * @param {String} error Error message, if any.
     * @param module:model/TagsEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tags of categories
     * Get all tags related to the list of categories
     * @param {Object} opts Optional parameters
     * @param String opts.categories Comma separated list of categories.
     * @param {module:api/TagsApi~getTagsByCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TagsEnvelope
     */
    this.getTagsByCategories = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'categories': opts['categories']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TagsEnvelope;

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
