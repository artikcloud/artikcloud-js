(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TaskStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceTaskUpdateResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TaskStatus);
  }
}(this, function(ApiClient, TaskStatus) {
  'use strict';

  /**
   * The DeviceTaskUpdateResponse model module.
   * @module model/DeviceTaskUpdateResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceTaskUpdateResponse</code>.
   * 
   * @alias module:model/DeviceTaskUpdateResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeviceTaskUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTaskUpdateResponse} obj Optional instance to populate.
   * @return {module:model/DeviceTaskUpdateResponse} The populated <code>DeviceTaskUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = TaskStatus.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * Task status
   * @member module:model/TaskStatus data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
