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
    root.ArtikCloud.RuleUpdateInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RuleUpdateInfo model module.
   * @module model/RuleUpdateInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>RuleUpdateInfo</code>.
   * Class to update an existing Rule.
   * @alias module:model/RuleUpdateInfo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>RuleUpdateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleUpdateInfo} obj Optional instance to populate.
   * @return {module:model/RuleUpdateInfo} The populated <code>RuleUpdateInfo</code> instance.
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
