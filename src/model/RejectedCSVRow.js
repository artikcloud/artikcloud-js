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
    root.ArtikCloud.RejectedCSVRow = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RejectedCSVRow model module.
   * @module model/RejectedCSVRow
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>RejectedCSVRow</code>.
   * 
   * @alias module:model/RejectedCSVRow
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RejectedCSVRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RejectedCSVRow} obj Optional instance to populate.
   * @return {module:model/RejectedCSVRow} The populated <code>RejectedCSVRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * Rejection message
   * @member String message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));
