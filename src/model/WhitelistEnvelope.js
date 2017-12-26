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
    root.ArtikCloud.WhitelistEnvelope = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WhitelistEnvelope model module.
   * @module model/WhitelistEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>WhitelistEnvelope</code>.
   * 
   * @alias module:model/WhitelistEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>WhitelistEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhitelistEnvelope} obj Optional instance to populate.
   * @return {module:model/WhitelistEnvelope} The populated <code>WhitelistEnvelope</code> instance.
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
