(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskRequest = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskParameters);
  }
}(this, function(ApiClient, TaskParameters) {
  'use strict';

  /**
   * The TaskRequest model module.
   * @module model/TaskRequest
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskRequest</code>.
   * 
   * @alias module:model/TaskRequest
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>TaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskRequest} obj Optional instance to populate.
   * @return {module:model/TaskRequest} The populated <code>TaskRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
      }
      if (data.hasOwnProperty('taskType')) {
        obj['taskType'] = ApiClient.convertToType(data['taskType'], 'String');
      }
      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('property')) {
        obj['property'] = ApiClient.convertToType(data['property'], 'String');
      }
      if (data.hasOwnProperty('dids')) {
        obj['dids'] = ApiClient.convertToType(data['dids'], ['String']);
      }
      if (data.hasOwnProperty('taskParameters')) {
        obj['taskParameters'] = TaskParameters.constructFromObject(data['taskParameters']);
      }
    }
    return obj;
  }


  /**
   * Filter
   * @member String filter
   */
  exports.prototype['filter'] = undefined;

  /**
   * Task type
   * @member String taskType
   */
  exports.prototype['taskType'] = undefined;

  /**
   * Device Type ID
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * Property
   * @member String property
   */
  exports.prototype['property'] = undefined;

  /**
   * Device IDs
   * @member Array.<String> dids
   */
  exports.prototype['dids'] = undefined;

  /**
   * Task parameters
   * @member module:model/TaskParameters taskParameters
   */
  exports.prototype['taskParameters'] = undefined;




  return exports;
}));
