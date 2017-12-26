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
    root.ArtikCloud.ExportNormalizedMessagesResponse = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExportNormalizedMessagesResponse model module.
   * @module model/ExportNormalizedMessagesResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportNormalizedMessagesResponse</code>.
   * Export Normalized Messages Response.
   * @alias module:model/ExportNormalizedMessagesResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>ExportNormalizedMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportNormalizedMessagesResponse} obj Optional instance to populate.
   * @return {module:model/ExportNormalizedMessagesResponse} The populated <code>ExportNormalizedMessagesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('csvHeaders')) {
        obj['csvHeaders'] = ApiClient.convertToType(data['csvHeaders'], 'Boolean');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Number');
      }
      if (data.hasOwnProperty('exportId')) {
        obj['exportId'] = ApiClient.convertToType(data['exportId'], 'String');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('sdids')) {
        obj['sdids'] = ApiClient.convertToType(data['sdids'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Number');
      }
      if (data.hasOwnProperty('stdids')) {
        obj['stdids'] = ApiClient.convertToType(data['stdids'], 'String');
      }
      if (data.hasOwnProperty('trialId')) {
        obj['trialId'] = ApiClient.convertToType(data['trialId'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('uids')) {
        obj['uids'] = ApiClient.convertToType(data['uids'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member Boolean csvHeaders
   */
  exports.prototype['csvHeaders'] = undefined;

  /**
   * @member Number endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member String exportId
   */
  exports.prototype['exportId'] = undefined;

  /**
   * @member String format
   */
  exports.prototype['format'] = undefined;

  /**
   * @member String order
   */
  exports.prototype['order'] = undefined;

  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member String sdids
   */
  exports.prototype['sdids'] = undefined;

  /**
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * @member String stdids
   */
  exports.prototype['stdids'] = undefined;

  /**
   * @member String trialId
   */
  exports.prototype['trialId'] = undefined;

  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member String uids
   */
  exports.prototype['uids'] = undefined;

  /**
   * @member String url
   */
  exports.prototype['url'] = undefined;




  return exports;
}));
