(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NormalizedAction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NormalizedAction'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.NormalizedActionsEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.NormalizedAction);
  }
}(this, function(ApiClient, NormalizedAction) {
  'use strict';

  /**
   * The NormalizedActionsEnvelope model module.
   * @module model/NormalizedActionsEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NormalizedActionsEnvelope</code>.
   * Normalized Actions Envelope
   * @alias module:model/NormalizedActionsEnvelope
   * @class
   * @param count(Number)
   * @param size(Number)
   * @param data([NormalizedAction])
   */
  var exports = function(count, size, data) {








    this['count'] = count;
    this['size'] = size;
    this['data'] = data;
  };

  /**
   * Constructs a <code>NormalizedActionsEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NormalizedActionsEnvelope} obj Optional instance to populate.
   * @return {module:model/NormalizedActionsEnvelope} The populated <code>NormalizedActionsEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ddids')) {
        obj['ddids'] = ApiClient.convertToType(data['ddids'], 'String');
      }
      if (data.hasOwnProperty('ddid')) {
        obj['ddid'] = ApiClient.convertToType(data['ddid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Number');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Number');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [NormalizedAction]);
      }
    }
    return obj;
  }


  /**
   * @member String ddids
   */
  exports.prototype['ddids'] = undefined;

  /**
   * @member String ddid
   */
  exports.prototype['ddid'] = undefined;

  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * @member Number endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member String order
   */
  exports.prototype['order'] = undefined;

  /**
   * @member String next
   */
  exports.prototype['next'] = undefined;

  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member Number size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member Array.<module:model/NormalizedAction> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
