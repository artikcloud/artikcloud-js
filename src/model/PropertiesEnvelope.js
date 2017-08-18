(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AppProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AppProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.PropertiesEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.AppProperties);
  }
}(this, function(ApiClient, AppProperties) {
  'use strict';

  /**
   * The PropertiesEnvelope model module.
   * @module model/PropertiesEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>PropertiesEnvelope</code>.
   * User Application Properties Envelope
   * @alias module:model/PropertiesEnvelope
   * @class
   * @param data(AppProperties)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>PropertiesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertiesEnvelope} obj Optional instance to populate.
   * @return {module:model/PropertiesEnvelope} The populated <code>PropertiesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = AppProperties.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/AppProperties data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
