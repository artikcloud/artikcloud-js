(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActionArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.NormalizedAction = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ActionArray);
  }
}(this, function(ApiClient, ActionArray) {
  'use strict';

  /**
   * The NormalizedAction model module.
   * @module model/NormalizedAction
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NormalizedAction</code>.
   * Normalized Action
   * @alias module:model/NormalizedAction
   * @class
   * @param cts(Number)
   * @param ts(Number)
   * @param mid(String)
   * @param ddid(String)
   * @param ddtid(String)
   * @param uid(String)
   * @param mv(Number)
   * @param data(ActionArray)
   */
  var exports = function(cts, ts, mid, ddid, ddtid, uid, mv, data) {

    this['cts'] = cts;
    this['ts'] = ts;
    this['mid'] = mid;

    this['ddid'] = ddid;
    this['ddtid'] = ddtid;
    this['uid'] = uid;
    this['mv'] = mv;
    this['data'] = data;
  };

  /**
   * Constructs a <code>NormalizedAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NormalizedAction} obj Optional instance to populate.
   * @return {module:model/NormalizedAction} The populated <code>NormalizedAction</code> instance.
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
      if (data.hasOwnProperty('ddid')) {
        obj['ddid'] = ApiClient.convertToType(data['ddid'], 'String');
      }
      if (data.hasOwnProperty('ddtid')) {
        obj['ddtid'] = ApiClient.convertToType(data['ddtid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('mv')) {
        obj['mv'] = ApiClient.convertToType(data['mv'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ActionArray.constructFromObject(data['data']);
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
   * @member String ddid
   */
  exports.prototype['ddid'] = undefined;

  /**
   * @member String ddtid
   */
  exports.prototype['ddtid'] = undefined;

  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member Number mv
   */
  exports.prototype['mv'] = undefined;

  /**
   * @member module:model/ActionArray data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
