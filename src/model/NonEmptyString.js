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
    root.ArtikCloud.NonEmptyString = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NonEmptyString model module.
   * @module model/NonEmptyString
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NonEmptyString</code>.
   * 
   * @alias module:model/NonEmptyString
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NonEmptyString</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NonEmptyString} obj Optional instance to populate.
   * @return {module:model/NonEmptyString} The populated <code>NonEmptyString</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String text
   */
  exports.prototype['text'] = undefined;




  return exports;
}));
