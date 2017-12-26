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
    root.ArtikCloud.UpdateParameters = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateParameters model module.
   * @module model/UpdateParameters
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>UpdateParameters</code>.
   * 
   * @alias module:model/UpdateParameters
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateParameters} obj Optional instance to populate.
   * @return {module:model/UpdateParameters} The populated <code>UpdateParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('updateId')) {
        obj['updateId'] = ApiClient.convertToType(data['updateId'], 'String');
      }
    }
    return obj;
  }


  /**
   * Update ID
   * @member String updateId
   */
  exports.prototype['updateId'] = undefined;




  return exports;
}));
