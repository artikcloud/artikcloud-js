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
    root.ArtikCloud.DevicePricingTier = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DevicePricingTier model module.
   * @module model/DevicePricingTier
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>DevicePricingTier</code>.
   * 
   * @alias module:model/DevicePricingTier
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>DevicePricingTier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicePricingTier} obj Optional instance to populate.
   * @return {module:model/DevicePricingTier} The populated <code>DevicePricingTier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('messageLimit')) {
        obj['messageLimit'] = ApiClient.convertToType(data['messageLimit'], 'Number');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'String');
      }
      if (data.hasOwnProperty('ptid')) {
        obj['ptid'] = ApiClient.convertToType(data['ptid'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('billingInterval')) {
        obj['billingInterval'] = ApiClient.convertToType(data['billingInterval'], 'String');
      }
    }
    return obj;
  }


  /**
   * Message Limit
   * @member Number messageLimit
   */
  exports.prototype['messageLimit'] = undefined;

  /**
   * Cost
   * @member String cost
   */
  exports.prototype['cost'] = undefined;

  /**
   * Name
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Description
   * @member String description
   */
  exports.prototype['description'] = undefined;

  /**
   * Active
   * @member Boolean active
   */
  exports.prototype['active'] = undefined;

  /**
   * Interval
   * @member String interval
   */
  exports.prototype['interval'] = undefined;

  /**
   * Pricing Tier ID
   * @member String ptid
   */
  exports.prototype['ptid'] = undefined;

  /**
   * Type
   * @member String type
   */
  exports.prototype['type'] = undefined;

  /**
   * Billing Interval
   * @member String billingInterval
   */
  exports.prototype['billingInterval'] = undefined;




  return exports;
}));
