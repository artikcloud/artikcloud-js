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
    root.ArtikCloud.NormalizedMessage = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NormalizedMessage model module.
   * @module model/NormalizedMessage
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NormalizedMessage</code>.
   * Normalized Message
   * @alias module:model/NormalizedMessage
   * @class
   * @param cts(Number)
   * @param ts(Number)
   * @param mid(String)
   * @param sdid(String)
   * @param sdtid(String)
   * @param uid(String)
   * @param mv(Number)
   * @param data({String: Object})
   */
  var exports = function(cts, ts, mid, sdid, sdtid, uid, mv, data) {

    this['cts'] = cts;
    this['ts'] = ts;
    this['mid'] = mid;
    this['sdid'] = sdid;
    this['sdtid'] = sdtid;
    this['uid'] = uid;
    this['mv'] = mv;
    this['data'] = data;
  };

  /**
   * Constructs a <code>NormalizedMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NormalizedMessage} obj Optional instance to populate.
   * @return {module:model/NormalizedMessage} The populated <code>NormalizedMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cts')) {
        obj['cts'] = ApiClient.convertToType(data['cts'], 'Number');
      }
      if (data.hasOwnProperty('ts')) {
        obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
      }
      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('sdtid')) {
        obj['sdtid'] = ApiClient.convertToType(data['sdtid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('mv')) {
        obj['mv'] = ApiClient.convertToType(data['mv'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member Number cts
   */
  exports.prototype['cts'] = undefined;

  /**
   * @member Number ts
   */
  exports.prototype['ts'] = undefined;

  /**
   * @member String mid
   */
  exports.prototype['mid'] = undefined;

  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member String sdtid
   */
  exports.prototype['sdtid'] = undefined;

  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member Number mv
   */
  exports.prototype['mv'] = undefined;

  /**
   * @member Object.<String, Object> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
