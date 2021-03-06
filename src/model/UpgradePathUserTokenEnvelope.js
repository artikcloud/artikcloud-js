(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './UpgradePathUserToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UpgradePathUserToken'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.UpgradePathUserTokenEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.UpgradePathUserToken);
  }
}(this, function(ApiClient, UpgradePathUserToken) {
  'use strict';

  /**
   * The UpgradePathUserTokenEnvelope model module.
   * @module model/UpgradePathUserTokenEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>UpgradePathUserTokenEnvelope</code>.
   * 
   * @alias module:model/UpgradePathUserTokenEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UpgradePathUserTokenEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpgradePathUserTokenEnvelope} obj Optional instance to populate.
   * @return {module:model/UpgradePathUserTokenEnvelope} The populated <code>UpgradePathUserTokenEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UpgradePathUserToken.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/UpgradePathUserToken data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
