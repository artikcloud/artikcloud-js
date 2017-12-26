(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NonEmptyString'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NonEmptyString'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.FieldPath = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.NonEmptyString);
  }
}(this, function(ApiClient, NonEmptyString) {
  'use strict';

  /**
   * The FieldPath model module.
   * @module model/FieldPath
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>FieldPath</code>.
   * 
   * @alias module:model/FieldPath
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FieldPath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldPath} obj Optional instance to populate.
   * @return {module:model/FieldPath} The populated <code>FieldPath</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], [NonEmptyString]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/NonEmptyString> path
   */
  exports.prototype['path'] = undefined;




  return exports;
}));
