(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RejectedCSVRow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RejectedCSVRow'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.RejectedCSVRowsEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.RejectedCSVRow);
  }
}(this, function(ApiClient, RejectedCSVRow) {
  'use strict';

  /**
   * The RejectedCSVRowsEnvelope model module.
   * @module model/RejectedCSVRowsEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>RejectedCSVRowsEnvelope</code>.
   * 
   * @alias module:model/RejectedCSVRowsEnvelope
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>RejectedCSVRowsEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RejectedCSVRowsEnvelope} obj Optional instance to populate.
   * @return {module:model/RejectedCSVRowsEnvelope} The populated <code>RejectedCSVRowsEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [RejectedCSVRow]);
      }
    }
    return obj;
  }


  /**
   * Page starting position
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * Page size
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * Total number or rejected rows
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * Array of rejected rows
   * @member Array.<module:model/RejectedCSVRow> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
