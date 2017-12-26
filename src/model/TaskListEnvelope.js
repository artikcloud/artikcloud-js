(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskList', './TasksStatusCounts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskList'), require('./TasksStatusCounts'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskListEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskList, root.ArtikCloud.TasksStatusCounts);
  }
}(this, function(ApiClient, TaskList, TasksStatusCounts) {
  'use strict';

  /**
   * The TaskListEnvelope model module.
   * @module model/TaskListEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskListEnvelope</code>.
   * 
   * @alias module:model/TaskListEnvelope
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>TaskListEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskListEnvelope} obj Optional instance to populate.
   * @return {module:model/TaskListEnvelope} The populated <code>TaskListEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = TaskList.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('statusCounts')) {
        obj['statusCounts'] = TasksStatusCounts.constructFromObject(data['statusCounts']);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Total
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * Envelope for task list
   * @member module:model/TaskList data
   */
  exports.prototype['data'] = undefined;

  /**
   * Status counts
   * @member module:model/TasksStatusCounts statusCounts
   */
  exports.prototype['statusCounts'] = undefined;

  /**
   * Offset
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * Count
   * @member Number count
   */
  exports.prototype['count'] = undefined;




  return exports;
}));
