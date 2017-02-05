(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskByDidList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskByDidList'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskByDidListEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskByDidList);
  }
}(this, function(ApiClient, TaskByDidList) {
  'use strict';

  /**
   * The TaskByDidListEnvelope model module.
   * @module model/TaskByDidListEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskByDidListEnvelope</code>.
   * 
   * @alias module:model/TaskByDidListEnvelope
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TaskByDidListEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskByDidListEnvelope} obj Optional instance to populate.
   * @return {module:model/TaskByDidListEnvelope} The populated <code>TaskByDidListEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = TaskByDidList.constructFromObject(data['data']);
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
   * Total number of tasks in list
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * Device task list envelope
   * @member module:model/TaskByDidList data
   */
  exports.prototype['data'] = undefined;

  /**
   * Offset if using pagination
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * Count for current result set
   * @member Number count
   */
  exports.prototype['count'] = undefined;




  return exports;
}));
