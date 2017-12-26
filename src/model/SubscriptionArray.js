(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.SubscriptionArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Subscription);
  }
}(this, function(ApiClient, Subscription) {
  'use strict';

  /**
   * The SubscriptionArray model module.
   * @module model/SubscriptionArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SubscriptionArray</code>.
   * 
   * @alias module:model/SubscriptionArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SubscriptionArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionArray} obj Optional instance to populate.
   * @return {module:model/SubscriptionArray} The populated <code>SubscriptionArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptions')) {
        obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [Subscription]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/Subscription> subscriptions
   */
  exports.prototype['subscriptions'] = undefined;




  return exports;
}));
