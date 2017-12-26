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
    root.ArtikCloud.DeviceRegConfirmUserRequest = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceRegConfirmUserRequest model module.
   * @module model/DeviceRegConfirmUserRequest
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceRegConfirmUserRequest</code>.
   * 
   * @alias module:model/DeviceRegConfirmUserRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DeviceRegConfirmUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceRegConfirmUserRequest} obj Optional instance to populate.
   * @return {module:model/DeviceRegConfirmUserRequest} The populated <code>DeviceRegConfirmUserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
      if (data.hasOwnProperty('pin')) {
        obj['pin'] = ApiClient.convertToType(data['pin'], 'String');
      }
    }
    return obj;
  }


  /**
   * Device ID. Optional if deviceName is present
   * @member String deviceId
   */
  exports.prototype['deviceId'] = undefined;

  /**
   * Device Name. Optional if deviceId is present
   * @member String deviceName
   */
  exports.prototype['deviceName'] = undefined;

  /**
   * Pin obtained in the registrations call.
   * @member String pin
   */
  exports.prototype['pin'] = undefined;




  return exports;
}));
