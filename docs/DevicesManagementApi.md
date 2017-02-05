# ArtikCloud.DevicesManagementApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTasks**](DevicesManagementApi.md#createTasks) | **POST** /devicemgmt/tasks | Create a new task for one or more devices
[**deleteServerProperties**](DevicesManagementApi.md#deleteServerProperties) | **DELETE** /devicemgmt/devices/{did}/serverproperties | Deletes a device&#39;s properties.
[**getAllByDid**](DevicesManagementApi.md#getAllByDid) | **GET** /devicemgmt/devices/{did}/tasks | Returns the list of tasks for a particular device id with optional status filter.
[**getDeviceTypesInfo**](DevicesManagementApi.md#getDeviceTypesInfo) | **GET** /devicemgmt/devicetypes/{dtid} | Read a device type device management information.
[**getManifestProperties**](DevicesManagementApi.md#getManifestProperties) | **GET** /devicemgmt/devicetypes/{dtid}/manifest/properties | Get a device type&#39;s device management manifest properties
[**getProperties**](DevicesManagementApi.md#getProperties) | **GET** /devicemgmt/devices/{did}/properties | Read a device&#39;s properties.
[**getStatuses**](DevicesManagementApi.md#getStatuses) | **GET** /devicemgmt/tasks/{tid}/statuses | Returns the details and status of a task id and the individual statuses of each device id in the list.
[**getStatusesHistory**](DevicesManagementApi.md#getStatusesHistory) | **GET** /devicemgmt/tasks/{tid}/statuses/history | Returns the history of the status changes for a specific task id, or for a specific device id in that task.
[**getTaskByID**](DevicesManagementApi.md#getTaskByID) | **GET** /devicemgmt/tasks/{tid} | Returns the details and global status of a specific task id.
[**getTasks**](DevicesManagementApi.md#getTasks) | **GET** /devicemgmt/tasks | Returns the all the tasks for a device type.
[**queryProperties**](DevicesManagementApi.md#queryProperties) | **GET** /devicemgmt/devices/properties | Query device properties across devices.
[**updateDeviceTypesInfo**](DevicesManagementApi.md#updateDeviceTypesInfo) | **PUT** /devicemgmt/devicetypes/{dtid} | Updates a device type information
[**updateServerProperties**](DevicesManagementApi.md#updateServerProperties) | **POST** /devicemgmt/devices/{did}/serverproperties | Updates a device&#39;s server properties.
[**updateTask**](DevicesManagementApi.md#updateTask) | **PUT** /devicemgmt/tasks/{tid} | Updates a task for all devices - For now just allows changing the state to cancelled.
[**updateTaskForDevice**](DevicesManagementApi.md#updateTaskForDevice) | **PUT** /devicemgmt/tasks/{tid}/devices/{did} | Updates a task for a specific device - For now just allows changing the state to cancelled.


<a name="createTasks"></a>
# **createTasks**
> TaskEnvelope createTasks(taskPayload)

Create a new task for one or more devices

Create a new task for one or more devices

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var taskPayload = new ArtikCloud.TaskRequest(); // {TaskRequest} Task object to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createTasks(taskPayload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskPayload** | [**TaskRequest**](TaskRequest.md)| Task object to be created | 

### Return type

[**TaskEnvelope**](TaskEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteServerProperties"></a>
# **deleteServerProperties**
> MetadataEnvelope deleteServerProperties(did)

Deletes a device&#39;s properties.

Deletes a device&#39;s properties.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var did = "did_example"; // {String} Device ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteServerProperties(did, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID. | 

### Return type

[**MetadataEnvelope**](MetadataEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllByDid"></a>
# **getAllByDid**
> TaskByDidListEnvelope getAllByDid(did, opts)

Returns the list of tasks for a particular device id with optional status filter.

Returns the list of tasks for a particular device id with optional status filter.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var did = "did_example"; // {String} Device ID.

var opts = { 
  'count': 56, // {Number} Max results count.
  'offset': 56, // {Number} Result starting offset.
  'status': "status_example", // {String} Status filter. Comma-separated statuses.
  'order': "order_example", // {String} Sort results by a field. Valid fields: createdOn.
  'sort': "sort_example" // {String} Sort order. Valid values: asc or desc.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAllByDid(did, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID. | 
 **count** | **Number**| Max results count. | [optional] 
 **offset** | **Number**| Result starting offset. | [optional] 
 **status** | **String**| Status filter. Comma-separated statuses. | [optional] 
 **order** | **String**| Sort results by a field. Valid fields: createdOn. | [optional] 
 **sort** | **String**| Sort order. Valid values: asc or desc. | [optional] 

### Return type

[**TaskByDidListEnvelope**](TaskByDidListEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDeviceTypesInfo"></a>
# **getDeviceTypesInfo**
> DeviceTypesInfoEnvelope getDeviceTypesInfo(dtid)

Read a device type device management information.

Read a device type device management information.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var dtid = "dtid_example"; // {String} Device type ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDeviceTypesInfo(dtid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device type ID. | 

### Return type

[**DeviceTypesInfoEnvelope**](DeviceTypesInfoEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getManifestProperties"></a>
# **getManifestProperties**
> MetadataPropertiesEnvelope getManifestProperties(dtid)

Get a device type&#39;s device management manifest properties

Get a device type&#39;s device management manifest properties

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var dtid = "dtid_example"; // {String} Device Type ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getManifestProperties(dtid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 

### Return type

[**MetadataPropertiesEnvelope**](MetadataPropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProperties"></a>
# **getProperties**
> MetadataEnvelope getProperties(did, opts)

Read a device&#39;s properties.

Read a device&#39;s properties.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var did = "did_example"; // {String} Device ID.

var opts = { 
  'includeTimestamp': true // {Boolean} Include timestamp.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getProperties(did, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID. | 
 **includeTimestamp** | **Boolean**| Include timestamp. | [optional] 

### Return type

[**MetadataEnvelope**](MetadataEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatuses"></a>
# **getStatuses**
> TaskStatusesEnvelope getStatuses(tid, opts)

Returns the details and status of a task id and the individual statuses of each device id in the list.

Returns the details and status of a task id and the individual statuses of each device id in the list.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var tid = "tid_example"; // {String} Task ID.

var opts = { 
  'count': 56, // {Number} Max results count.
  'offset': 56, // {Number} Result starting offset.
  'status': "status_example", // {String} Status filter. Comma-separated statuses.
  'dids': "dids_example" // {String} Devices filter. Comma-separated device IDs.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getStatuses(tid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | **String**| Task ID. | 
 **count** | **Number**| Max results count. | [optional] 
 **offset** | **Number**| Result starting offset. | [optional] 
 **status** | **String**| Status filter. Comma-separated statuses. | [optional] 
 **dids** | **String**| Devices filter. Comma-separated device IDs. | [optional] 

### Return type

[**TaskStatusesEnvelope**](TaskStatusesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatusesHistory"></a>
# **getStatusesHistory**
> TaskStatusesHistoryEnvelope getStatusesHistory(tid, opts)

Returns the history of the status changes for a specific task id, or for a specific device id in that task.

Returns the history of the status changes for a specific task id, or for a specific device id in that task.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var tid = "tid_example"; // {String} Task ID.

var opts = { 
  'did': "did_example" // {String} Device ID. Optional.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getStatusesHistory(tid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | **String**| Task ID. | 
 **did** | **String**| Device ID. Optional. | [optional] 

### Return type

[**TaskStatusesHistoryEnvelope**](TaskStatusesHistoryEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTaskByID"></a>
# **getTaskByID**
> TaskEnvelope getTaskByID(tid)

Returns the details and global status of a specific task id.

Returns the details and global status of a specific task id.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var tid = "tid_example"; // {String} Task ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTaskByID(tid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | **String**| Task ID. | 

### Return type

[**TaskEnvelope**](TaskEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTasks"></a>
# **getTasks**
> TaskListEnvelope getTasks(dtid, opts)

Returns the all the tasks for a device type.

Returns the all the tasks for a device type.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var opts = { 
  'count': 56, // {Number} Max results count.
  'offset': 56, // {Number} Result starting offset.
  'status': "status_example", // {String} Status filter. Comma-separated statuses.
  'order': "order_example", // {String} Sort results by a field. Valid fields: createdOn.
  'sort': "sort_example" // {String} Sort order. Valid values: asc or desc.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTasks(dtid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **count** | **Number**| Max results count. | [optional] 
 **offset** | **Number**| Result starting offset. | [optional] 
 **status** | **String**| Status filter. Comma-separated statuses. | [optional] 
 **order** | **String**| Sort results by a field. Valid fields: createdOn. | [optional] 
 **sort** | **String**| Sort order. Valid values: asc or desc. | [optional] 

### Return type

[**TaskListEnvelope**](TaskListEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryProperties"></a>
# **queryProperties**
> MetadataQueryEnvelope queryProperties(dtid, opts)

Query device properties across devices.

Query device properties across devices.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var dtid = "dtid_example"; // {String} Device Type ID.

var opts = { 
  'count': 56, // {Number} Max results count.
  'offset': 56, // {Number} Result starting offset.
  'filter': "filter_example", // {String} Query filter. Comma-separated key=value pairs
  'includeTimestamp': true // {Boolean} Include timestamp.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.queryProperties(dtid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device Type ID. | 
 **count** | **Number**| Max results count. | [optional] 
 **offset** | **Number**| Result starting offset. | [optional] 
 **filter** | **String**| Query filter. Comma-separated key&#x3D;value pairs | [optional] 
 **includeTimestamp** | **Boolean**| Include timestamp. | [optional] 

### Return type

[**MetadataQueryEnvelope**](MetadataQueryEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDeviceTypesInfo"></a>
# **updateDeviceTypesInfo**
> DeviceTypesInfoEnvelope updateDeviceTypesInfo(dtid, deviceTypeInfo)

Updates a device type information

Updates a device type information

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var dtid = "dtid_example"; // {String} Device type ID.

var deviceTypeInfo = new ArtikCloud.DeviceTypesInfo(); // {DeviceTypesInfo} Device type info object to be set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateDeviceTypesInfo(dtid, deviceTypeInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dtid** | **String**| Device type ID. | 
 **deviceTypeInfo** | [**DeviceTypesInfo**](DeviceTypesInfo.md)| Device type info object to be set | 

### Return type

[**DeviceTypesInfoEnvelope**](DeviceTypesInfoEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateServerProperties"></a>
# **updateServerProperties**
> MetadataEnvelope updateServerProperties(did, deviceProperties)

Updates a device&#39;s server properties.

Updates a device&#39;s server properties.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var did = "did_example"; // {String} Device ID.

var deviceProperties = null; // {Object} Device properties object to be set


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateServerProperties(did, deviceProperties, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | **String**| Device ID. | 
 **deviceProperties** | **Object**| Device properties object to be set | 

### Return type

[**MetadataEnvelope**](MetadataEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTask"></a>
# **updateTask**
> TaskUpdateResponse updateTask(tid, taskUpdateRequest)

Updates a task for all devices - For now just allows changing the state to cancelled.

Updates a task for all devices - For now just allows changing the state to cancelled.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var tid = "tid_example"; // {String} Task ID.

var taskUpdateRequest = new ArtikCloud.TaskUpdateRequest(); // {TaskUpdateRequest} Task update request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateTask(tid, taskUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | **String**| Task ID. | 
 **taskUpdateRequest** | [**TaskUpdateRequest**](TaskUpdateRequest.md)| Task update request | 

### Return type

[**TaskUpdateResponse**](TaskUpdateResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTaskForDevice"></a>
# **updateTaskForDevice**
> DeviceTaskUpdateResponse updateTaskForDevice(tid, did, deviceTaskUpdateRequest)

Updates a task for a specific device - For now just allows changing the state to cancelled.

Updates a task for a specific device - For now just allows changing the state to cancelled.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.DevicesManagementApi()

var tid = "tid_example"; // {String} Task ID.

var did = "did_example"; // {String} Device ID.

var deviceTaskUpdateRequest = new ArtikCloud.DeviceTaskUpdateRequest(); // {DeviceTaskUpdateRequest} Device task update request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateTaskForDevice(tid, did, deviceTaskUpdateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tid** | **String**| Task ID. | 
 **did** | **String**| Device ID. | 
 **deviceTaskUpdateRequest** | [**DeviceTaskUpdateRequest**](DeviceTaskUpdateRequest.md)| Device task update request | 

### Return type

[**DeviceTaskUpdateResponse**](DeviceTaskUpdateResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

