# ArtikCloud.DevicesSharesApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShareForDevice**](DevicesSharesApi.md#createShareForDevice) | **POST** /devices/{deviceId}/shares | Share a device 
[**deleteSharingForDevice**](DevicesSharesApi.md#deleteSharingForDevice) | **DELETE** /devices/{deviceId}/shares/{shareId} | Delete specific share of the given device id
[**getAllSharesForDevice**](DevicesSharesApi.md#getAllSharesForDevice) | **GET** /devices/{deviceId}/shares | List all shares for the given device id
[**getSharingForDevice**](DevicesSharesApi.md#getSharingForDevice) | **GET** /devices/{deviceId}/shares/{shareId} | Get specific share of the given device id


<a name="createShareForDevice"></a>
# **createShareForDevice**
> DeviceSharingId createShareForDevice(deviceId, deviceShareInfo)

Share a device 

Share a device 

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesSharesApi()

var deviceId = "deviceId_example"; // {String} Device ID.

var deviceShareInfo = new ArtikCloud.DeviceShareInfo(); // {DeviceShareInfo} Device object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createShareForDevice(deviceId, deviceShareInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 
 **deviceShareInfo** | [**DeviceShareInfo**](DeviceShareInfo.md)| Device object that needs to be added | 

### Return type

[**DeviceSharingId**](DeviceSharingId.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSharingForDevice"></a>
# **deleteSharingForDevice**
> DeviceSharingId deleteSharingForDevice(deviceId, shareId)

Delete specific share of the given device id

Delete specific share of the given device id

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesSharesApi()

var deviceId = "deviceId_example"; // {String} Device ID.

var shareId = "shareId_example"; // {String} Share ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteSharingForDevice(deviceId, shareId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 
 **shareId** | **String**| Share ID. | 

### Return type

[**DeviceSharingId**](DeviceSharingId.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllSharesForDevice"></a>
# **getAllSharesForDevice**
> DeviceSharingEnvelope getAllSharesForDevice(deviceId, opts)

List all shares for the given device id

List all shares for the given device id

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesSharesApi()

var deviceId = "deviceId_example"; // {String} Device ID.

var opts = { 
  'count': 56, // {Number} Desired count of items in the result set.
  'offset': 56 // {Number} Offset for pagination.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAllSharesForDevice(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 
 **count** | **Number**| Desired count of items in the result set. | [optional] 
 **offset** | **Number**| Offset for pagination. | [optional] 

### Return type

[**DeviceSharingEnvelope**](DeviceSharingEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSharingForDevice"></a>
# **getSharingForDevice**
> DeviceSharing getSharingForDevice(deviceId, shareId)

Get specific share of the given device id

Get specific share of the given device id

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesSharesApi()

var deviceId = "deviceId_example"; // {String} Device ID.

var shareId = "shareId_example"; // {String} Share ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSharingForDevice(deviceId, shareId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 
 **shareId** | **String**| Share ID. | 

### Return type

[**DeviceSharing**](DeviceSharing.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

