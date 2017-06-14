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
    root.ArtikCloud.RuleArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.OutputRule);
  }
}(this, function(ApiClient, OutputRule) {
  'use strict';

  /**
   * The RuleArray model module.
   * @module model/RuleArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RuleArray</code>.
   * Holds an array of Rules.
   * @alias module:model/RuleArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RuleArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleArray} obj Optional instance to populate.
   * @return {module:model/RuleArray} The populated <code>RuleArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [OutputRule]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/OutputRule> rules
   */
  exports.prototype['rules'] = undefined;




  return exports;
}));
