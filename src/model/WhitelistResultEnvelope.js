(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Whitelist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Whitelist'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.WhitelistResultEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Whitelist);
  }
}(this, function(ApiClient, Whitelist) {
  'use strict';

  /**
   * The WhitelistResultEnvelope model module.
   * @module model/WhitelistResultEnvelope
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>WhitelistResultEnvelope</code>.
   * 
   * @alias module:model/WhitelistResultEnvelope
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>WhitelistResultEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhitelistResultEnvelope} obj Optional instance to populate.
   * @return {module:model/WhitelistResultEnvelope} The populated <code>WhitelistResultEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Whitelist]);
      }
    }
    return obj;
  }


  /**
   * Device type id
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * Page starting position
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * Page size
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * Total number or whitelist vdids
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * Array of whitelisted vdids
   * @member Array.<module:model/Whitelist> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
