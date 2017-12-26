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
    root.ArtikCloud.Device = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Device model module.
   * @module model/Device
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>Device</code>.
   * Device information.
   * @alias module:model/Device
   * @class
   */
  var exports = function() {

















  };

  /**
   * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Device} obj Optional instance to populate.
   * @return {module:model/Device} The populated <code>Device</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('manifestVersion')) {
        obj['manifestVersion'] = ApiClient.convertToType(data['manifestVersion'], 'Number');
      }
      if (data.hasOwnProperty('manifestVersionPolicy')) {
        obj['manifestVersionPolicy'] = ApiClient.convertToType(data['manifestVersionPolicy'], 'String');
      }
      if (data.hasOwnProperty('needProviderAuth')) {
        obj['needProviderAuth'] = ApiClient.convertToType(data['needProviderAuth'], 'Boolean');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
      if (data.hasOwnProperty('connected')) {
        obj['connected'] = ApiClient.convertToType(data['connected'], 'Boolean');
      }
      if (data.hasOwnProperty('certificateInfo')) {
        obj['certificateInfo'] = ApiClient.convertToType(data['certificateInfo'], 'String');
      }
      if (data.hasOwnProperty('certificateSignature')) {
        obj['certificateSignature'] = ApiClient.convertToType(data['certificateSignature'], 'String');
      }
      if (data.hasOwnProperty('eid')) {
        obj['eid'] = ApiClient.convertToType(data['eid'], 'String');
      }
      if (data.hasOwnProperty('providerCredentials')) {
        obj['providerCredentials'] = ApiClient.convertToType(data['providerCredentials'], {'String': Object});
      }
      if (data.hasOwnProperty('sharedWithOthers')) {
        obj['sharedWithOthers'] = ApiClient.convertToType(data['sharedWithOthers'], 'Boolean');
      }
      if (data.hasOwnProperty('sharedWithMe')) {
        obj['sharedWithMe'] = ApiClient.convertToType(data['sharedWithMe'], 'String');
      }
    }
    return obj;
  }


  /**
   * Device ID
   * @member String id
   */
  exports.prototype['id'] = undefined;

  /**
   * User ID
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * Device Type ID
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * Name
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Manifest Version
   * @member Number manifestVersion
   */
  exports.prototype['manifestVersion'] = undefined;

  /**
   * Manifest Version Policy (LATEST, DEVICE)
   * @member String manifestVersionPolicy
   */
  exports.prototype['manifestVersionPolicy'] = undefined;

  /**
   * Needs Provider Authentication
   * @member Boolean needProviderAuth
   */
  exports.prototype['needProviderAuth'] = undefined;

  /**
   * @member Object.<String, Object> properties
   */
  exports.prototype['properties'] = undefined;

  /**
   * Created On (milliseconds since epoch)
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;

  /**
   * Is Connected
   * @member Boolean connected
   */
  exports.prototype['connected'] = undefined;

  /**
   * Certificate Info (if any)
   * @member String certificateInfo
   */
  exports.prototype['certificateInfo'] = undefined;

  /**
   * Certificate Signature (if any)
   * @member String certificateSignature
   */
  exports.prototype['certificateSignature'] = undefined;

  /**
   * External ID (if any)
   * @member String eid
   */
  exports.prototype['eid'] = undefined;

  /**
   * @member Object.<String, Object> providerCredentials
   */
  exports.prototype['providerCredentials'] = undefined;

  /**
   * Is shared with other users
   * @member Boolean sharedWithOthers
   */
  exports.prototype['sharedWithOthers'] = undefined;

  /**
   * Share id (if shared with me)
   * @member String sharedWithMe
   */
  exports.prototype['sharedWithMe'] = undefined;




  return exports;
}));
