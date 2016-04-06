(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RuleArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RuleArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloudApi) {
      root.ArtikCloudApi = {};
    }
    root.ArtikCloudApi.RulesEnvelope = factory(root.ArtikCloudApi.ApiClient, root.ArtikCloudApi.RuleArray);
  }
}(this, function(ApiClient, RuleArray) {
  'use strict';

  /**
   * The RulesEnvelope model module.
   * @module model/RulesEnvelope
   * @version 2.0.0
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
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = RuleArray.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Integer');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member {module:model/RuleArray} data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member {Integer} offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;




  return exports;
}));
