(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CheckTokenMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CheckTokenMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.CheckTokenResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.CheckTokenMessage);
  }
}(this, function(ApiClient, CheckTokenMessage) {
  'use strict';

  /**
   * The CheckTokenResponse model module.
   * @module model/CheckTokenResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>CheckTokenResponse</code>.
   * 
   * @alias module:model/CheckTokenResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CheckTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckTokenResponse} obj Optional instance to populate.
   * @return {module:model/CheckTokenResponse} The populated <code>CheckTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = CheckTokenMessage.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/CheckTokenMessage data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
