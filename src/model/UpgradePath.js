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
    root.ArtikCloud.UpgradePath = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpgradePath model module.
   * @module model/UpgradePath
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>UpgradePath</code>.
   * 
   * @alias module:model/UpgradePath
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UpgradePath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpgradePath} obj Optional instance to populate.
   * @return {module:model/UpgradePath} The populated <code>UpgradePath</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }


  /**
   * Url to display the upgrade path to the user
   * @member String url
   */
  exports.prototype['url'] = undefined;




  return exports;
}));
