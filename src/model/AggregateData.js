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
    root.ArtikCloud.AggregateData = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AggregateData model module.
   * @module model/AggregateData
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>AggregateData</code>.
   * Aggregate Data
   * @alias module:model/AggregateData
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>AggregateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregateData} obj Optional instance to populate.
   * @return {module:model/AggregateData} The populated <code>AggregateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'Number');
      }
      if (data.hasOwnProperty('mean')) {
        obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
      }
      if (data.hasOwnProperty('min')) {
        obj['min'] = ApiClient.convertToType(data['min'], 'Number');
      }
      if (data.hasOwnProperty('sum')) {
        obj['sum'] = ApiClient.convertToType(data['sum'], 'Number');
      }
      if (data.hasOwnProperty('variance')) {
        obj['variance'] = ApiClient.convertToType(data['variance'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member Number max
   */
  exports.prototype['max'] = undefined;

  /**
   * @member Number mean
   */
  exports.prototype['mean'] = undefined;

  /**
   * @member Number min
   */
  exports.prototype['min'] = undefined;

  /**
   * @member Number sum
   */
  exports.prototype['sum'] = undefined;

  /**
   * @member Number variance
   */
  exports.prototype['variance'] = undefined;




  return exports;
}));
