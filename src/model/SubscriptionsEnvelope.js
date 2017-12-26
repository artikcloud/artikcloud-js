(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SubscriptionArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubscriptionArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.SubscriptionsEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.SubscriptionArray);
  }
}(this, function(ApiClient, SubscriptionArray) {
  'use strict';

  /**
   * The SubscriptionsEnvelope model module.
   * @module model/SubscriptionsEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SubscriptionsEnvelope</code>.
   * 
   * @alias module:model/SubscriptionsEnvelope
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>SubscriptionsEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionsEnvelope} obj Optional instance to populate.
   * @return {module:model/SubscriptionsEnvelope} The populated <code>SubscriptionsEnvelope</code> instance.
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
        obj['data'] = SubscriptionArray.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
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
   * @member module:model/SubscriptionArray data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member Number count
   */
  exports.prototype['count'] = undefined;




  return exports;
}));
