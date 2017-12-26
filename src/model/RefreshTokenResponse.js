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
    root.ArtikCloud.RefreshTokenResponse = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RefreshTokenResponse model module.
   * @module model/RefreshTokenResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RefreshTokenResponse</code>.
   * 
   * @alias module:model/RefreshTokenResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>RefreshTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefreshTokenResponse} obj Optional instance to populate.
   * @return {module:model/RefreshTokenResponse} The populated <code>RefreshTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String access_token
   */
  exports.prototype['access_token'] = undefined;

  /**
   * @member Number expires_in
   */
  exports.prototype['expires_in'] = undefined;

  /**
   * @member String refresh_token
   */
  exports.prototype['refresh_token'] = undefined;

  /**
   * @member String token_type
   */
  exports.prototype['token_type'] = undefined;




  return exports;
}));
