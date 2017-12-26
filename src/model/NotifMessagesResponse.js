(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NotifMessageArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotifMessageArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.NotifMessagesResponse = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.NotifMessageArray);
  }
}(this, function(ApiClient, NotifMessageArray) {
  'use strict';

  /**
   * The NotifMessagesResponse model module.
   * @module model/NotifMessagesResponse
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>NotifMessagesResponse</code>.
   * 
   * @alias module:model/NotifMessagesResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>NotifMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotifMessagesResponse} obj Optional instance to populate.
   * @return {module:model/NotifMessagesResponse} The populated <code>NotifMessagesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = NotifMessageArray.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member Number total
   */
  exports.prototype['total'] = undefined;

  /**
   * @member Number offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member module:model/NotifMessageArray data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member String order
   */
  exports.prototype['order'] = undefined;




  return exports;
}));
