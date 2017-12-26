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
    root.ArtikCloud.FieldPresence = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FieldPresence model module.
   * @module model/FieldPresence
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>FieldPresence</code>.
   * Field Presence
   * @alias module:model/FieldPresence
   * @class
   * @param startDate(Number)
   */
  var exports = function(startDate) {

    this['startDate'] = startDate;
  };

  /**
   * Constructs a <code>FieldPresence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldPresence} obj Optional instance to populate.
   * @return {module:model/FieldPresence} The populated <code>FieldPresence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;




  return exports;
}));
