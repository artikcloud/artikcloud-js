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
    root.ArtikCloud.EventFeedData = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EventFeedData model module.
   * @module model/EventFeedData
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>EventFeedData</code>.
   * WebSocket Event Feed
   * @alias module:model/EventFeedData
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>EventFeedData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventFeedData} obj Optional instance to populate.
   * @return {module:model/EventFeedData} The populated <code>EventFeedData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('event')) {
        obj['event'] = ApiClient.convertToType(data['event'], 'String');
      }
      if (data.hasOwnProperty('ts')) {
        obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * Event
   * @member String event
   */
  exports.prototype['event'] = undefined;

  /**
   * Timestamp
   * @member Number ts
   */
  exports.prototype['ts'] = undefined;

  /**
   * Message Payload
   * @member Object.<String, Object> data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
