# ArtikCloud.ExportApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportRequest**](ExportApi.md#exportRequest) | **POST** /messages/export | Create Export Request
[**getExportHistory**](ExportApi.md#getExportHistory) | **GET** /messages/export/history | Get Export History
[**getExportResult**](ExportApi.md#getExportResult) | **GET** /messages/export/{exportId}/result | Get Export Result
[**getExportStatus**](ExportApi.md#getExportStatus) | **GET** /messages/export/{exportId}/status | Check Export Status


<a name="exportRequest"></a>
# **exportRequest**
> ExportRequestResponse exportRequest(exportRequestInfo)

Create Export Request

Export normalized messages. The following input combinations are supported:&lt;br/&gt;&lt;table&gt;&lt;tr&gt;&lt;th&gt;Combination&lt;/th&gt;&lt;th&gt;Parameters&lt;/th&gt;&lt;th&gt;Description&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by users&lt;/td&gt;&lt;td&gt;uids&lt;/td&gt;&lt;td&gt;Search by a list of User IDs. For each user in the list, the current authenticated user must have read access over the specified user.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by devices&lt;/td&gt;&lt;td&gt;sdids&lt;/td&gt;&lt;td&gt;Search by Source Device IDs.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by device types&lt;/td&gt;&lt;td&gt;uids,sdtids&lt;/td&gt;&lt;td&gt;Search by list of Source Device Type IDs for the given list of users.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by trial&lt;/td&gt;&lt;td&gt;trialId&lt;/td&gt;&lt;td&gt;Search by Trial ID.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Get by combination of parameters&lt;/td&gt;&lt;td&gt;uids,sdids,sdtids&lt;/td&gt;&lt;td&gt;Search by list of Source Device IDs. Each Device ID must belong to a Source Device Type ID and a User ID.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Common&lt;/td&gt;&lt;td&gt;startDate,endDate,order,format,url,csvHeaders&lt;/td&gt;&lt;td&gt;Parameters that can be used with the above combinations.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.ExportApi()

var exportRequestInfo = new ArtikCloud.ExportRequestInfo(); // {ExportRequestInfo} ExportRequest object that is passed in the body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.exportRequest(exportRequestInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportRequestInfo** | [**ExportRequestInfo**](ExportRequestInfo.md)| ExportRequest object that is passed in the body | 

### Return type

[**ExportRequestResponse**](ExportRequestResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExportHistory"></a>
# **getExportHistory**
> ExportHistoryResponse getExportHistory(opts)

Get Export History

Get the history of export requests.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.ExportApi()

var opts = { 
  'trialId': "trialId_example", // {String} Filter by trialId.
  'count': 56, // {Number} Pagination count.
  'offset': 56 // {Number} Pagination offset.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getExportHistory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trialId** | **String**| Filter by trialId. | [optional] 
 **count** | **Number**| Pagination count. | [optional] 
 **offset** | **Number**| Pagination offset. | [optional] 

### Return type

[**ExportHistoryResponse**](ExportHistoryResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExportResult"></a>
# **getExportResult**
> &#39;String&#39; getExportResult(exportId)

Get Export Result

Retrieve result of the export query in tgz format. The tar file may contain one or more files with the results.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.ExportApi()

var exportId = "exportId_example"; // {String} Export ID of the export query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getExportResult(exportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **String**| Export ID of the export query. | 

### Return type

**&#39;String&#39;**

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExportStatus"></a>
# **getExportStatus**
> ExportStatusResponse getExportStatus(exportId)

Check Export Status

Check status of the export query.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.ExportApi()

var exportId = "exportId_example"; // {String} Export ID of the export query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getExportStatus(exportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **String**| Export ID of the export query. | 

### Return type

[**ExportStatusResponse**](ExportStatusResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

