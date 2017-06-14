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
    root.ArtikCloud.TokenInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TokenInfo model module.
   * @module model/TokenInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TokenInfo</code>.
   * 
   * @alias module:model/TokenInfo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TokenInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenInfo} obj Optional instance to populate.
   * @return {module:model/TokenInfo} The populated <code>TokenInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('device_id')) {
        obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String client_id
   */
  exports.prototype['client_id'] = undefined;

  /**
   * @member String device_id
   */
  exports.prototype['device_id'] = undefined;

  /**
   * @member Number expires_in
   */
  exports.prototype['expires_in'] = undefined;

  /**
   * @member String user_id
   */
  exports.prototype['user_id'] = undefined;




  return exports;
}));
