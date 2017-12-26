(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DevicePricingTierEnvelope', '../model/DevicePricingTierRequest', '../model/DevicePricingTiersEnvelope', '../model/DeviceTypePricingTier', '../model/DeviceTypePricingTiersEnvelope', '../model/UpgradePathEnvelope'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DevicePricingTierEnvelope'), require('../model/DevicePricingTierRequest'), require('../model/DevicePricingTiersEnvelope'), require('../model/DeviceTypePricingTier'), require('../model/DeviceTypePricingTiersEnvelope'), require('../model/UpgradePathEnvelope'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.MonetizationApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DevicePricingTierEnvelope, root.ArtikCloud.DevicePricingTierRequest, root.ArtikCloud.DevicePricingTiersEnvelope, root.ArtikCloud.DeviceTypePricingTier, root.ArtikCloud.DeviceTypePricingTiersEnvelope, root.ArtikCloud.UpgradePathEnvelope);
  }
}(this, function(ApiClient, DevicePricingTierEnvelope, DevicePricingTierRequest, DevicePricingTiersEnvelope, DeviceTypePricingTier, DeviceTypePricingTiersEnvelope, UpgradePathEnvelope) {
  'use strict';

  /**
   * Monetization service.
   * @module api/MonetizationApi
   * @version 4.2.0
   */

  /**
   * Constructs a new MonetizationApi. 
   * @alias module:api/MonetizationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPricingTiers operation.
     * @callback module:api/MonetizationApi~createPricingTiersCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypePricingTier data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Define devicetype&#39;s pricing tiers.
     * Define devicetype&#39;s pricing tiers.
     * @param String dtid DeviceType ID
     * @param module:model/DeviceTypePricingTier pricingTierInfo Pricing tier info
     * @param {module:api/MonetizationApi~createPricingTiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypePricingTier
     */
    this.createPricingTiers = function(dtid, pricingTierInfo, callback) {
      var postBody = pricingTierInfo;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling createPricingTiers";
      }

      // verify the required parameter 'pricingTierInfo' is set
      if (pricingTierInfo == undefined || pricingTierInfo == null) {
        throw "Missing the required parameter 'pricingTierInfo' when calling createPricingTiers";
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
      var returnType = DeviceTypePricingTier;

      return this.apiClient.callApi(
        '/pricing/devicetypes/{dtid}/pricingtiers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPricingTiers operation.
     * @callback module:api/MonetizationApi~getPricingTiersCallback
     * @param {String} error Error message, if any.
     * @param module:model/DevicePricingTiersEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a device&#39;s pricing tiers
     * Get a device&#39;s pricing tiers
     * @param String did Device ID
     * @param {Object} opts Optional parameters
     * @param Boolean opts.active Filter by active
     * @param {module:api/MonetizationApi~getPricingTiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DevicePricingTiersEnvelope
     */
    this.getPricingTiers = function(did, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling getPricingTiers";
      }


      var pathParams = {
        'did': did
      };
      var queryParams = {
        'active': opts['active']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DevicePricingTiersEnvelope;

      return this.apiClient.callApi(
        '/pricing/devices/{did}/pricingtiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getThePricingTiers operation.
     * @callback module:api/MonetizationApi~getThePricingTiersCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypePricingTiersEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get devicetype&#39;s pricing tiers.
     * Get devicetype&#39;s pricing tiers.
     * @param String dtid DeviceType ID
     * @param Number version Version
     * @param {module:api/MonetizationApi~getThePricingTiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypePricingTiersEnvelope
     */
    this.getThePricingTiers = function(dtid, version, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getThePricingTiers";
      }

      // verify the required parameter 'version' is set
      if (version == undefined || version == null) {
        throw "Missing the required parameter 'version' when calling getThePricingTiers";
      }


      var pathParams = {
        'dtid': dtid,
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
      var returnType = DeviceTypePricingTiersEnvelope;

      return this.apiClient.callApi(
        '/pricing/devicetypes/{dtid}/pricingtiers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUpgradePath operation.
     * @callback module:api/MonetizationApi~getUpgradePathCallback
     * @param {String} error Error message, if any.
     * @param module:model/UpgradePathEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get upgrade path
     * Get upgrade path
     * @param String did Device ID
     * @param String action Action to perform
     * @param {module:api/MonetizationApi~getUpgradePathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/UpgradePathEnvelope
     */
    this.getUpgradePath = function(did, action, callback) {
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling getUpgradePath";
      }

      // verify the required parameter 'action' is set
      if (action == undefined || action == null) {
        throw "Missing the required parameter 'action' when calling getUpgradePath";
      }


      var pathParams = {
        'did': did,
        'action': action
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
      var returnType = UpgradePathEnvelope;

      return this.apiClient.callApi(
        '/pricing/devices/{did}/revenueshare/upgradepath', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPricingTier operation.
     * @callback module:api/MonetizationApi~setPricingTierCallback
     * @param {String} error Error message, if any.
     * @param module:model/DevicePricingTierEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a device&#39;s pricing tier
     * Set a device&#39;s pricing tier
     * @param String did Device ID
     * @param module:model/DevicePricingTierRequest pricingTier Pricing tier
     * @param {module:api/MonetizationApi~setPricingTierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DevicePricingTierEnvelope
     */
    this.setPricingTier = function(did, pricingTier, callback) {
      var postBody = pricingTier;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling setPricingTier";
      }

      // verify the required parameter 'pricingTier' is set
      if (pricingTier == undefined || pricingTier == null) {
        throw "Missing the required parameter 'pricingTier' when calling setPricingTier";
      }


      var pathParams = {
        'did': did
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
      var returnType = DevicePricingTierEnvelope;

      return this.apiClient.callApi(
        '/pricing/devices/{did}/pricingtiers', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
