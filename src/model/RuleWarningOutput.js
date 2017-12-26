(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.RuleWarningOutput = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RuleWarningOutput model module.
   * @module model/RuleWarningOutput
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RuleWarningOutput</code>.
   * Rule Warnings
   * @alias module:model/RuleWarningOutput
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>RuleWarningOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleWarningOutput} obj Optional instance to populate.
   * @return {module:model/RuleWarningOutput} The populated <code>RuleWarningOutput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member String code
   */
  exports.prototype['code'] = undefined;

  /**
   * @member String message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));
