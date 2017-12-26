(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ExportDataArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExportDataArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ExportHistoryResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ExportDataArray);
  }
}(this, function(ApiClient, ExportDataArray) {
  'use strict';

  /**
   * The ExportHistoryResponse model module.
   * @module model/ExportHistoryResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportHistoryResponse</code>.
   * Export History Response.
   * @alias module:model/ExportHistoryResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ExportHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportHistoryResponse} obj Optional instance to populate.
   * @return {module:model/ExportHistoryResponse} The populated <code>ExportHistoryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ExportDataArray.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member module:model/ExportDataArray data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member Number total
   */
  exports.prototype['total'] = undefined;




  return exports;
}));
