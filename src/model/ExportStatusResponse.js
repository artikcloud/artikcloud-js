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
    root.ArtikCloud.ExportStatusResponse = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExportStatusResponse model module.
   * @module model/ExportStatusResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportStatusResponse</code>.
   * Export Status Response.
   * @alias module:model/ExportStatusResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ExportStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportStatusResponse} obj Optional instance to populate.
   * @return {module:model/ExportStatusResponse} The populated <code>ExportStatusResponse</code> instance.
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
      if (data.hasOwnProperty('md5')) {
        obj['md5'] = ApiClient.convertToType(data['md5'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('ttl')) {
        obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
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
   * @member String md5
   */
  exports.prototype['md5'] = undefined;

  /**
   * Export status
   * @member String status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member String ttl
   */
  exports.prototype['ttl'] = undefined;




  return exports;
}));
