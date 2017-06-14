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
    root.ArtikCloud.MessageID = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MessageID model module.
   * @module model/MessageID
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>MessageID</code>.
   * Mesage ID.
   * @alias module:model/MessageID
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>MessageID</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageID} obj Optional instance to populate.
   * @return {module:model/MessageID} The populated <code>MessageID</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mid')) {
        obj['mid'] = ApiClient.convertToType(data['mid'], 'String');
      }
    }
    return obj;
  }


  /**
   * Message ID.
   * @member String mid
   */
  exports.prototype['mid'] = undefined;




  return exports;
}));
