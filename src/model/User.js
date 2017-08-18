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
    root.ArtikCloud.User = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>User</code>.
   * User Information
   * @alias module:model/User
   * @class
   * @param id(String)
   * @param name(String)
   * @param email(String)
   * @param fullName(String)
   * @param createdOn(Number)
   * @param modifiedOn(Number)
   */
  var exports = function(id, name, email, fullName, createdOn, modifiedOn) {

    this['id'] = id;
    this['name'] = name;
    this['email'] = email;
    this['fullName'] = fullName;

    this['createdOn'] = createdOn;
    this['modifiedOn'] = modifiedOn;
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fullName')) {
        obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
      }
      if (data.hasOwnProperty('saIdentity')) {
        obj['saIdentity'] = ApiClient.convertToType(data['saIdentity'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member String id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member String email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member String fullName
   */
  exports.prototype['fullName'] = undefined;

  /**
   * @member String saIdentity
   */
  exports.prototype['saIdentity'] = undefined;

  /**
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;

  /**
   * @member Number modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;




  return exports;
}));
