(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AggregatesHistogramData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AggregatesHistogramData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.AggregatesHistogramResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.AggregatesHistogramData);
  }
}(this, function(ApiClient, AggregatesHistogramData) {
  'use strict';

  /**
   * The AggregatesHistogramResponse model module.
   * @module model/AggregatesHistogramResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>AggregatesHistogramResponse</code>.
   * Aggregates Histogram Response
   * @alias module:model/AggregatesHistogramResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>AggregatesHistogramResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregatesHistogramResponse} obj Optional instance to populate.
   * @return {module:model/AggregatesHistogramResponse} The populated <code>AggregatesHistogramResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [AggregatesHistogramData]);
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Number');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/AggregatesHistogramData> data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member Number endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member String field
   */
  exports.prototype['field'] = undefined;

  /**
   * @member String interval
   */
  exports.prototype['interval'] = undefined;

  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member Number size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member Number startDate
   */
  exports.prototype['startDate'] = undefined;




  return exports;
}));
