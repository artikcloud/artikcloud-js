(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceType = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * The DeviceType model module.
   * @module model/DeviceType
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceType</code>.
   * Device Type Information
   * @alias module:model/DeviceType
   * @class
   */
  var exports = function() {



















  };

  /**
   * Constructs a <code>DeviceType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceType} obj Optional instance to populate.
   * @return {module:model/DeviceType} The populated <code>DeviceType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('uniqueName')) {
        obj['uniqueName'] = ApiClient.convertToType(data['uniqueName'], 'String');
      }
      if (data.hasOwnProperty('latestVersion')) {
        obj['latestVersion'] = ApiClient.convertToType(data['latestVersion'], 'Number');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('oid')) {
        obj['oid'] = ApiClient.convertToType(data['oid'], 'String');
      }
      if (data.hasOwnProperty('hasCloudConnector')) {
        obj['hasCloudConnector'] = ApiClient.convertToType(data['hasCloudConnector'], 'Boolean');
      }
      if (data.hasOwnProperty('approved')) {
        obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('protected')) {
        obj['protected'] = ApiClient.convertToType(data['protected'], 'Boolean');
      }
      if (data.hasOwnProperty('inStore')) {
        obj['inStore'] = ApiClient.convertToType(data['inStore'], 'Boolean');
      }
      if (data.hasOwnProperty('ownedByCurrentUser')) {
        obj['ownedByCurrentUser'] = ApiClient.convertToType(data['ownedByCurrentUser'], 'Boolean');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
      }
      if (data.hasOwnProperty('rsp')) {
        obj['rsp'] = ApiClient.convertToType(data['rsp'], 'Boolean');
      }
      if (data.hasOwnProperty('issuerDn')) {
        obj['issuerDn'] = ApiClient.convertToType(data['issuerDn'], 'String');
      }
      if (data.hasOwnProperty('vid')) {
        obj['vid'] = ApiClient.convertToType(data['vid'], 'String');
      }
    }
    return obj;
  }


  /**
   * Device Type ID.
   * @member String id
   */
  exports.prototype['id'] = undefined;

  /**
   * Unique Name.
   * @member String uniqueName
   */
  exports.prototype['uniqueName'] = undefined;

  /**
   * Latest Manifest version.
   * @member Number latestVersion
   */
  exports.prototype['latestVersion'] = undefined;

  /**
   * @member Number lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;

  /**
   * Name.
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Description.
   * @member String description
   */
  exports.prototype['description'] = undefined;

  /**
   * User ID.
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * Organization ID.
   * @member String oid
   */
  exports.prototype['oid'] = undefined;

  /**
   * Uses Cloud Connectors SDK
   * @member Boolean hasCloudConnector
   */
  exports.prototype['hasCloudConnector'] = undefined;

  /**
   * Approval status.
   * @member Boolean approved
   */
  exports.prototype['approved'] = undefined;

  /**
   * Published status.
   * @member Boolean published
   */
  exports.prototype['published'] = undefined;

  /**
   * Protected status.
   * @member Boolean protected
   */
  exports.prototype['protected'] = undefined;

  /**
   * In Store.
   * @member Boolean inStore
   */
  exports.prototype['inStore'] = undefined;

  /**
   * Does the current user own a device of this device type
   * @member Boolean ownedByCurrentUser
   */
  exports.prototype['ownedByCurrentUser'] = undefined;

  /**
   * Tags
   * @member Array.<module:model/Tag> tags
   */
  exports.prototype['tags'] = undefined;

  /**
   * Require Secure Device Registration (SDR) Protocol.
   * @member Boolean rsp
   */
  exports.prototype['rsp'] = undefined;

  /**
   * Issuer Distinguished Name (Used in SDR)
   * @member String issuerDn
   */
  exports.prototype['issuerDn'] = undefined;

  /**
   * Vendor ID. (Used in SDR)
   * @member String vid
   */
  exports.prototype['vid'] = undefined;




  return exports;
}));
