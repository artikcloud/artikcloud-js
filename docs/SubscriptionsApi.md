# ArtikCloud.SubscriptionsApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /subscriptions | Create Subscription
[**deleteSubscription**](SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{subId} | Delete Subscription
[**getAllSubscriptions**](SubscriptionsApi.md#getAllSubscriptions) | **GET** /subscriptions | Get All Subscriptions
[**getMessages**](SubscriptionsApi.md#getMessages) | **GET** /notifications/{notifId}/messages | Get Messages
[**getSubscription**](SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{subId} | Get Subscription
[**validateSubscription**](SubscriptionsApi.md#validateSubscription) | **POST** /subscriptions/{subId}/validate | Validate Subscription


<a name="createSubscription"></a>
# **createSubscription**
> SubscriptionEnvelope createSubscription(subscriptionInfo)

Create Subscription

Create Subscription

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.SubscriptionsApi()

var subscriptionInfo = new ArtikCloud.SubscriptionInfo(); // {SubscriptionInfo} Subscription details


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSubscription(subscriptionInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionInfo** | [**SubscriptionInfo**](SubscriptionInfo.md)| Subscription details | 

### Return type

[**SubscriptionEnvelope**](SubscriptionEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> SubscriptionEnvelope deleteSubscription(subId)

Delete Subscription

Delete Subscription

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.SubscriptionsApi()

var subId = "subId_example"; // {String} Subscription ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteSubscription(subId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subId** | **String**| Subscription ID. | 

### Return type

[**SubscriptionEnvelope**](SubscriptionEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllSubscriptions"></a>
# **getAllSubscriptions**
> SubscriptionsEnvelope getAllSubscriptions(opts)

Get All Subscriptions

Get All Subscriptions

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.SubscriptionsApi()

var opts = { 
  'uid': "uid_example", // {String} User ID
  'offset': 56, // {Number} Offset for pagination.
  'count': 56 // {Number} Desired count of items in the result set.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAllSubscriptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**| User ID | [optional] 
 **offset** | **Number**| Offset for pagination. | [optional] 
 **count** | **Number**| Desired count of items in the result set. | [optional] 

### Return type

[**SubscriptionsEnvelope**](SubscriptionsEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMessages"></a>
# **getMessages**
> NotifMessagesResponse getMessages(notifId, opts)

Get Messages

Get Messages

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.SubscriptionsApi()

var notifId = "notifId_example"; // {String} Notification ID.

var opts = { 
  'offset': 56, // {Number} Offset for pagination.
  'count': 56, // {Number} Desired count of items in the result set.
  'order': "order_example" // {String} Sort order of results by ts. Either 'asc' or 'desc'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMessages(notifId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notifId** | **String**| Notification ID. | 
 **offset** | **Number**| Offset for pagination. | [optional] 
 **count** | **Number**| Desired count of items in the result set. | [optional] 
 **order** | **String**| Sort order of results by ts. Either &#39;asc&#39; or &#39;desc&#39;. | [optional] 

### Return type

[**NotifMessagesResponse**](NotifMessagesResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubscription"></a>
# **getSubscription**
> SubscriptionEnvelope getSubscription(subId)

Get Subscription

Get Subscription

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.SubscriptionsApi()

var subId = "subId_example"; // {String} Subscription ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSubscription(subId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subId** | **String**| Subscription ID. | 

### Return type

[**SubscriptionEnvelope**](SubscriptionEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateSubscription"></a>
# **validateSubscription**
> SubscriptionEnvelope validateSubscription(subId, validationCallbackRequest)

Validate Subscription

Validate Subscription

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.SubscriptionsApi()

var subId = "subId_example"; // {String} Subscription ID.

var validationCallbackRequest = new ArtikCloud.ValidationCallbackInfo(); // {ValidationCallbackInfo} Subscription validation callback request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validateSubscription(subId, validationCallbackRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subId** | **String**| Subscription ID. | 
 **validationCallbackRequest** | [**ValidationCallbackInfo**](ValidationCallbackInfo.md)| Subscription validation callback request | 

### Return type

[**SubscriptionEnvelope**](SubscriptionEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

