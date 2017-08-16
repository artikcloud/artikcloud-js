# ArtikCloud.DevicesStatusApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceStatus**](DevicesStatusApi.md#getDeviceStatus) | **GET** /devices/{deviceId}/status | Get Device Status
[**getDevicesStatus**](DevicesStatusApi.md#getDevicesStatus) | **GET** /devices/status | Get Devices Status
[**putDeviceStatus**](DevicesStatusApi.md#putDeviceStatus) | **PUT** /devices/{deviceId}/status | Update Device Status


<a name="getDeviceStatus"></a>
# **getDeviceStatus**
> DeviceStatus getDeviceStatus(deviceId, opts)

Get Device Status

Get Device Status

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesStatusApi()

var deviceId = "deviceId_example"; // {String} Device ID.

var opts = { 
  'includeSnapshot': true, // {Boolean} Include device snapshot into the response
  'includeSnapshotTimestamp': true // {Boolean} Include device snapshot timestamp into the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDeviceStatus(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 
 **includeSnapshot** | **Boolean**| Include device snapshot into the response | [optional] 
 **includeSnapshotTimestamp** | **Boolean**| Include device snapshot timestamp into the response | [optional] 

### Return type

[**DeviceStatus**](DeviceStatus.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDevicesStatus"></a>
# **getDevicesStatus**
> DeviceStatusBatch getDevicesStatus(dids, opts)

Get Devices Status

Get Devices Status

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesStatusApi()

var dids = "dids_example"; // {String} List of device ids (comma-separated) for which the statuses are requested.

var opts = { 
  'includeSnapshot': true, // {Boolean} Include device snapshot into the response
  'includeSnapshotTimestamp': true // {Boolean} Include device snapshot timestamp into the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDevicesStatus(dids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dids** | **String**| List of device ids (comma-separated) for which the statuses are requested. | 
 **includeSnapshot** | **Boolean**| Include device snapshot into the response | [optional] 
 **includeSnapshotTimestamp** | **Boolean**| Include device snapshot timestamp into the response | [optional] 

### Return type

[**DeviceStatusBatch**](DeviceStatusBatch.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putDeviceStatus"></a>
# **putDeviceStatus**
> DeviceStatus putDeviceStatus(deviceId, opts)

Update Device Status

Update Device Status

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesStatusApi()

var deviceId = "deviceId_example"; // {String} Device ID.

var opts = { 
  'body': new ArtikCloud.DeviceStatusPut() // {DeviceStatusPut} Body
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.putDeviceStatus(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 
 **body** | [**DeviceStatusPut**](DeviceStatusPut.md)| Body | [optional] 

### Return type

[**DeviceStatus**](DeviceStatus.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

