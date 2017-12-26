(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './UpgradePath'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UpgradePath'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.UpgradePathEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.UpgradePath);
  }
}(this, function(ApiClient, UpgradePath) {
  'use strict';

  /**
   * The UpgradePathEnvelope model module.
   * @module model/UpgradePathEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>UpgradePathEnvelope</code>.
   * 
   * @alias module:model/UpgradePathEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UpgradePathEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpgradePathEnvelope} obj Optional instance to populate.
   * @return {module:model/UpgradePathEnvelope} The populated <code>UpgradePathEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UpgradePath.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * data envelope
   * @member module:model/UpgradePath data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
