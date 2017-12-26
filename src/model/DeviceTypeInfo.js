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
    root.ArtikCloud.DeviceTypeInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceTypeInfo model module.
   * @module model/DeviceTypeInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTypeInfo</code>.
   * 
   * @alias module:model/DeviceTypeInfo
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>DeviceTypeInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypeInfo} obj Optional instance to populate.
   * @return {module:model/DeviceTypeInfo} The populated <code>DeviceTypeInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('devicePropertiesEnabled')) {
        obj['devicePropertiesEnabled'] = ApiClient.convertToType(data['devicePropertiesEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('pmax')) {
        obj['pmax'] = ApiClient.convertToType(data['pmax'], 'Number');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Number');
      }
      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('pmin')) {
        obj['pmin'] = ApiClient.convertToType(data['pmin'], 'Number');
      }
      if (data.hasOwnProperty('taskExpiresAfter')) {
        obj['taskExpiresAfter'] = ApiClient.convertToType(data['taskExpiresAfter'], 'Number');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Device Properties Enabled
   * @member Boolean devicePropertiesEnabled
   */
  exports.prototype['devicePropertiesEnabled'] = undefined;

  /**
   * Pmax value
   * @member Number pmax
   */
  exports.prototype['pmax'] = undefined;

  /**
   * Modified on
   * @member Number modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;

  /**
   * Device Type ID
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * Pmin value
   * @member Number pmin
   */
  exports.prototype['pmin'] = undefined;

  /**
   * Default task expiration time in seconds
   * @member Number taskExpiresAfter
   */
  exports.prototype['taskExpiresAfter'] = undefined;

  /**
   * Created on
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;




  return exports;
}));
