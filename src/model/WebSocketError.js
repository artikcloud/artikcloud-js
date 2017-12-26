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
    root.ArtikCloud.WebSocketError = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebSocketError model module.
   * @module model/WebSocketError
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>WebSocketError</code>.
   * WebSocket Error Information
   * @alias module:model/WebSocketError
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>WebSocketError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebSocketError} obj Optional instance to populate.
   * @return {module:model/WebSocketError} The populated <code>WebSocketError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('cid')) {
        obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
      }
    }
    return obj;
  }


  /**
   * Message.
   * @member String message
   */
  exports.prototype['message'] = undefined;

  /**
   * Code
   * @member Number code
   */
  exports.prototype['code'] = undefined;

  /**
   * Confirmation ID
   * @member String cid
   */
  exports.prototype['cid'] = undefined;




  return exports;
}));
