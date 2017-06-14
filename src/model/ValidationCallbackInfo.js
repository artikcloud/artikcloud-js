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
    root.ArtikCloud.ValidationCallbackInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidationCallbackInfo model module.
   * @module model/ValidationCallbackInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ValidationCallbackInfo</code>.
   * 
   * @alias module:model/ValidationCallbackInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ValidationCallbackInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidationCallbackInfo} obj Optional instance to populate.
   * @return {module:model/ValidationCallbackInfo} The populated <code>ValidationCallbackInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('aid')) {
        obj['aid'] = ApiClient.convertToType(data['aid'], 'String');
      }
      if (data.hasOwnProperty('nonce')) {
        obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
      }
    }
    return obj;
  }


  /**
   * Application id that created the subscription.
   * @member String aid
   */
  exports.prototype['aid'] = undefined;

  /**
   * Nonce obtained from the validation request.
   * @member String nonce
   */
  exports.prototype['nonce'] = undefined;




  return exports;
}));
