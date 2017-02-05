(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceTypeInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceTypeInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypeInfoEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceTypeInfo);
  }
}(this, function(ApiClient, DeviceTypeInfo) {
  'use strict';

  /**
   * The DeviceTypeInfoEnvelope model module.
   * @module model/DeviceTypeInfoEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTypeInfoEnvelope</code>.
   * 
   * @alias module:model/DeviceTypeInfoEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTypeInfoEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypeInfoEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceTypeInfoEnvelope} The populated <code>DeviceTypeInfoEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceTypeInfo.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceTypeInfo data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
