(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ManifestProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManifestProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ManifestPropertiesEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ManifestProperties);
  }
}(this, function(ApiClient, ManifestProperties) {
  'use strict';

  /**
   * The ManifestPropertiesEnvelope model module.
   * @module model/ManifestPropertiesEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ManifestPropertiesEnvelope</code>.
   * Manifest Properties Envelope
   * @alias module:model/ManifestPropertiesEnvelope
   * @class
   * @param data(ManifestProperties)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>ManifestPropertiesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestPropertiesEnvelope} obj Optional instance to populate.
   * @return {module:model/ManifestPropertiesEnvelope} The populated <code>ManifestPropertiesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ManifestProperties.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/ManifestProperties data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
