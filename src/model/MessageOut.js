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
    root.ArtikCloud.MessageOut = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MessageOut model module.
   * @module model/MessageOut
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>MessageOut</code>.
   * Message received by a WebSocket.
   * @alias module:model/MessageOut
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>MessageOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageOut} obj Optional instance to populate.
   * @return {module:model/MessageOut} The populated <code>MessageOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('sdtid')) {
        obj['sdtid'] = ApiClient.convertToType(data['sdtid'], 'String');
      }
      if (data.hasOwnProperty('cts')) {
        obj['cts'] = ApiClient.convertToType(data['cts'], 'Number');
      }
      if (data.hasOwnProperty('mv')) {
        obj['mv'] = ApiClient.convertToType(data['mv'], 'Number');
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
   * User ID.
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * Source Device Type ID.
   * @member String sdtid
   */
  exports.prototype['sdtid'] = undefined;

  /**
   * Created Timestamp (past, present or future). Defaults to current time if not provided.
   * @member Number cts
   */
  exports.prototype['cts'] = undefined;

  /**
   * Manifest Version.
   * @member Number mv
   */
  exports.prototype['mv'] = undefined;




  return exports;
}));
