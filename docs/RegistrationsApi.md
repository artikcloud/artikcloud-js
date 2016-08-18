# ArtikCloud.RegistrationsApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmUser**](RegistrationsApi.md#confirmUser) | **PUT** /devices/registrations/pin | Confirm User
[**getRequestStatusForUser**](RegistrationsApi.md#getRequestStatusForUser) | **GET** /devices/registrations/{requestId}/status | Get Request Status For User
[**unregisterDevice**](RegistrationsApi.md#unregisterDevice) | **DELETE** /devices/{deviceId}/registrations | Unregister Device


<a name="confirmUser"></a>
# **confirmUser**
> DeviceRegConfirmUserResponseEnvelope confirmUser(registrationInfo)

Confirm User

This call updates the registration request issued earlier by associating it with an authenticated user and captures all additional information required to add a new device.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RegistrationsApi()

var registrationInfo = new ArtikCloud.DeviceRegConfirmUserRequest(); // {DeviceRegConfirmUserRequest} Device Registration information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.confirmUser(registrationInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationInfo** | [**DeviceRegConfirmUserRequest**](DeviceRegConfirmUserRequest.md)| Device Registration information. | 

### Return type

[**DeviceRegConfirmUserResponseEnvelope**](DeviceRegConfirmUserResponseEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRequestStatusForUser"></a>
# **getRequestStatusForUser**
> DeviceRegStatusResponseEnvelope getRequestStatusForUser(requestId)

Get Request Status For User

This call checks the status of the request so users can poll and know when registration is complete.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RegistrationsApi()

var requestId = "requestId_example"; // {String} Request ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRequestStatusForUser(requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Request ID. | 

### Return type

[**DeviceRegStatusResponseEnvelope**](DeviceRegStatusResponseEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="unregisterDevice"></a>
# **unregisterDevice**
> UnregisterDeviceResponseEnvelope unregisterDevice(deviceId)

Unregister Device

This call clears any associations from the secure device registration.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RegistrationsApi()

var deviceId = "deviceId_example"; // {String} Device ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.unregisterDevice(deviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID. | 

### Return type

[**UnregisterDeviceResponseEnvelope**](UnregisterDeviceResponseEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

