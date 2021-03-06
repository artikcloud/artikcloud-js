(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskByDid'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskByDid'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskByDidList = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskByDid);
  }
}(this, function(ApiClient, TaskByDid) {
  'use strict';

  /**
   * The TaskByDidList model module.
   * @module model/TaskByDidList
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskByDidList</code>.
   * 
   * @alias module:model/TaskByDidList
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskByDidList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskByDidList} obj Optional instance to populate.
   * @return {module:model/TaskByDidList} The populated <code>TaskByDidList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('tasks')) {
        obj['tasks'] = ApiClient.convertToType(data['tasks'], [TaskByDid]);
      }
    }
    return obj;
  }


  /**
   * Task list
   * @member Array.<module:model/TaskByDid> tasks
   */
  exports.prototype['tasks'] = undefined;




  return exports;
}));
