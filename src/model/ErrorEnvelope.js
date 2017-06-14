(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './WebSocketError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebSocketError'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ErrorEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.WebSocketError);
  }
}(this, function(ApiClient, WebSocketError) {
  'use strict';

  /**
   * The ErrorEnvelope model module.
   * @module model/ErrorEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ErrorEnvelope</code>.
   * WebSocket Error Envelope
   * @alias module:model/ErrorEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ErrorEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorEnvelope} obj Optional instance to populate.
   * @return {module:model/ErrorEnvelope} The populated <code>ErrorEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = WebSocketError.constructFromObject(data['error']);
      }
    }
    return obj;
  }


  /**
   * Error Data
   * @member module:model/WebSocketError error
   */
  exports.prototype['error'] = undefined;




  return exports;
}));
