(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FieldPath'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FieldPath'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.RuleError = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.FieldPath);
  }
}(this, function(ApiClient, FieldPath) {
  'use strict';

  /**
   * The RuleError model module.
   * @module model/RuleError
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RuleError</code>.
   * Rule Error.
   * @alias module:model/RuleError
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>RuleError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleError} obj Optional instance to populate.
   * @return {module:model/RuleError} The populated <code>RuleError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
      }
      if (data.hasOwnProperty('fieldPath')) {
        obj['fieldPath'] = FieldPath.constructFromObject(data['fieldPath']);
      }
      if (data.hasOwnProperty('messageArgs')) {
        obj['messageArgs'] = ApiClient.convertToType(data['messageArgs'], ['String']);
      }
      if (data.hasOwnProperty('messageKey')) {
        obj['messageKey'] = ApiClient.convertToType(data['messageKey'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member Number errorCode
   */
  exports.prototype['errorCode'] = undefined;

  /**
   * @member module:model/FieldPath fieldPath
   */
  exports.prototype['fieldPath'] = undefined;

  /**
   * @member Array.<String> messageArgs
   */
  exports.prototype['messageArgs'] = undefined;

  /**
   * @member String messageKey
   */
  exports.prototype['messageKey'] = undefined;




  return exports;
}));
