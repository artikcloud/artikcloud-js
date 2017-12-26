(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NotifMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotifMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.NotifMessageArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.NotifMessage);
  }
}(this, function(ApiClient, NotifMessage) {
  'use strict';

  /**
   * The NotifMessageArray model module.
   * @module model/NotifMessageArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NotifMessageArray</code>.
   * 
   * @alias module:model/NotifMessageArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NotifMessageArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotifMessageArray} obj Optional instance to populate.
   * @return {module:model/NotifMessageArray} The populated <code>NotifMessageArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [NotifMessage]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/NotifMessage> messages
   */
  exports.prototype['messages'] = undefined;




  return exports;
}));
