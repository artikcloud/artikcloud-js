(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicePricingTierRequest = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DevicePricingTierRequest model module.
   * @module model/DevicePricingTierRequest
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DevicePricingTierRequest</code>.
   * 
   * @alias module:model/DevicePricingTierRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DevicePricingTierRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicePricingTierRequest} obj Optional instance to populate.
   * @return {module:model/DevicePricingTierRequest} The populated <code>DevicePricingTierRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ptid')) {
        obj['ptid'] = ApiClient.convertToType(data['ptid'], 'String');
      }
    }
    return obj;
  }


  /**
   * Pricing Tier ID
   * @member String ptid
   */
  exports.prototype['ptid'] = undefined;




  return exports;
}));
