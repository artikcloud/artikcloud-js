(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskHistoryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskHistoryList'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskStatusesHistoryEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskHistoryList);
  }
}(this, function(ApiClient, TaskHistoryList) {
  'use strict';

  /**
   * The TaskStatusesHistoryEnvelope model module.
   * @module model/TaskStatusesHistoryEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskStatusesHistoryEnvelope</code>.
   * 
   * @alias module:model/TaskStatusesHistoryEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskStatusesHistoryEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskStatusesHistoryEnvelope} obj Optional instance to populate.
   * @return {module:model/TaskStatusesHistoryEnvelope} The populated <code>TaskStatusesHistoryEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = TaskHistoryList.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * Task statuses history
   * @member module:model/TaskHistoryList data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
