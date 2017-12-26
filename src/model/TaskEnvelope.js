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
    root.ArtikCloud.TaskEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Task);
  }
}(this, function(ApiClient, Task) {
  'use strict';

  /**
   * The TaskEnvelope model module.
   * @module model/TaskEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskEnvelope</code>.
   * 
   * @alias module:model/TaskEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskEnvelope} obj Optional instance to populate.
   * @return {module:model/TaskEnvelope} The populated <code>TaskEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Task.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * Task details envelope
   * @member module:model/Task data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
