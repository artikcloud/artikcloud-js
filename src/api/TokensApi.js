(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CheckTokenResponse', '../model/RefreshTokenResponse', '../model/TokenInfoSuccessResponse', '../model/TokenRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CheckTokenResponse'), require('../model/RefreshTokenResponse'), require('../model/TokenInfoSuccessResponse'), require('../model/TokenRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TokensApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.CheckTokenResponse, root.ArtikCloud.RefreshTokenResponse, root.ArtikCloud.TokenInfoSuccessResponse, root.ArtikCloud.TokenRequest);
  }
}(this, function(ApiClient, CheckTokenResponse, RefreshTokenResponse, TokenInfoSuccessResponse, TokenRequest) {
  'use strict';

  /**
   * Tokens service.
   * @module api/TokensApi
   * @version 2.0.6
   */

  /**
   * Constructs a new TokensApi. 
   * @alias module:api/TokensApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkToken operation.
     * @callback module:api/TokensApi~checkTokenCallback
     * @param {String} error Error message, if any.
     * @param module:model/CheckTokenResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Token
     * (Deprecated) Check Token. See tokenInfo
     * @param module:model/TokenRequest tokenInfo Token object to be checked
     * @param {module:api/TokensApi~checkTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/CheckTokenResponse
     */
    this.checkToken = function(tokenInfo, callback) {
      var postBody = tokenInfo;

      // verify the required parameter 'tokenInfo' is set
      if (tokenInfo == undefined || tokenInfo == null) {
        throw "Missing the required parameter 'tokenInfo' when calling checkToken";
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
      var returnType = CheckTokenResponse;

      return this.apiClient.callApi(
        '/accounts/checkToken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshToken operation.
     * @callback module:api/TokensApi~refreshTokenCallback
     * @param {String} error Error message, if any.
     * @param module:model/RefreshTokenResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh Token
     * Refresh Token
     * @param String grantType Grant Type.
     * @param String refreshToken Refresh Token.
     * @param {module:api/TokensApi~refreshTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/RefreshTokenResponse
     */
    this.refreshToken = function(grantType, refreshToken, callback) {
      var postBody = null;

      // verify the required parameter 'grantType' is set
      if (grantType == undefined || grantType == null) {
        throw "Missing the required parameter 'grantType' when calling refreshToken";
      }

      // verify the required parameter 'refreshToken' is set
      if (refreshToken == undefined || refreshToken == null) {
        throw "Missing the required parameter 'refreshToken' when calling refreshToken";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grantType,
        'refresh_token': refreshToken
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = RefreshTokenResponse;

      return this.apiClient.callApi(
        '/accounts/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tokenInfo operation.
     * @callback module:api/TokensApi~tokenInfoCallback
     * @param {String} error Error message, if any.
     * @param module:model/TokenInfoSuccessResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Token Info
     * Returns the Token Information
     * @param {module:api/TokensApi~tokenInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TokenInfoSuccessResponse
     */
    this.tokenInfo = function(callback) {
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
      var returnType = TokenInfoSuccessResponse;

      return this.apiClient.callApi(
        '/accounts/tokenInfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
