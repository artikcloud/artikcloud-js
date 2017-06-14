(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceStatusPutData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceStatusPutData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceStatusPut = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceStatusPutData);
  }
}(this, function(ApiClient, DeviceStatusPutData) {
  'use strict';

  /**
   * The DeviceStatusPut model module.
   * @module model/DeviceStatusPut
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceStatusPut</code>.
   * 
   * @alias module:model/DeviceStatusPut
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceStatusPut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatusPut} obj Optional instance to populate.
   * @return {module:model/DeviceStatusPut} The populated <code>DeviceStatusPut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceStatusPutData.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceStatusPutData data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
