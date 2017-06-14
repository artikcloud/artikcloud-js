(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceStatusPutData = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceStatusPutData model module.
   * @module model/DeviceStatusPutData
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceStatusPutData</code>.
   * 
   * @alias module:model/DeviceStatusPutData
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceStatusPutData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatusPutData} obj Optional instance to populate.
   * @return {module:model/DeviceStatusPutData} The populated <code>DeviceStatusPutData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('availability')) {
        obj['availability'] = ApiClient.convertToType(data['availability'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String availability
   */
  exports.prototype['availability'] = undefined;




  return exports;
}));
