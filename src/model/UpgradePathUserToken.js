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
    root.ArtikCloud.UpgradePathUserToken = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpgradePathUserToken model module.
   * @module model/UpgradePathUserToken
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>UpgradePathUserToken</code>.
   * 
   * @alias module:model/UpgradePathUserToken
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>UpgradePathUserToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpgradePathUserToken} obj Optional instance to populate.
   * @return {module:model/UpgradePathUserToken} The populated <code>UpgradePathUserToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
    }
    return obj;
  }


  /**
   * User ID
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * User token from initial upgrade path request
   * @member String accessToken
   */
  exports.prototype['accessToken'] = undefined;

  /**
   * Device ID
   * @member String did
   */
  exports.prototype['did'] = undefined;




  return exports;
}));
