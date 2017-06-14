(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ExportRequestData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExportRequestData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ExportRequestResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ExportRequestData);
  }
}(this, function(ApiClient, ExportRequestData) {
  'use strict';

  /**
   * The ExportRequestResponse model module.
   * @module model/ExportRequestResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ExportRequestResponse</code>.
   * Export Request Response.
   * @alias module:model/ExportRequestResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ExportRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportRequestResponse} obj Optional instance to populate.
   * @return {module:model/ExportRequestResponse} The populated <code>ExportRequestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ExportRequestData.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/ExportRequestData data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
