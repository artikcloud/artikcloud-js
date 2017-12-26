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
    root.ArtikCloud.DeviceRegConfirmUserResponse = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceRegConfirmUserResponse model module.
   * @module model/DeviceRegConfirmUserResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceRegConfirmUserResponse</code>.
   * 
   * @alias module:model/DeviceRegConfirmUserResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceRegConfirmUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceRegConfirmUserResponse} obj Optional instance to populate.
   * @return {module:model/DeviceRegConfirmUserResponse} The populated <code>DeviceRegConfirmUserResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('rid')) {
        obj['rid'] = ApiClient.convertToType(data['rid'], 'String');
      }
    }
    return obj;
  }


  /**
   * The registration request id.
   * @member String rid
   */
  exports.prototype['rid'] = undefined;




  return exports;
}));
