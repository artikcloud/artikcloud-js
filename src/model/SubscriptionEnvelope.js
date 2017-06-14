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
    root.ArtikCloud.SubscriptionEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Subscription);
  }
}(this, function(ApiClient, Subscription) {
  'use strict';

  /**
   * The SubscriptionEnvelope model module.
   * @module model/SubscriptionEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SubscriptionEnvelope</code>.
   * 
   * @alias module:model/SubscriptionEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SubscriptionEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionEnvelope} obj Optional instance to populate.
   * @return {module:model/SubscriptionEnvelope} The populated <code>SubscriptionEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Subscription.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/Subscription data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
