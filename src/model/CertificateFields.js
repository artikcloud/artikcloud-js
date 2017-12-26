(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ValidityPeriod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidityPeriod'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.CertificateFields = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ValidityPeriod);
  }
}(this, function(ApiClient, ValidityPeriod) {
  'use strict';

  /**
   * The CertificateFields model module.
   * @module model/CertificateFields
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>CertificateFields</code>.
   * 
   * @alias module:model/CertificateFields
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>CertificateFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertificateFields} obj Optional instance to populate.
   * @return {module:model/CertificateFields} The populated <code>CertificateFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('serialNumber')) {
        obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
      }
      if (data.hasOwnProperty('signatureAlgorithm')) {
        obj['signatureAlgorithm'] = ApiClient.convertToType(data['signatureAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
      }
      if (data.hasOwnProperty('validity')) {
        obj['validity'] = ValidityPeriod.constructFromObject(data['validity']);
      }
    }
    return obj;
  }


  /**
   * version
   * @member Number version
   */
  exports.prototype['version'] = undefined;

  /**
   * serialNumber
   * @member String serialNumber
   */
  exports.prototype['serialNumber'] = undefined;

  /**
   * signatureAlgorithm
   * @member String signatureAlgorithm
   */
  exports.prototype['signatureAlgorithm'] = undefined;

  /**
   * subject
   * @member String subject
   */
  exports.prototype['subject'] = undefined;

  /**
   * issuer
   * @member String issuer
   */
  exports.prototype['issuer'] = undefined;

  /**
   * @member module:model/ValidityPeriod validity
   */
  exports.prototype['validity'] = undefined;




  return exports;
}));
