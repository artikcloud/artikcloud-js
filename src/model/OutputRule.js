(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RuleError', './RuleWarningOutput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RuleError'), require('./RuleWarningOutput'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.OutputRule = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.RuleError, root.ArtikCloud.RuleWarningOutput);
  }
}(this, function(ApiClient, RuleError, RuleWarningOutput) {
  'use strict';

  /**
   * The OutputRule model module.
   * @module model/OutputRule
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>OutputRule</code>.
   * Rule information.
   * @alias module:model/OutputRule
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>OutputRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutputRule} obj Optional instance to populate.
   * @return {module:model/OutputRule} The populated <code>OutputRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('aid')) {
        obj['aid'] = ApiClient.convertToType(data['aid'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = RuleError.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
      if (data.hasOwnProperty('invalidatedOn')) {
        obj['invalidatedOn'] = ApiClient.convertToType(data['invalidatedOn'], 'Number');
      }
      if (data.hasOwnProperty('languageVersion')) {
        obj['languageVersion'] = ApiClient.convertToType(data['languageVersion'], 'Number');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], {'String': Object});
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('warning')) {
        obj['warning'] = RuleWarningOutput.constructFromObject(data['warning']);
      }
    }
    return obj;
  }


  /**
   * @member String aid
   */
  exports.prototype['aid'] = undefined;

  /**
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;

  /**
   * @member String description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member Boolean enabled
   */
  exports.prototype['enabled'] = undefined;

  /**
   * @member module:model/RuleError error
   */
  exports.prototype['error'] = undefined;

  /**
   * @member String id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member Number index
   */
  exports.prototype['index'] = undefined;

  /**
   * @member Number invalidatedOn
   */
  exports.prototype['invalidatedOn'] = undefined;

  /**
   * @member Number languageVersion
   */
  exports.prototype['languageVersion'] = undefined;

  /**
   * @member Number modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;

  /**
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member Object.<String, Object> rule
   */
  exports.prototype['rule'] = undefined;

  /**
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member module:model/RuleWarningOutput warning
   */
  exports.prototype['warning'] = undefined;




  return exports;
}));
