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
    root.ArtikCloud.DeviceTypeArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceType);
  }
}(this, function(ApiClient, DeviceType) {
  'use strict';

  /**
   * The DeviceTypeArray model module.
   * @module model/DeviceTypeArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTypeArray</code>.
   * Holds an array of DeviceTypes
   * @alias module:model/DeviceTypeArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTypeArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypeArray} obj Optional instance to populate.
   * @return {module:model/DeviceTypeArray} The populated <code>DeviceTypeArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceTypes')) {
        obj['deviceTypes'] = ApiClient.convertToType(data['deviceTypes'], [DeviceType]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/DeviceType> deviceTypes
   */
  exports.prototype['deviceTypes'] = undefined;




  return exports;
}));
