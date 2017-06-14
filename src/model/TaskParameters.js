(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './UpdateParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UpdateParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TaskParameters = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.UpdateParameters);
  }
}(this, function(ApiClient, UpdateParameters) {
  'use strict';

  /**
   * The TaskParameters model module.
   * @module model/TaskParameters
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskParameters</code>.
   * 
   * @alias module:model/TaskParameters
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TaskParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskParameters} obj Optional instance to populate.
   * @return {module:model/TaskParameters} The populated <code>TaskParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('expiresAfter')) {
        obj['expiresAfter'] = ApiClient.convertToType(data['expiresAfter'], 'Number');
      }
      if (data.hasOwnProperty('scheduledOn')) {
        obj['scheduledOn'] = ApiClient.convertToType(data['scheduledOn'], 'Number');
      }
      if (data.hasOwnProperty('update')) {
        obj['update'] = UpdateParameters.constructFromObject(data['update']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }


  /**
   * Expire time in seconds
   * @member Number expiresAfter
   */
  exports.prototype['expiresAfter'] = undefined;

  /**
   * Future scheduled time
   * @member Number scheduledOn
   */
  exports.prototype['scheduledOn'] = undefined;

  /**
   * Update parameters
   * @member module:model/UpdateParameters update
   */
  exports.prototype['update'] = undefined;

  /**
   * Value to write
   * @member String value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
