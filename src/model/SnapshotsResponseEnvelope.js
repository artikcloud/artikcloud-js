(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SnapshotResponses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SnapshotResponses'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.SnapshotsResponseEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.SnapshotResponses);
  }
}(this, function(ApiClient, SnapshotResponses) {
  'use strict';

  /**
   * The SnapshotsResponseEnvelope model module.
   * @module model/SnapshotsResponseEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SnapshotsResponseEnvelope</code>.
   * 
   * @alias module:model/SnapshotsResponseEnvelope
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>SnapshotsResponseEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SnapshotsResponseEnvelope} obj Optional instance to populate.
   * @return {module:model/SnapshotsResponseEnvelope} The populated <code>SnapshotsResponseEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = SnapshotResponses.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member module:model/SnapshotResponses data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;




  return exports;
}));
