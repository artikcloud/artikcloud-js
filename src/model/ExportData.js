(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ExportRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExportRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ExportData = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ExportRequest);
  }
}(this, function(ApiClient, ExportRequest) {
  'use strict';

  /**
   * The ExportData model module.
   * @module model/ExportData
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportData</code>.
   * Export Data.
   * @alias module:model/ExportData
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>ExportData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportData} obj Optional instance to populate.
   * @return {module:model/ExportData} The populated <code>ExportData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Number');
      }
      if (data.hasOwnProperty('exportId')) {
        obj['exportId'] = ApiClient.convertToType(data['exportId'], 'String');
      }
      if (data.hasOwnProperty('fileSize')) {
        obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
      }
      if (data.hasOwnProperty('md5')) {
        obj['md5'] = ApiClient.convertToType(data['md5'], 'String');
      }
      if (data.hasOwnProperty('request')) {
        obj['request'] = ExportRequest.constructFromObject(data['request']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('totalMessages')) {
        obj['totalMessages'] = ApiClient.convertToType(data['totalMessages'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Number expirationDate
   */
  exports.prototype['expirationDate'] = undefined;

  /**
   * @member String exportId
   */
  exports.prototype['exportId'] = undefined;

  /**
   * @member Number fileSize
   */
  exports.prototype['fileSize'] = undefined;

  /**
   * @member String md5
   */
  exports.prototype['md5'] = undefined;

  /**
   * @member module:model/ExportRequest request
   */
  exports.prototype['request'] = undefined;

  /**
   * Export status
   * @member String status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member Number totalMessages
   */
  exports.prototype['totalMessages'] = undefined;




  return exports;
}));
