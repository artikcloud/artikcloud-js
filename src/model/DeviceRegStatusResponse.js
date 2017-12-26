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
    root.ArtikCloud.DeviceRegStatusResponse = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceRegStatusResponse model module.
   * @module model/DeviceRegStatusResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceRegStatusResponse</code>.
   * 
   * @alias module:model/DeviceRegStatusResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DeviceRegStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceRegStatusResponse} obj Optional instance to populate.
   * @return {module:model/DeviceRegStatusResponse} The populated <code>DeviceRegStatusResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * The created or existing device id.
   * @member String did
   */
  exports.prototype['did'] = undefined;

  /**
   * Status of the ongoing device registration request.
   * @member String status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
