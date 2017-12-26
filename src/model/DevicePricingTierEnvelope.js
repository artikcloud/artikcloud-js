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
    root.ArtikCloud.DevicePricingTierEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DevicePricingTier);
  }
}(this, function(ApiClient, DevicePricingTier) {
  'use strict';

  /**
   * The DevicePricingTierEnvelope model module.
   * @module model/DevicePricingTierEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DevicePricingTierEnvelope</code>.
   * 
   * @alias module:model/DevicePricingTierEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DevicePricingTierEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicePricingTierEnvelope} obj Optional instance to populate.
   * @return {module:model/DevicePricingTierEnvelope} The populated <code>DevicePricingTierEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DevicePricingTier.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * Data envelope
   * @member module:model/DevicePricingTier data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
