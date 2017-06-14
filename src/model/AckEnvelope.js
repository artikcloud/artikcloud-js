(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Acknowledgement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Acknowledgement'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.AckEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Acknowledgement);
  }
}(this, function(ApiClient, Acknowledgement) {
  'use strict';

  /**
   * The AckEnvelope model module.
   * @module model/AckEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>AckEnvelope</code>.
   * Acknowledgement Envelope.
   * @alias module:model/AckEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AckEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AckEnvelope} obj Optional instance to populate.
   * @return {module:model/AckEnvelope} The populated <code>AckEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Acknowledgement.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/Acknowledgement data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
