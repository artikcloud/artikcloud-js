(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Task'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskList = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Task);
  }
}(this, function(ApiClient, Task) {
  'use strict';

  /**
   * The TaskList model module.
   * @module model/TaskList
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskList</code>.
   * 
   * @alias module:model/TaskList
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskList} obj Optional instance to populate.
   * @return {module:model/TaskList} The populated <code>TaskList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('tasks')) {
        obj['tasks'] = ApiClient.convertToType(data['tasks'], [Task]);
      }
    }
    return obj;
  }


  /**
   * Task list
   * @member Array.<module:model/Task> tasks
   */
  exports.prototype['tasks'] = undefined;




  return exports;
}));
