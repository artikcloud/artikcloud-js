(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DevicePricingTier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DevicePricingTier'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicePricingTiers = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DevicePricingTier);
  }
}(this, function(ApiClient, DevicePricingTier) {
  'use strict';

  /**
   * The DevicePricingTiers model module.
   * @module model/DevicePricingTiers
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DevicePricingTiers</code>.
   * 
   * @alias module:model/DevicePricingTiers
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DevicePricingTiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicePricingTiers} obj Optional instance to populate.
   * @return {module:model/DevicePricingTiers} The populated <code>DevicePricingTiers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('pricingTiers')) {
        obj['pricingTiers'] = ApiClient.convertToType(data['pricingTiers'], [DevicePricingTier]);
      }
    }
    return obj;
  }


  /**
   * Pricing Tiers list
   * @member Array.<module:model/DevicePricingTier> pricingTiers
   */
  exports.prototype['pricingTiers'] = undefined;




  return exports;
}));
