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
    root.ArtikCloud.ActionIn = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ActionDetailsArray);
  }
}(this, function(ApiClient, ActionDetailsArray) {
  'use strict';

  /**
   * The ActionIn model module.
   * @module model/ActionIn
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ActionIn</code>.
   * Action sent to a WebSocket.
   * @alias module:model/ActionIn
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>ActionIn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionIn} obj Optional instance to populate.
   * @return {module:model/ActionIn} The populated <code>ActionIn</code> instance.
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




  return exports;
}));
