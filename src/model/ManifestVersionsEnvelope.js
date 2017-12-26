(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ManifestVersions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManifestVersions'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ManifestVersionsEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ManifestVersions);
  }
}(this, function(ApiClient, ManifestVersions) {
  'use strict';

  /**
   * The ManifestVersionsEnvelope model module.
   * @module model/ManifestVersionsEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ManifestVersionsEnvelope</code>.
   * Manifest Versions Envelope
   * @alias module:model/ManifestVersionsEnvelope
   * @class
   * @param data(ManifestVersions)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>ManifestVersionsEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestVersionsEnvelope} obj Optional instance to populate.
   * @return {module:model/ManifestVersionsEnvelope} The populated <code>ManifestVersionsEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ManifestVersions.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/ManifestVersions data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
