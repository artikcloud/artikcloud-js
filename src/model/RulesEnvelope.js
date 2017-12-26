(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './OutputRule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OutputRule'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.RulesEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.OutputRule);
  }
}(this, function(ApiClient, OutputRule) {
  'use strict';

  /**
   * The RulesEnvelope model module.
   * @module model/RulesEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RulesEnvelope</code>.
   * Rules Envelope.
   * @alias module:model/RulesEnvelope
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>RulesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RulesEnvelope} obj Optional instance to populate.
   * @return {module:model/RulesEnvelope} The populated <code>RulesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [OutputRule]);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member Array.<module:model/OutputRule> data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member Number total
   */
  exports.prototype['total'] = undefined;




  return exports;
}));
