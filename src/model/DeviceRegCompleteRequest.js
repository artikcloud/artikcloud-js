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
    root.ArtikCloud.DeviceRegCompleteRequest = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceRegCompleteRequest model module.
   * @module model/DeviceRegCompleteRequest
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceRegCompleteRequest</code>.
   * 
   * @alias module:model/DeviceRegCompleteRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceRegCompleteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceRegCompleteRequest} obj Optional instance to populate.
   * @return {module:model/DeviceRegCompleteRequest} The populated <code>DeviceRegCompleteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nonce')) {
        obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
      }
    }
    return obj;
  }


  /**
   * Nonce obtained from the initial registration request.
   * @member String nonce
   */
  exports.prototype['nonce'] = undefined;




  return exports;
}));
