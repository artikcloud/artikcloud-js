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
    root.ArtikCloud.Tier = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Tier model module.
   * @module model/Tier
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>Tier</code>.
   * 
   * @alias module:model/Tier
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>Tier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tier} obj Optional instance to populate.
   * @return {module:model/Tier} The populated <code>Tier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Number');
      }
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
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Modified On
   * @member Number modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;

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

  /**
   * Created On
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;




  return exports;
}));
