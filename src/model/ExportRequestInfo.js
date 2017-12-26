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
    root.ArtikCloud.ExportRequestInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExportRequestInfo model module.
   * @module model/ExportRequestInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportRequestInfo</code>.
   * Export Request Info.
   * @alias module:model/ExportRequestInfo
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>ExportRequestInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportRequestInfo} obj Optional instance to populate.
   * @return {module:model/ExportRequestInfo} The populated <code>ExportRequestInfo</code> instance.
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
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('sdids')) {
        obj['sdids'] = ApiClient.convertToType(data['sdids'], 'String');
      }
      if (data.hasOwnProperty('sdtids')) {
        obj['sdtids'] = ApiClient.convertToType(data['sdtids'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Number');
      }
      if (data.hasOwnProperty('trialId')) {
        obj['trialId'] = ApiClient.convertToType(data['trialId'], 'String');
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
   * Add header to csv format
   * @member Boolean csvHeaders
   */
  exports.prototype['csvHeaders'] = undefined;

  /**
   * Timestamp of latest message (in milliseconds since epoch).
   * @member Number endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * Format of the export.
   * @member String format
   */
  exports.prototype['format'] = undefined;

  /**
   * Ascending or descending sort order.
   * @member String order
   */
  exports.prototype['order'] = undefined;

  /**
   * Source Device IDs being searched for messages (Comma-separated for multiple Device IDs).
   * @member String sdids
   */
  exports.prototype['sdids'] = undefined;

  /**
   * Source Device Type IDs being searched for messages (Comma-separated for multiple Device Type IDs).
   * @member String sdtids
   */
  exports.prototype['sdtids'] = undefined;

  /**
   * Timestamp of earliest message (in milliseconds since epoch).
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * Trial ID being searched for messages.
   * @member String trialId
   */
  exports.prototype['trialId'] = undefined;

  /**
   * Owner's user IDs being searched for messages (Comma-separated for multiple User IDs).
   * @member String uids
   */
  exports.prototype['uids'] = undefined;

  /**
   * URL added to successful email message.
   * @member String url
   */
  exports.prototype['url'] = undefined;




  return exports;
}));
