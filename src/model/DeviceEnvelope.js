(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Device'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Device'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Device);
  }
}(this, function(ApiClient, Device) {
  'use strict';

  /**
   * The DeviceEnvelope model module.
   * @module model/DeviceEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceEnvelope</code>.
   * Device Envelope
   * @alias module:model/DeviceEnvelope
   * @class
   * @param data(Device)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>DeviceEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceEnvelope} The populated <code>DeviceEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Device.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/Device data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
