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
    root.ArtikCloud.UploadIdEnvelope = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UploadIdEnvelope model module.
   * @module model/UploadIdEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>UploadIdEnvelope</code>.
   * 
   * @alias module:model/UploadIdEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UploadIdEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadIdEnvelope} obj Optional instance to populate.
   * @return {module:model/UploadIdEnvelope} The populated <code>UploadIdEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('uploadId')) {
        obj['uploadId'] = ApiClient.convertToType(data['uploadId'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id identifying the uploaded CSV.
   * @member String uploadId
   */
  exports.prototype['uploadId'] = undefined;




  return exports;
}));
