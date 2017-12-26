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
    root.ArtikCloud.DeviceTypeUpdateInput = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceTypeUpdateInput model module.
   * @module model/DeviceTypeUpdateInput
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DeviceTypeUpdateInput</code>.
   * 
   * @alias module:model/DeviceTypeUpdateInput
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTypeUpdateInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypeUpdateInput} obj Optional instance to populate.
   * @return {module:model/DeviceTypeUpdateInput} The populated <code>DeviceTypeUpdateInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('enableWhitelist')) {
        obj['enableWhitelist'] = ApiClient.convertToType(data['enableWhitelist'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * enable whitelist flag
   * @member Boolean enableWhitelist
   */
  exports.prototype['enableWhitelist'] = undefined;




  return exports;
}));
