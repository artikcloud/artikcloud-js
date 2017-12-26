(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DevicePricingTiers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DevicePricingTiers'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicePricingTiersEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DevicePricingTiers);
  }
}(this, function(ApiClient, DevicePricingTiers) {
  'use strict';

  /**
   * The DevicePricingTiersEnvelope model module.
   * @module model/DevicePricingTiersEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DevicePricingTiersEnvelope</code>.
   * 
   * @alias module:model/DevicePricingTiersEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DevicePricingTiersEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicePricingTiersEnvelope} obj Optional instance to populate.
   * @return {module:model/DevicePricingTiersEnvelope} The populated <code>DevicePricingTiersEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DevicePricingTiers.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * Data envelope
   * @member module:model/DevicePricingTiers data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
