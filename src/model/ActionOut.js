(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActionDetailsArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionDetailsArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ActionOut = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ActionDetailsArray);
  }
}(this, function(ApiClient, ActionDetailsArray) {
  'use strict';

  /**
   * The ActionOut model module.
   * @module model/ActionOut
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>ActionOut</code>.
   * Action received in a WebSocket.
   * @alias module:model/ActionOut
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>ActionOut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionOut} obj Optional instance to populate.
   * @return {module:model/ActionOut} The populated <code>ActionOut</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ActionDetailsArray.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('cid')) {
        obj['cid'] = ApiClient.convertToType(data['cid'], 'String');
      }
      if (data.hasOwnProperty('ddid')) {
        obj['ddid'] = ApiClient.convertToType(data['ddid'], 'String');
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
   * @member module:model/ActionDetailsArray data
   */
  exports.prototype['data'] = undefined;

  /**
   * Confirmation ID.
   * @member String cid
   */
  exports.prototype['cid'] = undefined;

  /**
   * Destination Device ID.
   * @member String ddid
   */
  exports.prototype['ddid'] = undefined;

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
   * @default 'action'
   */
  exports.prototype['type'] = 'action';

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
