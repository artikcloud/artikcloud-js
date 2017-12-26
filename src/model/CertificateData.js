(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CertificateFields', './CertificateId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CertificateFields'), require('./CertificateId'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.CertificateData = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.CertificateFields, root.ArtikCloud.CertificateId);
  }
}(this, function(ApiClient, CertificateFields, CertificateId) {
  'use strict';

  /**
   * The CertificateData model module.
   * @module model/CertificateData
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>CertificateData</code>.
   * 
   * @alias module:model/CertificateData
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CertificateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertificateData} obj Optional instance to populate.
   * @return {module:model/CertificateData} The populated <code>CertificateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = CertificateId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('certificateFields')) {
        obj['certificateFields'] = CertificateFields.constructFromObject(data['certificateFields']);
      }
    }
    return obj;
  }


  /**
   * certificate id
   * @member module:model/CertificateId id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member module:model/CertificateFields certificateFields
   */
  exports.prototype['certificateFields'] = undefined;




  return exports;
}));
