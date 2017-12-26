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
    root.ArtikCloud.ContactInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContactInfo model module.
   * @module model/ContactInfo
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>ContactInfo</code>.
   * 
   * @alias module:model/ContactInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ContactInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactInfo} obj Optional instance to populate.
   * @return {module:model/ContactInfo} The populated <code>ContactInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }


  /**
   * phone
   * @member String phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * email
   * @member String email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
