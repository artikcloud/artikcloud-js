(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceToken'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTokenEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceToken);
  }
}(this, function(ApiClient, DeviceToken) {
  'use strict';

  /**
   * The DeviceTokenEnvelope model module.
   * @module model/DeviceTokenEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTokenEnvelope</code>.
   * Device Token Envelope
   * @alias module:model/DeviceTokenEnvelope
   * @class
   * @param data(DeviceToken)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>DeviceTokenEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTokenEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceTokenEnvelope} The populated <code>DeviceTokenEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceToken.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceToken data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
