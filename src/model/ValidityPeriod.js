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
    root.ArtikCloud.ValidityPeriod = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidityPeriod model module.
   * @module model/ValidityPeriod
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>ValidityPeriod</code>.
   * 
   * @alias module:model/ValidityPeriod
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ValidityPeriod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidityPeriod} obj Optional instance to populate.
   * @return {module:model/ValidityPeriod} The populated <code>ValidityPeriod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('notBefore')) {
        obj['notBefore'] = ApiClient.convertToType(data['notBefore'], 'Number');
      }
      if (data.hasOwnProperty('notAfter')) {
        obj['notAfter'] = ApiClient.convertToType(data['notAfter'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Not before
   * @member Number notBefore
   */
  exports.prototype['notBefore'] = undefined;

  /**
   * Not before
   * @member Number notAfter
   */
  exports.prototype['notAfter'] = undefined;




  return exports;
}));
