(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './MessageID'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageID'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.MessageIDEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.MessageID);
  }
}(this, function(ApiClient, MessageID) {
  'use strict';

  /**
   * The MessageIDEnvelope model module.
   * @module model/MessageIDEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>MessageIDEnvelope</code>.
   * Message ID Envelope
   * @alias module:model/MessageIDEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>MessageIDEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageIDEnvelope} obj Optional instance to populate.
   * @return {module:model/MessageIDEnvelope} The populated <code>MessageIDEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MessageID.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/MessageID data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
