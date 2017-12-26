(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceTypePricingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceTypePricingList'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypePricingTiersEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceTypePricingList);
  }
}(this, function(ApiClient, DeviceTypePricingList) {
  'use strict';

  /**
   * The DeviceTypePricingTiersEnvelope model module.
   * @module model/DeviceTypePricingTiersEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DeviceTypePricingTiersEnvelope</code>.
   * 
   * @alias module:model/DeviceTypePricingTiersEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTypePricingTiersEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypePricingTiersEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceTypePricingTiersEnvelope} The populated <code>DeviceTypePricingTiersEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceTypePricingList.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * Data envelope
   * @member module:model/DeviceTypePricingList data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
