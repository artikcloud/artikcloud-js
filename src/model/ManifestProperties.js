(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FieldsActions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldsActions'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ManifestProperties = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.FieldsActions);
  }
}(this, function(ApiClient, FieldsActions) {
  'use strict';

  /**
   * The ManifestProperties model module.
   * @module model/ManifestProperties
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ManifestProperties</code>.
   * Manifest Properties
   * @alias module:model/ManifestProperties
   * @class
   * @param properties(FieldsActions)
   */
  var exports = function(properties) {

    this['properties'] = properties;
  };

  /**
   * Constructs a <code>ManifestProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManifestProperties} obj Optional instance to populate.
   * @return {module:model/ManifestProperties} The populated <code>ManifestProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('properties')) {
        obj['properties'] = FieldsActions.constructFromObject(data['properties']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/FieldsActions properties
   */
  exports.prototype['properties'] = undefined;




  return exports;
}));
