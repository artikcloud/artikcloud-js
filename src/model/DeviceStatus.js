(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceStatusData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceStatusData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceStatus = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceStatusData);
  }
}(this, function(ApiClient, DeviceStatusData) {
  'use strict';

  /**
   * The DeviceStatus model module.
   * @module model/DeviceStatus
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceStatus</code>.
   * 
   * @alias module:model/DeviceStatus
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DeviceStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatus} obj Optional instance to populate.
   * @return {module:model/DeviceStatus} The populated <code>DeviceStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceStatusData.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceStatusData data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member String did
   */
  exports.prototype['did'] = undefined;




  return exports;
}));
