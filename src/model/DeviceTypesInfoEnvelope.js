(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceTypesInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceTypesInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypesInfoEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceTypesInfo);
  }
}(this, function(ApiClient, DeviceTypesInfo) {
  'use strict';

  /**
   * The DeviceTypesInfoEnvelope model module.
   * @module model/DeviceTypesInfoEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTypesInfoEnvelope</code>.
   * 
   * @alias module:model/DeviceTypesInfoEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTypesInfoEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypesInfoEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceTypesInfoEnvelope} The populated <code>DeviceTypesInfoEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceTypesInfo.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceTypesInfo data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
