(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.UserEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * The UserEnvelope model module.
   * @module model/UserEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>UserEnvelope</code>.
   * User Envelope
   * @alias module:model/UserEnvelope
   * @class
   * @param data(User)
   */
  var exports = function(data) {

    this['data'] = data;
  };

  /**
   * Constructs a <code>UserEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserEnvelope} obj Optional instance to populate.
   * @return {module:model/UserEnvelope} The populated <code>UserEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = User.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/User data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
