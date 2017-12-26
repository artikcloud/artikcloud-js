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
    root.ArtikCloud.TaskHistory = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaskHistory model module.
   * @module model/TaskHistory
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TaskHistory</code>.
   * 
   * @alias module:model/TaskHistory
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>TaskHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskHistory} obj Optional instance to populate.
   * @return {module:model/TaskHistory} The populated <code>TaskHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numAttempts')) {
        obj['numAttempts'] = ApiClient.convertToType(data['numAttempts'], 'Number');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('did')) {
        obj['did'] = ApiClient.convertToType(data['did'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('ts')) {
        obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Number of attempts
   * @member Number numAttempts
   */
  exports.prototype['numAttempts'] = undefined;

  /**
   * Error Message
   * @member String errorMessage
   */
  exports.prototype['errorMessage'] = undefined;

  /**
   * Error Code
   * @member String errorCode
   */
  exports.prototype['errorCode'] = undefined;

  /**
   * Device ID
   * @member String did
   */
  exports.prototype['did'] = undefined;

  /**
   * Status
   * @member String status
   */
  exports.prototype['status'] = undefined;

  /**
   * Timestamp of most recent status change
   * @member Number ts
   */
  exports.prototype['ts'] = undefined;




  return exports;
}));
