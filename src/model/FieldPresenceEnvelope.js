(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FieldPresence'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldPresence'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.FieldPresenceEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.FieldPresence);
  }
}(this, function(ApiClient, FieldPresence) {
  'use strict';

  /**
   * The FieldPresenceEnvelope model module.
   * @module model/FieldPresenceEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>FieldPresenceEnvelope</code>.
   * Field Presence Envelope
   * @alias module:model/FieldPresenceEnvelope
   * @class
   * @param sdid(String)
   * @param fieldPresence(String)
   * @param startDate(Number)
   * @param endDate(Number)
   * @param interval(String)
   * @param size(Number)
   * @param data([FieldPresence])
   */
  var exports = function(sdid, fieldPresence, startDate, endDate, interval, size, data) {

    this['sdid'] = sdid;
    this['fieldPresence'] = fieldPresence;
    this['startDate'] = startDate;
    this['endDate'] = endDate;
    this['interval'] = interval;
    this['size'] = size;
    this['data'] = data;
  };

  /**
   * Constructs a <code>FieldPresenceEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldPresenceEnvelope} obj Optional instance to populate.
   * @return {module:model/FieldPresenceEnvelope} The populated <code>FieldPresenceEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('fieldPresence')) {
        obj['fieldPresence'] = ApiClient.convertToType(data['fieldPresence'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Number');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Number');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [FieldPresence]);
      }
    }
    return obj;
  }


  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member String fieldPresence
   */
  exports.prototype['fieldPresence'] = undefined;

  /**
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * @member Number endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member String interval
   */
  exports.prototype['interval'] = undefined;

  /**
   * @member Number size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member Array.<module:model/FieldPresence> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
