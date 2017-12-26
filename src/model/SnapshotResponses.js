(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SnapshotResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SnapshotResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.SnapshotResponses = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.SnapshotResponse);
  }
}(this, function(ApiClient, SnapshotResponse) {
  'use strict';

  /**
   * The SnapshotResponses model module.
   * @module model/SnapshotResponses
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SnapshotResponses</code>.
   * 
   * @alias module:model/SnapshotResponses
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>SnapshotResponses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SnapshotResponses} obj Optional instance to populate.
   * @return {module:model/SnapshotResponses} The populated <code>SnapshotResponses</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('sdids')) {
        obj['sdids'] = ApiClient.convertToType(data['sdids'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [SnapshotResponse]);
      }
    }
    return obj;
  }


  /**
   * @member String sdids
   */
  exports.prototype['sdids'] = undefined;

  /**
   * @member Number size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member Array.<module:model/SnapshotResponse> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
