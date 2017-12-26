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
    root.ArtikCloud.DeviceToken = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceToken model module.
   * @module model/DeviceToken
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceToken</code>.
   * Device Token
   * @alias module:model/DeviceToken
   * @class
   * @param accessToken(String)
   * @param uid(String)
   * @param did(String)
   * @param cid(String)
   */
  var exports = function(accessToken, uid, did, cid) {

    this['accessToken'] = accessToken;
    this['uid'] = uid;
    this['did'] = did;
    this['cid'] = cid;
  };

  /**
   * Constructs a <code>DeviceToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceToken} obj Optional instance to populate.
   * @return {module:model/DeviceToken} The populated <code>DeviceToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
      if (data.hasOwnProperty('cid')) {
        obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String accessToken
   */
  exports.prototype['accessToken'] = undefined;

  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member String did
   */
  exports.prototype['did'] = undefined;

  /**
   * @member String cid
   */
  exports.prototype['cid'] = undefined;




  return exports;
}));
