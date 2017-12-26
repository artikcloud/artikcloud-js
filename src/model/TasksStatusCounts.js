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
    root.ArtikCloud.TasksStatusCounts = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TasksStatusCounts model module.
   * @module model/TasksStatusCounts
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TasksStatusCounts</code>.
   * 
   * @alias module:model/TasksStatusCounts
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TasksStatusCounts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TasksStatusCounts} obj Optional instance to populate.
   * @return {module:model/TasksStatusCounts} The populated <code>TasksStatusCounts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('CANCELLED')) {
        obj['CANCELLED'] = ApiClient.convertToType(data['CANCELLED'], 'Number');
      }
      if (data.hasOwnProperty('COMPLETE')) {
        obj['COMPLETE'] = ApiClient.convertToType(data['COMPLETE'], 'Number');
      }
      if (data.hasOwnProperty('PROCESSING')) {
        obj['PROCESSING'] = ApiClient.convertToType(data['PROCESSING'], 'Number');
      }
      if (data.hasOwnProperty('REQUESTED')) {
        obj['REQUESTED'] = ApiClient.convertToType(data['REQUESTED'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Cancelled
   * @member Number CANCELLED
   */
  exports.prototype['CANCELLED'] = undefined;

  /**
   * Complete
   * @member Number COMPLETE
   */
  exports.prototype['COMPLETE'] = undefined;

  /**
   * Processing
   * @member Number PROCESSING
   */
  exports.prototype['PROCESSING'] = undefined;

  /**
   * Requested
   * @member Number REQUESTED
   */
  exports.prototype['REQUESTED'] = undefined;




  return exports;
}));
