(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContactInfo', './Tier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactInfo'), require('./Tier'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTypePricingTier = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ContactInfo, root.ArtikCloud.Tier);
  }
}(this, function(ApiClient, ContactInfo, Tier) {
  'use strict';

  /**
   * The DeviceTypePricingTier model module.
   * @module model/DeviceTypePricingTier
   * @version 4.2.1
   */

  /**
   * Constructs a new <code>DeviceTypePricingTier</code>.
   * 
   * @alias module:model/DeviceTypePricingTier
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>DeviceTypePricingTier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypePricingTier} obj Optional instance to populate.
   * @return {module:model/DeviceTypePricingTier} The populated <code>DeviceTypePricingTier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('revenueSharePercent')) {
        obj['revenueSharePercent'] = ApiClient.convertToType(data['revenueSharePercent'], Object);
      }
      if (data.hasOwnProperty('tiers')) {
        obj['tiers'] = ApiClient.convertToType(data['tiers'], [Tier]);
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Number');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('contactInfo')) {
        obj['contactInfo'] = ContactInfo.constructFromObject(data['contactInfo']);
      }
      if (data.hasOwnProperty('ptType')) {
        obj['ptType'] = ApiClient.convertToType(data['ptType'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * revenue share percentage
   * @member Object revenueSharePercent
   */
  exports.prototype['revenueSharePercent'] = undefined;

  /**
   * tiers
   * @member Array.<module:model/Tier> tiers
   */
  exports.prototype['tiers'] = undefined;

  /**
   * modified on
   * @member Number modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;

  /**
   * comments
   * @member String comments
   */
  exports.prototype['comments'] = undefined;

  /**
   * dtid
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * contact information
   * @member module:model/ContactInfo contactInfo
   */
  exports.prototype['contactInfo'] = undefined;

  /**
   * type
   * @member String ptType
   */
  exports.prototype['ptType'] = undefined;

  /**
   * version
   * @member Number version
   */
  exports.prototype['version'] = undefined;

  /**
   * created on
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;

  /**
   * status
   * @member String status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
