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
    root.ArtikCloud.AppProperties = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AppProperties model module.
   * @module model/AppProperties
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>AppProperties</code>.
   * User Application Properties
   * @alias module:model/AppProperties
   * @class
   * @param properties(String)
   */
  var exports = function(properties) {



    this['properties'] = properties;
  };

  /**
   * Constructs a <code>AppProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppProperties} obj Optional instance to populate.
   * @return {module:model/AppProperties} The populated <code>AppProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('aid')) {
        obj['aid'] = ApiClient.convertToType(data['aid'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member String aid
   */
  exports.prototype['aid'] = undefined;

  /**
   * @member String properties
   */
  exports.prototype['properties'] = undefined;




  return exports;
}));
