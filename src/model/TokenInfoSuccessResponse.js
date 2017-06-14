(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TokenInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TokenInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TokenInfoSuccessResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TokenInfo);
  }
}(this, function(ApiClient, TokenInfo) {
  'use strict';

  /**
   * The TokenInfoSuccessResponse model module.
   * @module model/TokenInfoSuccessResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TokenInfoSuccessResponse</code>.
   * 
   * @alias module:model/TokenInfoSuccessResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TokenInfoSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenInfoSuccessResponse} obj Optional instance to populate.
   * @return {module:model/TokenInfoSuccessResponse} The populated <code>TokenInfoSuccessResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = TokenInfo.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/TokenInfo data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
