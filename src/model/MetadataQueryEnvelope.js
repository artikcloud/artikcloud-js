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
    root.ArtikCloud.MetadataQueryEnvelope = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MetadataQueryEnvelope model module.
   * @module model/MetadataQueryEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>MetadataQueryEnvelope</code>.
   * 
   * @alias module:model/MetadataQueryEnvelope
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>MetadataQueryEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataQueryEnvelope} obj Optional instance to populate.
   * @return {module:model/MetadataQueryEnvelope} The populated <code>MetadataQueryEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Number of results found
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * Array of objects with device's metadata
   * @member Object.<String, Object> data
   */
  exports.prototype['data'] = undefined;

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




  return exports;
}));
