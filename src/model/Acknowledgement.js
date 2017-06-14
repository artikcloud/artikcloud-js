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
    root.ArtikCloud.Acknowledgement = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Acknowledgement model module.
   * @module model/Acknowledgement
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>Acknowledgement</code>.
   * Acknowledgement received by a WebSocket in response to a RegisterMessage, MessageIn or ActionIn.
   * @alias module:model/Acknowledgement
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>Acknowledgement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Acknowledgement} obj Optional instance to populate.
   * @return {module:model/Acknowledgement} The populated <code>Acknowledgement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
      if (data.hasOwnProperty('cid')) {
        obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
    }
    return obj;
  }


  /**
   * Message ID.
   * @member String mid
   */
  exports.prototype['mid'] = undefined;

  /**
   * Confirmation ID.
   * @member String cid
   */
  exports.prototype['cid'] = undefined;

  /**
   * Message.
   * @member String message
   */
  exports.prototype['message'] = undefined;

  /**
   * Code
   * @member String code
   */
  exports.prototype['code'] = undefined;




  return exports;
}));
