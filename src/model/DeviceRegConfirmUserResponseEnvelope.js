(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceRegConfirmUserResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceRegConfirmUserResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceRegConfirmUserResponseEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceRegConfirmUserResponse);
  }
}(this, function(ApiClient, DeviceRegConfirmUserResponse) {
  'use strict';

  /**
   * The DeviceRegConfirmUserResponseEnvelope model module.
   * @module model/DeviceRegConfirmUserResponseEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceRegConfirmUserResponseEnvelope</code>.
   * 
   * @alias module:model/DeviceRegConfirmUserResponseEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceRegConfirmUserResponseEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceRegConfirmUserResponseEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceRegConfirmUserResponseEnvelope} The populated <code>DeviceRegConfirmUserResponseEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceRegConfirmUserResponse.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/DeviceRegConfirmUserResponse data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
