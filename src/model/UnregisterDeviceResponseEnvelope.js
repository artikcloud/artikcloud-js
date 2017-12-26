(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './UnregisterDeviceResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnregisterDeviceResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.UnregisterDeviceResponseEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.UnregisterDeviceResponse);
  }
}(this, function(ApiClient, UnregisterDeviceResponse) {
  'use strict';

  /**
   * The UnregisterDeviceResponseEnvelope model module.
   * @module model/UnregisterDeviceResponseEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>UnregisterDeviceResponseEnvelope</code>.
   * 
   * @alias module:model/UnregisterDeviceResponseEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UnregisterDeviceResponseEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnregisterDeviceResponseEnvelope} obj Optional instance to populate.
   * @return {module:model/UnregisterDeviceResponseEnvelope} The populated <code>UnregisterDeviceResponseEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UnregisterDeviceResponse.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/UnregisterDeviceResponse data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
