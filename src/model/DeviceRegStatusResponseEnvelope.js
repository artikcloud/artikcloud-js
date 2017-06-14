(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceRegStatusResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceRegStatusResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceRegStatusResponseEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceRegStatusResponse);
  }
}(this, function(ApiClient, DeviceRegStatusResponse) {
  'use strict';

  /**
   * The DeviceRegStatusResponseEnvelope model module.
   * @module model/DeviceRegStatusResponseEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceRegStatusResponseEnvelope</code>.
   * 
   * @alias module:model/DeviceRegStatusResponseEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceRegStatusResponseEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceRegStatusResponseEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceRegStatusResponseEnvelope} The populated <code>DeviceRegStatusResponseEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceRegStatusResponse.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceRegStatusResponse data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
