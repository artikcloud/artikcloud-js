(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceType'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypeEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceType);
  }
}(this, function(ApiClient, DeviceType) {
  'use strict';

  /**
   * The DeviceTypeEnvelope model module.
   * @module model/DeviceTypeEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTypeEnvelope</code>.
   * Device Type Envelope
   * @alias module:model/DeviceTypeEnvelope
   * @class
   * @param data(DeviceType)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>DeviceTypeEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypeEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceTypeEnvelope} The populated <code>DeviceTypeEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceType.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceType data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
