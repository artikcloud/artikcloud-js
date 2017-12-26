(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskStatusCounts = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaskStatusCounts model module.
   * @module model/TaskStatusCounts
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskStatusCounts</code>.
   * 
   * @alias module:model/TaskStatusCounts
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>TaskStatusCounts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskStatusCounts} obj Optional instance to populate.
   * @return {module:model/TaskStatusCounts} The populated <code>TaskStatusCounts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numFailed')) {
        obj['numFailed'] = ApiClient.convertToType(data['numFailed'], 'Number');
      }
      if (data.hasOwnProperty('numCancelled')) {
        obj['numCancelled'] = ApiClient.convertToType(data['numCancelled'], 'Number');
      }
      if (data.hasOwnProperty('totalDevices')) {
        obj['totalDevices'] = ApiClient.convertToType(data['totalDevices'], 'Number');
      }
      if (data.hasOwnProperty('numCompleted')) {
        obj['numCompleted'] = ApiClient.convertToType(data['numCompleted'], 'Number');
      }
      if (data.hasOwnProperty('numSucceeded')) {
        obj['numSucceeded'] = ApiClient.convertToType(data['numSucceeded'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Number failed
   * @member Number numFailed
   */
  exports.prototype['numFailed'] = undefined;

  /**
   * Number cancelled
   * @member Number numCancelled
   */
  exports.prototype['numCancelled'] = undefined;

  /**
   * Total devices
   * @member Number totalDevices
   */
  exports.prototype['totalDevices'] = undefined;

  /**
   * Number completed
   * @member Number numCompleted
   */
  exports.prototype['numCompleted'] = undefined;

  /**
   * Number succeeded
   * @member Number numSucceeded
   */
  exports.prototype['numSucceeded'] = undefined;




  return exports;
}));
