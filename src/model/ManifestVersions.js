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
    root.ArtikCloud.ManifestVersions = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ManifestVersions model module.
   * @module model/ManifestVersions
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ManifestVersions</code>.
   * Manifest Versions
   * @alias module:model/ManifestVersions
   * @class
   * @param versions([String])
   */
  var exports = function(versions) {

    this['versions'] = versions;
  };

  /**
   * Constructs a <code>ManifestVersions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestVersions} obj Optional instance to populate.
   * @return {module:model/ManifestVersions} The populated <code>ManifestVersions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('versions')) {
        obj['versions'] = ApiClient.convertToType(data['versions'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member Array.<String> versions
   */
  exports.prototype['versions'] = undefined;




  return exports;
}));
