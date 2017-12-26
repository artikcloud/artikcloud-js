(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PresenceModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PresenceModel'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.PresenceEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.PresenceModel);
  }
}(this, function(ApiClient, PresenceModel) {
  'use strict';

  /**
   * The PresenceEnvelope model module.
   * @module model/PresenceEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>PresenceEnvelope</code>.
   * 
   * @alias module:model/PresenceEnvelope
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PresenceEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PresenceEnvelope} obj Optional instance to populate.
   * @return {module:model/PresenceEnvelope} The populated <code>PresenceEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = PresenceModel.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member module:model/PresenceModel data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;




  return exports;
}));
