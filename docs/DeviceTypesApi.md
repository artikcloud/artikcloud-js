# ArtikCloud.DeviceTypesApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableManifestVersions**](DeviceTypesApi.md#getAvailableManifestVersions) | **GET** /devicetypes/{deviceTypeId}/availablemanifestversions | Get Available Manifest Versions
[**getDeviceType**](DeviceTypesApi.md#getDeviceType) | **GET** /devicetypes/{deviceTypeId} | Get Device Type
[**getDeviceTypes**](DeviceTypesApi.md#getDeviceTypes) | **GET** /devicetypes | Get Device Types
[**getDeviceTypesByApplication**](DeviceTypesApi.md#getDeviceTypesByApplication) | **GET** /applications/{appId}/devicetypes | Get Device Types by Application
[**getLatestManifestProperties**](DeviceTypesApi.md#getLatestManifestProperties) | **GET** /devicetypes/{deviceTypeId}/manifests/latest/properties | Get Latest Manifest Properties
[**getManifestProperties**](DeviceTypesApi.md#getManifestProperties) | **GET** /devicetypes/{deviceTypeId}/manifests/{version}/properties | Get manifest properties


<a name="getAvailableManifestVersions"></a>
# **getAvailableManifestVersions**
> ManifestVersionsEnvelope getAvailableManifestVersions(deviceTypeId)

Get Available Manifest Versions

Get a Device Type&#39;s available manifest versions

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DeviceTypesApi()

var deviceTypeId = "deviceTypeId_example"; // {String} deviceTypeId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAvailableManifestVersions(deviceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **String**| deviceTypeId | 

### Return type

[**ManifestVersionsEnvelope**](ManifestVersionsEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceType"></a>
# **getDeviceType**
> DeviceTypeEnvelope getDeviceType(deviceTypeId)

Get Device Type

Retrieves a Device Type

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DeviceTypesApi()

var deviceTypeId = "deviceTypeId_example"; // {String} deviceTypeId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDeviceType(deviceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **String**| deviceTypeId | 

### Return type

[**DeviceTypeEnvelope**](DeviceTypeEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceTypes"></a>
# **getDeviceTypes**
> DeviceTypesEnvelope getDeviceTypes(name, opts)

Get Device Types

Retrieves Device Types

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DeviceTypesApi()

var name = "name_example"; // {String} Device Type name

var opts = { 
  'offset': 56, // {Number} Offset for pagination.
  'count': 56, // {Number} Desired count of items in the result set
  'tags': "tags_example" // {String} Elements tagged with the list of tags. (comma separated)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDeviceTypes(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Device Type name | 
 **offset** | **Number**| Offset for pagination. | [optional] 
 **count** | **Number**| Desired count of items in the result set | [optional] 
 **tags** | **String**| Elements tagged with the list of tags. (comma separated) | [optional] 

### Return type

[**DeviceTypesEnvelope**](DeviceTypesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceTypesByApplication"></a>
# **getDeviceTypesByApplication**
> DeviceTypesEnvelope getDeviceTypesByApplication(appId, opts)

Get Device Types by Application

Get Device Types by Application

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DeviceTypesApi()

var appId = "appId_example"; // {String} Application ID.

var opts = { 
  'productInfo': true, // {Boolean} Flag to include the associated ProductInfo if present
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
api.getDeviceTypesByApplication(appId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| Application ID. | 
 **productInfo** | **Boolean**| Flag to include the associated ProductInfo if present | [optional] 
 **count** | **Number**| Desired count of items in the result set. | [optional] 
 **offset** | **Number**| Offset for pagination. | [optional] 

### Return type

[**DeviceTypesEnvelope**](DeviceTypesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLatestManifestProperties"></a>
# **getLatestManifestProperties**
> ManifestPropertiesEnvelope getLatestManifestProperties(deviceTypeId)

Get Latest Manifest Properties

Get a Device Type&#39;s manifest properties for the latest version.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DeviceTypesApi()

var deviceTypeId = "deviceTypeId_example"; // {String} Device Type ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLatestManifestProperties(deviceTypeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **String**| Device Type ID. | 

### Return type

[**ManifestPropertiesEnvelope**](ManifestPropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManifestProperties"></a>
# **getManifestProperties**
> ManifestPropertiesEnvelope getManifestProperties(deviceTypeId, version)

Get manifest properties

Get a Device Type&#39;s manifest properties for a specific version.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DeviceTypesApi()

var deviceTypeId = "deviceTypeId_example"; // {String} Device Type ID.

var version = "version_example"; // {String} Manifest Version.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getManifestProperties(deviceTypeId, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTypeId** | **String**| Device Type ID. | 
 **version** | **String**| Manifest Version. | 

### Return type

[**ManifestPropertiesEnvelope**](ManifestPropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

