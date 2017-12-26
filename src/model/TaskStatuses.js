(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskParameters', './TaskStatus', './TaskStatusCounts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskParameters'), require('./TaskStatus'), require('./TaskStatusCounts'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskStatuses = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskParameters, root.ArtikCloud.TaskStatus, root.ArtikCloud.TaskStatusCounts);
  }
}(this, function(ApiClient, TaskParameters, TaskStatus, TaskStatusCounts) {
  'use strict';

  /**
   * The TaskStatuses model module.
   * @module model/TaskStatuses
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskStatuses</code>.
   * 
   * @alias module:model/TaskStatuses
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>TaskStatuses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskStatuses} obj Optional instance to populate.
   * @return {module:model/TaskStatuses} The populated <code>TaskStatuses</code> instance.
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
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Number');
      }
      if (data.hasOwnProperty('dtid')) {
        obj['dtid'] = ApiClient.convertToType(data['dtid'], 'String');
      }
      if (data.hasOwnProperty('statusCounts')) {
        obj['statusCounts'] = TaskStatusCounts.constructFromObject(data['statusCounts']);
      }
      if (data.hasOwnProperty('property')) {
        obj['property'] = ApiClient.convertToType(data['property'], 'String');
      }
      if (data.hasOwnProperty('statuses')) {
        obj['statuses'] = ApiClient.convertToType(data['statuses'], [TaskStatus]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dids')) {
        obj['dids'] = ApiClient.convertToType(data['dids'], ['String']);
      }
      if (data.hasOwnProperty('taskParameters')) {
        obj['taskParameters'] = TaskParameters.constructFromObject(data['taskParameters']);
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
   * Modified on
   * @member Number modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;

  /**
   * Device Type ID
   * @member String dtid
   */
  exports.prototype['dtid'] = undefined;

  /**
   * Status counts
   * @member module:model/TaskStatusCounts statusCounts
   */
  exports.prototype['statusCounts'] = undefined;

  /**
   * Property
   * @member String property
   */
  exports.prototype['property'] = undefined;

  /**
   * Statuses
   * @member Array.<module:model/TaskStatus> statuses
   */
  exports.prototype['statuses'] = undefined;

  /**
   * Task ID
   * @member String id
   */
  exports.prototype['id'] = undefined;

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

  /**
   * Created on
   * @member Number createdOn
   */
  exports.prototype['createdOn'] = undefined;

  /**
   * Status
   * @member String status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
