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
    root.ArtikCloud.DeviceArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Device);
  }
}(this, function(ApiClient, Device) {
  'use strict';

  /**
   * The DeviceArray model module.
   * @module model/DeviceArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceArray</code>.
   * Holds an array of Devices
   * @alias module:model/DeviceArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceArray} obj Optional instance to populate.
   * @return {module:model/DeviceArray} The populated <code>DeviceArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('devices')) {
        obj['devices'] = ApiClient.convertToType(data['devices'], [Device]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/Device> devices
   */
  exports.prototype['devices'] = undefined;




  return exports;
}));
