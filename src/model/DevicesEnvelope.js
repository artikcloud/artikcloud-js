(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicesEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceArray);
  }
}(this, function(ApiClient, DeviceArray) {
  'use strict';

  /**
   * The DevicesEnvelope model module.
   * @module model/DevicesEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DevicesEnvelope</code>.
   * Devices Envelope
   * @alias module:model/DevicesEnvelope
   * @class
   * @param total(Number)
   * @param count(Number)
   * @param offset(Number)
   */
  var exports = function(total, count, offset) {

    this['total'] = total;
    this['count'] = count;
    this['offset'] = offset;

  };

  /**
   * Constructs a <code>DevicesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicesEnvelope} obj Optional instance to populate.
   * @return {module:model/DevicesEnvelope} The populated <code>DevicesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceArray.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member module:model/DeviceArray data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
