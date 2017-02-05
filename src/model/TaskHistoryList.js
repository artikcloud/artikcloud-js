(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskHistory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskHistory'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskHistoryList = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskHistory);
  }
}(this, function(ApiClient, TaskHistory) {
  'use strict';

  /**
   * The TaskHistoryList model module.
   * @module model/TaskHistoryList
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskHistoryList</code>.
   * 
   * @alias module:model/TaskHistoryList
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskHistoryList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskHistoryList} obj Optional instance to populate.
   * @return {module:model/TaskHistoryList} The populated <code>TaskHistoryList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('history')) {
        obj['history'] = ApiClient.convertToType(data['history'], [TaskHistory]);
      }
    }
    return obj;
  }


  /**
   * Status history
   * @member Array.<module:model/TaskHistory> history
   */
  exports.prototype['history'] = undefined;




  return exports;
}));
