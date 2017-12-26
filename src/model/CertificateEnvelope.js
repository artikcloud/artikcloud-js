(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CertificateData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CertificateData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.CertificateEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.CertificateData);
  }
}(this, function(ApiClient, CertificateData) {
  'use strict';

  /**
   * The CertificateEnvelope model module.
   * @module model/CertificateEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>CertificateEnvelope</code>.
   * 
   * @alias module:model/CertificateEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CertificateEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertificateEnvelope} obj Optional instance to populate.
   * @return {module:model/CertificateEnvelope} The populated <code>CertificateEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = CertificateData.constructFromObject(data['id']);
      }
    }
    return obj;
  }


  /**
   * Output Certificate Data
   * @member module:model/CertificateData id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
