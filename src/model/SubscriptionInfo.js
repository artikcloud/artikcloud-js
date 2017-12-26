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
    root.ArtikCloud.SubscriptionInfo = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SubscriptionInfo model module.
   * @module model/SubscriptionInfo
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>SubscriptionInfo</code>.
   * 
   * @alias module:model/SubscriptionInfo
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>SubscriptionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionInfo} obj Optional instance to populate.
   * @return {module:model/SubscriptionInfo} The populated <code>SubscriptionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('awsRegion')) {
        obj['awsRegion'] = ApiClient.convertToType(data['awsRegion'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('awsKey')) {
        obj['awsKey'] = ApiClient.convertToType(data['awsKey'], 'String');
      }
      if (data.hasOwnProperty('awsSecret')) {
        obj['awsSecret'] = ApiClient.convertToType(data['awsSecret'], 'String');
      }
      if (data.hasOwnProperty('awsKinesisStreamName')) {
        obj['awsKinesisStreamName'] = ApiClient.convertToType(data['awsKinesisStreamName'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('messageType')) {
        obj['messageType'] = ApiClient.convertToType(data['messageType'], 'String');
      }
      if (data.hasOwnProperty('ddid')) {
        obj['ddid'] = ApiClient.convertToType(data['ddid'], 'String');
      }
      if (data.hasOwnProperty('subscriptionType')) {
        obj['subscriptionType'] = ApiClient.convertToType(data['subscriptionType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('callbackUrl')) {
        obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
      }
      if (data.hasOwnProperty('sdtid')) {
        obj['sdtid'] = ApiClient.convertToType(data['sdtid'], 'String');
      }
    }
    return obj;
  }


  /**
   * AWS region (if subscriptionType is awsKinesis
   * @member String awsRegion
   */
  exports.prototype['awsRegion'] = undefined;

  /**
   * Description
   * @member String description
   */
  exports.prototype['description'] = undefined;

  /**
   * AWS key (if subscriptionType is awsKinesis
   * @member String awsKey
   */
  exports.prototype['awsKey'] = undefined;

  /**
   * AWS secret (if subscriptionType is awsKinesis
   * @member String awsSecret
   */
  exports.prototype['awsSecret'] = undefined;

  /**
   * AWS Kinesis stream name (if subscriptionType is awsKinesis
   * @member String awsKinesisStreamName
   */
  exports.prototype['awsKinesisStreamName'] = undefined;

  /**
   * User ID
   * @member String uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * Message type
   * @member String messageType
   */
  exports.prototype['messageType'] = undefined;

  /**
   * Destination device ID
   * @member String ddid
   */
  exports.prototype['ddid'] = undefined;

  /**
   * Subscription type (either httpCallback or awsKinesis, default to httpCallback)
   * @member String subscriptionType
   */
  exports.prototype['subscriptionType'] = undefined;

  /**
   * Name
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Source device ID
   * @member String sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * Callback URL
   * @member String callbackUrl
   */
  exports.prototype['callbackUrl'] = undefined;

  /**
   * Source device type ID
   * @member String sdtid
   */
  exports.prototype['sdtid'] = undefined;




  return exports;
}));
