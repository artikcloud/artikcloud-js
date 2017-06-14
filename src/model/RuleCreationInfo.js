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
    root.ArtikCloud.RuleCreationInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RuleCreationInfo model module.
   * @module model/RuleCreationInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RuleCreationInfo</code>.
   * Class to create a new Rule.
   * @alias module:model/RuleCreationInfo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>RuleCreationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleCreationInfo} obj Optional instance to populate.
   * @return {module:model/RuleCreationInfo} The populated <code>RuleCreationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * Description
   * @member String description
   */
  exports.prototype['description'] = undefined;

  /**
   * Is Enabled
   * @member Boolean enabled
   */
  exports.prototype['enabled'] = undefined;

  /**
   * Name
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Rule
   * @member Object.<String, Object> rule
   */
  exports.prototype['rule'] = undefined;




  return exports;
}));
