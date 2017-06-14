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
    root.ArtikCloud.RuleEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.OutputRule);
  }
}(this, function(ApiClient, OutputRule) {
  'use strict';

  /**
   * The RuleEnvelope model module.
   * @module model/RuleEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RuleEnvelope</code>.
   * Rule Envelope.
   * @alias module:model/RuleEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RuleEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleEnvelope} obj Optional instance to populate.
   * @return {module:model/RuleEnvelope} The populated <code>RuleEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = OutputRule.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/OutputRule data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
