# ArtikCloud.MonetizationApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPricingTiers**](MonetizationApi.md#createPricingTiers) | **POST** /pricing/devicetypes/{dtid}/pricingtiers | Define devicetype&#39;s pricing tiers.
[**getPricingTiers**](MonetizationApi.md#getPricingTiers) | **GET** /pricing/devices/{did}/pricingtiers | Get a device&#39;s pricing tiers
[**getThePricingTiers**](MonetizationApi.md#getThePricingTiers) | **GET** /pricing/devicetypes/{dtid}/pricingtiers | Get devicetype&#39;s pricing tiers.
[**getUpgradePath**](MonetizationApi.md#getUpgradePath) | **GET** /pricing/devices/{did}/revenueshare/upgradepath | Get upgrade path
[**setPricingTier**](MonetizationApi.md#setPricingTier) | **PUT** /pricing/devices/{did}/pricingtiers | Set a device&#39;s pricing tier


<a name="createPricingTiers"></a>
# **createPricingTiers**
> DeviceTypePricingTier createPricingTiers(dtid, pricingTierInfo)

Define devicetype&#39;s pricing tiers.

Define devicetype&#39;s pricing tiers.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MonetizationApi()

var dtid = "dtid_example"; // {String} DeviceType ID

var pricingTierInfo = new ArtikCloud.DeviceTypePricingTier(); // {DeviceTypePricingTier} Pricing tier info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createPricingTiers(dtid, pricingTierInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| DeviceType ID | 
 **pricingTierInfo** | [**DeviceTypePricingTier**](DeviceTypePricingTier.md)| Pricing tier info | 

### Return type

[**DeviceTypePricingTier**](DeviceTypePricingTier.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPricingTiers"></a>
# **getPricingTiers**
> DevicePricingTiersEnvelope getPricingTiers(did, opts)

Get a device&#39;s pricing tiers

Get a device&#39;s pricing tiers

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MonetizationApi()

var did = "did_example"; // {String} Device ID

var opts = { 
  'active': true // {Boolean} Filter by active
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPricingTiers(did, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID | 
 **active** | **Boolean**| Filter by active | [optional] 

### Return type

[**DevicePricingTiersEnvelope**](DevicePricingTiersEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThePricingTiers"></a>
# **getThePricingTiers**
> DeviceTypePricingTiersEnvelope getThePricingTiers(dtid, version)

Get devicetype&#39;s pricing tiers.

Get devicetype&#39;s pricing tiers.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MonetizationApi()

var dtid = "dtid_example"; // {String} DeviceType ID

var version = 56; // {Number} Version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getThePricingTiers(dtid, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| DeviceType ID | 
 **version** | **Number**| Version | 

### Return type

[**DeviceTypePricingTiersEnvelope**](DeviceTypePricingTiersEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUpgradePath"></a>
# **getUpgradePath**
> UpgradePathEnvelope getUpgradePath(did, action)

Get upgrade path

Get upgrade path

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MonetizationApi()

var did = "did_example"; // {String} Device ID

var action = "action_example"; // {String} Action to perform


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUpgradePath(did, action, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID | 
 **action** | **String**| Action to perform | 

### Return type

[**UpgradePathEnvelope**](UpgradePathEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setPricingTier"></a>
# **setPricingTier**
> DevicePricingTierEnvelope setPricingTier(did, pricingTier)

Set a device&#39;s pricing tier

Set a device&#39;s pricing tier

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.MonetizationApi()

var did = "did_example"; // {String} Device ID

var pricingTier = new ArtikCloud.DevicePricingTierRequest(); // {DevicePricingTierRequest} Pricing tier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.setPricingTier(did, pricingTier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID | 
 **pricingTier** | [**DevicePricingTierRequest**](DevicePricingTierRequest.md)| Pricing tier | 

### Return type

[**DevicePricingTierEnvelope**](DevicePricingTierEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

