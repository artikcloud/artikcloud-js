(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskStatuses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskStatuses'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskStatusesEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskStatuses);
  }
}(this, function(ApiClient, TaskStatuses) {
  'use strict';

  /**
   * The TaskStatusesEnvelope model module.
   * @module model/TaskStatusesEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskStatusesEnvelope</code>.
   * 
   * @alias module:model/TaskStatusesEnvelope
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TaskStatusesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskStatusesEnvelope} obj Optional instance to populate.
   * @return {module:model/TaskStatusesEnvelope} The populated <code>TaskStatusesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = TaskStatuses.constructFromObject(data['data']);
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
   * Task statuses
   * @member module:model/TaskStatuses data
   */
  exports.prototype['data'] = undefined;

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
