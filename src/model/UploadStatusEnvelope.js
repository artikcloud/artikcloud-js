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
    root.ArtikCloud.UploadStatusEnvelope = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UploadStatusEnvelope model module.
   * @module model/UploadStatusEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>UploadStatusEnvelope</code>.
   * 
   * @alias module:model/UploadStatusEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UploadStatusEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadStatusEnvelope} obj Optional instance to populate.
   * @return {module:model/UploadStatusEnvelope} The populated <code>UploadStatusEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * The uploaded CSV status, like 'Processing', 'Completed' or 'Failed'
   * @member String status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
