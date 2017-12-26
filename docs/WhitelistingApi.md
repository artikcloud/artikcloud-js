# ArtikCloud.WhitelistingApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVdid**](WhitelistingApi.md#deleteVdid) | **DELETE** /devicetypes/{dtid}/whitelist/{vdid} | Delete a vdid from the devicetype whitelist.
[**deleteWhitelistCertificate**](WhitelistingApi.md#deleteWhitelistCertificate) | **DELETE** /devicetypes/{dtid}/whitelist/certificates/{cid} | Delete a whitelist certificate associated with a devicetype.
[**enableWhitelist**](WhitelistingApi.md#enableWhitelist) | **PUT** /devicetypes/:dtid/whitelist/enable | Enable or disble whitelist feature of a device type
[**getRejectedRowList**](WhitelistingApi.md#getRejectedRowList) | **GET** /devicetypes/{dtid}/whitelist/{uploadId}/rejectedRows | Get the list of rejected rows for an uploaded CSV file.
[**getUploadStatus**](WhitelistingApi.md#getUploadStatus) | **GET** /devicetypes/{dtid}/whitelist/{uploadId}/status | Get the status of a uploaded CSV file.
[**getWhitelist**](WhitelistingApi.md#getWhitelist) | **GET** /devicetypes/{dtid}/whitelist | Get whitelisted vdids of a device type.
[**getWhitelistCertificate**](WhitelistingApi.md#getWhitelistCertificate) | **GET** /devicetypes/{dtid}/whitelist/certificates | Get whitelist certificate of device type.
[**getWhitelistStatus**](WhitelistingApi.md#getWhitelistStatus) | **GET** /devicetypes/{dtid}/whitelist/status | Get the status of whitelist feature (enabled/disabled) of a device type.
[**uploadCSV**](WhitelistingApi.md#uploadCSV) | **POST** /devicetypes/{dtid}/whitelist | Upload a CSV file related to the Device Type.


<a name="deleteVdid"></a>
# **deleteVdid**
> WhitelistEnvelope deleteVdid(dtid, vdid)

Delete a vdid from the devicetype whitelist.

Delete a vdid from the devicetype whitelist.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var vdid = "vdid_example"; // {String} Vendor Device ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteVdid(dtid, vdid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **vdid** | **String**| Vendor Device ID. | 

### Return type

[**WhitelistEnvelope**](WhitelistEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteWhitelistCertificate"></a>
# **deleteWhitelistCertificate**
> WhitelistEnvelope deleteWhitelistCertificate(dtid, cid)

Delete a whitelist certificate associated with a devicetype.

Delete a whitelist certificate associated with a devicetype.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var cid = "cid_example"; // {String} Certificate ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteWhitelistCertificate(dtid, cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **cid** | **String**| Certificate ID. | 

### Return type

[**WhitelistEnvelope**](WhitelistEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="enableWhitelist"></a>
# **enableWhitelist**
> WhitelistEnvelope enableWhitelist(dtid, deviceTypeUpdateInfo)

Enable or disble whitelist feature of a device type

Enable or disble whitelist feature of a device type

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var deviceTypeUpdateInfo = new ArtikCloud.DeviceTypeUpdateInput(); // {DeviceTypeUpdateInput} Device type update input.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.enableWhitelist(dtid, deviceTypeUpdateInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **deviceTypeUpdateInfo** | [**DeviceTypeUpdateInput**](DeviceTypeUpdateInput.md)| Device type update input. | 

### Return type

[**WhitelistEnvelope**](WhitelistEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRejectedRowList"></a>
# **getRejectedRowList**
> RejectedCSVRowsEnvelope getRejectedRowList(dtid, uploadId, opts)

Get the list of rejected rows for an uploaded CSV file.

Get the list of rejected rows for an uploaded CSV file.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device type id related to the uploaded CSV file.

var uploadId = "uploadId_example"; // {String} Upload id related to the uploaded CSV file.

var opts = { 
  'count': 56, // {Number} Max results count.
  'offset': 56 // {Number} Result starting offset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRejectedRowList(dtid, uploadId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device type id related to the uploaded CSV file. | 
 **uploadId** | **String**| Upload id related to the uploaded CSV file. | 
 **count** | **Number**| Max results count. | [optional] 
 **offset** | **Number**| Result starting offset. | [optional] 

### Return type

[**RejectedCSVRowsEnvelope**](RejectedCSVRowsEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUploadStatus"></a>
# **getUploadStatus**
> UploadStatusEnvelope getUploadStatus(dtid, uploadId)

Get the status of a uploaded CSV file.

Get the status of a uploaded CSV file.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device type id related to the uploaded CSV file.

var uploadId = "uploadId_example"; // {String} Upload id related to the uploaded CSV file.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUploadStatus(dtid, uploadId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device type id related to the uploaded CSV file. | 
 **uploadId** | **String**| Upload id related to the uploaded CSV file. | 

### Return type

[**UploadStatusEnvelope**](UploadStatusEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWhitelist"></a>
# **getWhitelist**
> WhitelistResultEnvelope getWhitelist(dtid, opts)

Get whitelisted vdids of a device type.

Get whitelisted vdids of a device type.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var opts = { 
  'count': 56, // {Number} Max results count.
  'offset': 56 // {Number} Result starting offset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getWhitelist(dtid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **count** | **Number**| Max results count. | [optional] 
 **offset** | **Number**| Result starting offset. | [optional] 

### Return type

[**WhitelistResultEnvelope**](WhitelistResultEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWhitelistCertificate"></a>
# **getWhitelistCertificate**
> CertificateEnvelope getWhitelistCertificate(dtid)

Get whitelist certificate of device type.

Get whitelist certificate of device type.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getWhitelistCertificate(dtid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 

### Return type

[**CertificateEnvelope**](CertificateEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWhitelistStatus"></a>
# **getWhitelistStatus**
> WhitelistEnvelope getWhitelistStatus(dtid)

Get the status of whitelist feature (enabled/disabled) of a device type.

Get the status of whitelist feature (enabled/disabled) of a device type.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getWhitelistStatus(dtid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 

### Return type

[**WhitelistEnvelope**](WhitelistEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uploadCSV"></a>
# **uploadCSV**
> UploadIdEnvelope uploadCSV(dtid, file)

Upload a CSV file related to the Device Type.

Upload a CSV file related to the Device Type.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.WhitelistingApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var file = "B"; // {String} Device Type ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.uploadCSV(dtid, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **file** | **String**| Device Type ID. | 

### Return type

[**UploadIdEnvelope**](UploadIdEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

