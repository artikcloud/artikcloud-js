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
    root.ArtikCloud.DeviceStatusData = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceStatusData model module.
   * @module model/DeviceStatusData
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceStatusData</code>.
   * 
   * @alias module:model/DeviceStatusData
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>DeviceStatusData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceStatusData} obj Optional instance to populate.
   * @return {module:model/DeviceStatusData} The populated <code>DeviceStatusData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('lastTimeOnline')) {
        obj['lastTimeOnline'] = ApiClient.convertToType(data['lastTimeOnline'], 'Number');
      }
      if (data.hasOwnProperty('lastActionTs')) {
        obj['lastActionTs'] = ApiClient.convertToType(data['lastActionTs'], 'Number');
      }
      if (data.hasOwnProperty('lastMessageTs')) {
        obj['lastMessageTs'] = ApiClient.convertToType(data['lastMessageTs'], 'Number');
      }
      if (data.hasOwnProperty('availability')) {
        obj['availability'] = ApiClient.convertToType(data['availability'], 'String');
      }
      if (data.hasOwnProperty('snapshot')) {
        obj['snapshot'] = ApiClient.convertToType(data['snapshot'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * @member Number lastTimeOnline
   */
  exports.prototype['lastTimeOnline'] = undefined;

  /**
   * @member Number lastActionTs
   */
  exports.prototype['lastActionTs'] = undefined;

  /**
   * @member Number lastMessageTs
   */
  exports.prototype['lastMessageTs'] = undefined;

  /**
   * @member String availability
   */
  exports.prototype['availability'] = undefined;

  /**
   * @member Object.<String, Object> snapshot
   */
  exports.prototype['snapshot'] = undefined;




  return exports;
}));
