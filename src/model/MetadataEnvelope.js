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
    root.ArtikCloud.MetadataEnvelope = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MetadataEnvelope model module.
   * @module model/MetadataEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>MetadataEnvelope</code>.
   * 
   * @alias module:model/MetadataEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>MetadataEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataEnvelope} obj Optional instance to populate.
   * @return {module:model/MetadataEnvelope} The populated <code>MetadataEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * Free form JSON object
   * @member Object.<String, Object> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
