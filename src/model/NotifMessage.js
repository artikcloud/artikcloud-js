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
    root.ArtikCloud.NotifMessage = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotifMessage model module.
   * @module model/NotifMessage
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NotifMessage</code>.
   * 
   * @alias module:model/NotifMessage
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>NotifMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotifMessage} obj Optional instance to populate.
   * @return {module:model/NotifMessage} The populated <code>NotifMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('cts')) {
        obj['cts'] = ApiClient.convertToType(data['cts'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
      }
      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('mv')) {
        obj['mv'] = ApiClient.convertToType(data['mv'], 'String');
      }
      if (data.hasOwnProperty('sdtid')) {
        obj['sdtid'] = ApiClient.convertToType(data['sdtid'], 'String');
      }
      if (data.hasOwnProperty('ts')) {
        obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member Number cts
   */
  exports.prototype['cts'] = undefined;

  /**
   * @member Object.<String, Object> data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member String mid
   */
  exports.prototype['mid'] = undefined;

  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member String mv
   */
  exports.prototype['mv'] = undefined;

  /**
   * @member String sdtid
   */
  exports.prototype['sdtid'] = undefined;

  /**
   * @member Number ts
   */
  exports.prototype['ts'] = undefined;




  return exports;
}));
