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
    root.ArtikCloud.DeviceShareInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceShareInfo model module.
   * @module model/DeviceShareInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceShareInfo</code>.
   * 
   * @alias module:model/DeviceShareInfo
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceShareInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceShareInfo} obj Optional instance to populate.
   * @return {module:model/DeviceShareInfo} The populated <code>DeviceShareInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }


  /**
   * User email
   * @member String email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
