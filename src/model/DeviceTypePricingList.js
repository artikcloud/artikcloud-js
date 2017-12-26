(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceTypePricingTier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceTypePricingTier'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypePricingList = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceTypePricingTier);
  }
}(this, function(ApiClient, DeviceTypePricingTier) {
  'use strict';

  /**
   * The DeviceTypePricingList model module.
   * @module model/DeviceTypePricingList
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DeviceTypePricingList</code>.
   * 
   * @alias module:model/DeviceTypePricingList
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTypePricingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypePricingList} obj Optional instance to populate.
   * @return {module:model/DeviceTypePricingList} The populated <code>DeviceTypePricingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('pricingTiers')) {
        obj['pricingTiers'] = ApiClient.convertToType(data['pricingTiers'], [DeviceTypePricingTier]);
      }
    }
    return obj;
  }


  /**
   * Pricing Tiers List
   * @member Array.<module:model/DeviceTypePricingTier> pricingTiers
   */
  exports.prototype['pricingTiers'] = undefined;




  return exports;
}));
