(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ExportData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExportData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ExportDataArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ExportData);
  }
}(this, function(ApiClient, ExportData) {
  'use strict';

  /**
   * The ExportDataArray model module.
   * @module model/ExportDataArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportDataArray</code>.
   * Export Data Array.
   * @alias module:model/ExportDataArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ExportDataArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportDataArray} obj Optional instance to populate.
   * @return {module:model/ExportDataArray} The populated <code>ExportDataArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('exports')) {
        obj['exports'] = ApiClient.convertToType(data['exports'], [ExportData]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/ExportData> exports
   */
  exports.prototype['exports'] = undefined;




  return exports;
}));
