(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceStatusBatch = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceStatus);
  }
}(this, function(ApiClient, DeviceStatus) {
  'use strict';

  /**
   * The DeviceStatusBatch model module.
   * @module model/DeviceStatusBatch
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceStatusBatch</code>.
   * 
   * @alias module:model/DeviceStatusBatch
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>DeviceStatusBatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatusBatch} obj Optional instance to populate.
   * @return {module:model/DeviceStatusBatch} The populated <code>DeviceStatusBatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [DeviceStatus]);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member Array.<module:model/DeviceStatus> data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;




  return exports;
}));
