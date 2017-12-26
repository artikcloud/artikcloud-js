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
    root.ArtikCloud.ExportRequest = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExportRequest model module.
   * @module model/ExportRequest
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportRequest</code>.
   * Export Request.
   * @alias module:model/ExportRequest
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ExportRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportRequest} obj Optional instance to populate.
   * @return {module:model/ExportRequest} The populated <code>ExportRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
    }
    return obj;
  }


  /**
   * @member Number endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member String format
   */
  exports.prototype['format'] = undefined;

  /**
   * @member String order
   */
  exports.prototype['order'] = undefined;

  /**
   * @member String sdids
   */
  exports.prototype['sdids'] = undefined;

  /**
   * @member String sdtids
   */
  exports.prototype['sdtids'] = undefined;

  /**
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * @member String trialId
   */
  exports.prototype['trialId'] = undefined;

  /**
   * @member String uids
   */
  exports.prototype['uids'] = undefined;




  return exports;
}));
