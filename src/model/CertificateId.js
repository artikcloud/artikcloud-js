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
    root.ArtikCloud.CertificateId = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CertificateId model module.
   * @module model/CertificateId
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>CertificateId</code>.
   * 
   * @alias module:model/CertificateId
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CertificateId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertificateId} obj Optional instance to populate.
   * @return {module:model/CertificateId} The populated <code>CertificateId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('stringId')) {
        obj['stringId'] = ApiClient.convertToType(data['stringId'], 'String');
      }
    }
    return obj;
  }


  /**
   * Certificate id
   * @member String stringId
   */
  exports.prototype['stringId'] = undefined;




  return exports;
}));
