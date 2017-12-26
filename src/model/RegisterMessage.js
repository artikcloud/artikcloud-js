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
    root.ArtikCloud.RegisterMessage = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RegisterMessage model module.
   * @module model/RegisterMessage
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RegisterMessage</code>.
   * WebSocket Registration Message
   * @alias module:model/RegisterMessage
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>RegisterMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegisterMessage} obj Optional instance to populate.
   * @return {module:model/RegisterMessage} The populated <code>RegisterMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cid')) {
        obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
      }
      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('ts')) {
        obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }


  /**
   * Confirmation ID.
   * @member String cid
   */
  exports.prototype['cid'] = undefined;

  /**
   * Authorization header containing access token (Bearer <access_token>).
   * @member String authorization
   */
  exports.prototype['authorization'] = undefined;

  /**
   * Source Device ID.
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * Timestamp (past, present or future). Defaults to current time if not provided.
   * @member Number ts
   */
  exports.prototype['ts'] = undefined;

  /**
   * Type.
   * @member String type
   * @default 'register'
   */
  exports.prototype['type'] = 'register';




  return exports;
}));
