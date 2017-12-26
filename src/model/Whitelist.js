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
    root.ArtikCloud.Whitelist = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Whitelist model module.
   * @module model/Whitelist
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>Whitelist</code>.
   * 
   * @alias module:model/Whitelist
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Whitelist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Whitelist} obj Optional instance to populate.
   * @return {module:model/Whitelist} The populated <code>Whitelist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('vdid')) {
        obj['vdid'] = ApiClient.convertToType(data['vdid'], 'String');
      }
      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
      if (data.hasOwnProperty('uploadedOn')) {
        obj['uploadedOn'] = ApiClient.convertToType(data['uploadedOn'], 'Number');
      }
    }
    return obj;
  }


  /**
   * VendorDeviceId
   * @member String vdid
   */
  exports.prototype['vdid'] = undefined;

  /**
   * Device ID
   * @member String did
   */
  exports.prototype['did'] = undefined;

  /**
   * Uploaded on
   * @member Number uploadedOn
   */
  exports.prototype['uploadedOn'] = undefined;




  return exports;
}));
