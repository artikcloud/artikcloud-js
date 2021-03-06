(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceSharing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceSharing'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceSharingArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceSharing);
  }
}(this, function(ApiClient, DeviceSharing) {
  'use strict';

  /**
   * The DeviceSharingArray model module.
   * @module model/DeviceSharingArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceSharingArray</code>.
   * 
   * @alias module:model/DeviceSharingArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceSharingArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceSharingArray} obj Optional instance to populate.
   * @return {module:model/DeviceSharingArray} The populated <code>DeviceSharingArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], [DeviceSharing]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/DeviceSharing> shares
   */
  exports.prototype['shares'] = undefined;




  return exports;
}));
