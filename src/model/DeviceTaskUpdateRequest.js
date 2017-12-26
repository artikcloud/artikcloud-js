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
    root.ArtikCloud.DeviceTaskUpdateRequest = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceTaskUpdateRequest model module.
   * @module model/DeviceTaskUpdateRequest
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTaskUpdateRequest</code>.
   * 
   * @alias module:model/DeviceTaskUpdateRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTaskUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTaskUpdateRequest} obj Optional instance to populate.
   * @return {module:model/DeviceTaskUpdateRequest} The populated <code>DeviceTaskUpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * Status
   * @member String status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
