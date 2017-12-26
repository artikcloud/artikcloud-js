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
    root.ArtikCloud.UnregisterDeviceResponse = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UnregisterDeviceResponse model module.
   * @module model/UnregisterDeviceResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>UnregisterDeviceResponse</code>.
   * 
   * @alias module:model/UnregisterDeviceResponse
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>UnregisterDeviceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnregisterDeviceResponse} obj Optional instance to populate.
   * @return {module:model/UnregisterDeviceResponse} The populated <code>UnregisterDeviceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('certificateInfo')) {
        obj['certificateInfo'] = ApiClient.convertToType(data['certificateInfo'], 'String');
      }
      if (data.hasOwnProperty('certificateSignature')) {
        obj['certificateSignature'] = ApiClient.convertToType(data['certificateSignature'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('eid')) {
        obj['eid'] = ApiClient.convertToType(data['eid'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('manifestVersion')) {
        obj['manifestVersion'] = ApiClient.convertToType(data['manifestVersion'], 'Number');
      }
      if (data.hasOwnProperty('manifestVersionPolicy')) {
        obj['manifestVersionPolicy'] = ApiClient.convertToType(data['manifestVersionPolicy'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('needProviderAuth')) {
        obj['needProviderAuth'] = ApiClient.convertToType(data['needProviderAuth'], 'Boolean');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
    }
    return obj;
  }


  /**
   * Device certificate information.
   * @member String certificateInfo
   */
  exports.prototype['certificateInfo'] = undefined;

  /**
   * Certificate's signature.
   * @member String certificateSignature
   */
  exports.prototype['certificateSignature'] = undefined;

  /**
   * Device created on date.
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;

  /**
   * Device type id.
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * External ID of the device.
   * @member String eid
   */
  exports.prototype['eid'] = undefined;

  /**
   * Device id.
   * @member String id
   */
  exports.prototype['id'] = undefined;

  /**
   * Device manifest version.
   * @member Number manifestVersion
   */
  exports.prototype['manifestVersion'] = undefined;

  /**
   * Device manifest version policy.
   * @member String manifestVersionPolicy
   */
  exports.prototype['manifestVersionPolicy'] = undefined;

  /**
   * Device name.
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Device need provider auth.
   * @member Boolean needProviderAuth
   */
  exports.prototype['needProviderAuth'] = undefined;

  /**
   * User id.
   * @member String uid
   */
  exports.prototype['uid'] = undefined;




  return exports;
}));
