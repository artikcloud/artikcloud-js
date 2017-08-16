# ArtikCloud.UsersApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserProperties**](UsersApi.md#createUserProperties) | **POST** /users/{userId}/properties | Create User Application Properties
[**deleteUserProperties**](UsersApi.md#deleteUserProperties) | **DELETE** /users/{userId}/properties | Delete User Application Properties
[**getSelf**](UsersApi.md#getSelf) | **GET** /users/self | Get Current User Profile
[**getUserDeviceTypes**](UsersApi.md#getUserDeviceTypes) | **GET** /users/{userId}/devicetypes | Get User Device Types
[**getUserDevices**](UsersApi.md#getUserDevices) | **GET** /users/{userId}/devices | Get User Devices
[**getUserProperties**](UsersApi.md#getUserProperties) | **GET** /users/{userId}/properties | Get User application properties
[**getUserRules**](UsersApi.md#getUserRules) | **GET** /users/{userId}/rules | Get User Rules
[**listAllSharesForUser**](UsersApi.md#listAllSharesForUser) | **GET** /users/{userId}/shares | Get User shares
[**updateUserProperties**](UsersApi.md#updateUserProperties) | **PUT** /users/{userId}/properties | Update User Application Properties


<a name="createUserProperties"></a>
# **createUserProperties**
> PropertiesEnvelope createUserProperties(userId, properties, opts)

Create User Application Properties

Create application properties for a user

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User Id

var properties = new ArtikCloud.AppProperties(); // {AppProperties} Properties to be updated

var opts = { 
  'aid': "aid_example" // {String} Application ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUserProperties(userId, properties, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User Id | 
 **properties** | [**AppProperties**](AppProperties.md)| Properties to be updated | 
 **aid** | **String**| Application ID | [optional] 

### Return type

[**PropertiesEnvelope**](PropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserProperties"></a>
# **deleteUserProperties**
> PropertiesEnvelope deleteUserProperties(userId, opts)

Delete User Application Properties

Deletes a user&#39;s application properties

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User Id

var opts = { 
  'aid': "aid_example" // {String} Application ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteUserProperties(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User Id | 
 **aid** | **String**| Application ID | [optional] 

### Return type

[**PropertiesEnvelope**](PropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSelf"></a>
# **getSelf**
> UserEnvelope getSelf

Get Current User Profile

Get&#39;s the current user&#39;s profile

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSelf(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserEnvelope**](UserEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserDeviceTypes"></a>
# **getUserDeviceTypes**
> DeviceTypesEnvelope getUserDeviceTypes(userId, opts)

Get User Device Types

Retrieve User&#39;s Device Types

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User ID.

var opts = { 
  'offset': 56, // {Number} Offset for pagination.
  'count': 56, // {Number} Desired count of items in the result set
  'includeShared': true // {Boolean} Optional. Boolean (true/false) - If false, only return the user's device types. If true, also return device types shared by other users.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUserDeviceTypes(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. | 
 **offset** | **Number**| Offset for pagination. | [optional] 
 **count** | **Number**| Desired count of items in the result set | [optional] 
 **includeShared** | **Boolean**| Optional. Boolean (true/false) - If false, only return the user&#39;s device types. If true, also return device types shared by other users. | [optional] 

### Return type

[**DeviceTypesEnvelope**](DeviceTypesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserDevices"></a>
# **getUserDevices**
> DevicesEnvelope getUserDevices(userId, opts)

Get User Devices

Retrieve User&#39;s Devices

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User ID

var opts = { 
  'offset': 56, // {Number} Offset for pagination.
  'count': 56, // {Number} Desired count of items in the result set
  'includeProperties': true, // {Boolean} Optional. Boolean (true/false) - If false, only return the user's device types. If true, also return device types shared by other users.
  'owner': "owner_example", // {String} Return owned and/or shared devices. Default to ALL.
  'includeShareInfo': true // {Boolean} Include share info
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUserDevices(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID | 
 **offset** | **Number**| Offset for pagination. | [optional] 
 **count** | **Number**| Desired count of items in the result set | [optional] 
 **includeProperties** | **Boolean**| Optional. Boolean (true/false) - If false, only return the user&#39;s device types. If true, also return device types shared by other users. | [optional] 
 **owner** | **String**| Return owned and/or shared devices. Default to ALL. | [optional] 
 **includeShareInfo** | **Boolean**| Include share info | [optional] 

### Return type

[**DevicesEnvelope**](DevicesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserProperties"></a>
# **getUserProperties**
> PropertiesEnvelope getUserProperties(userId, opts)

Get User application properties

Get application properties of a user

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User Id

var opts = { 
  'aid': "aid_example" // {String} Application ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUserProperties(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User Id | 
 **aid** | **String**| Application ID | [optional] 

### Return type

[**PropertiesEnvelope**](PropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserRules"></a>
# **getUserRules**
> RulesEnvelope getUserRules(userId, opts)

Get User Rules

Retrieve User&#39;s Rules

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User ID.

var opts = { 
  'excludeDisabled': true, // {Boolean} Exclude disabled rules in the result.
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
api.getUserRules(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. | 
 **excludeDisabled** | **Boolean**| Exclude disabled rules in the result. | [optional] 
 **count** | **Number**| Desired count of items in the result set. | [optional] 
 **offset** | **Number**| Offset for pagination. | [optional] 

### Return type

[**RulesEnvelope**](RulesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAllSharesForUser"></a>
# **listAllSharesForUser**
> DeviceSharingEnvelope listAllSharesForUser(userId, filter, opts)

Get User shares

Get User shares

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User ID.

var filter = "filter_example"; // {String} filter

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
api.listAllSharesForUser(userId, filter, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. | 
 **filter** | **String**| filter | 
 **count** | **Number**| Desired count of items in the result set. | [optional] 
 **offset** | **Number**| Offset for pagination. | [optional] 

### Return type

[**DeviceSharingEnvelope**](DeviceSharingEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUserProperties"></a>
# **updateUserProperties**
> PropertiesEnvelope updateUserProperties(userId, properties, opts)

Update User Application Properties

Updates application properties of a user

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.UsersApi()

var userId = "userId_example"; // {String} User Id

var properties = new ArtikCloud.AppProperties(); // {AppProperties} Properties to be updated

var opts = { 
  'aid': "aid_example" // {String} Application ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateUserProperties(userId, properties, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User Id | 
 **properties** | [**AppProperties**](AppProperties.md)| Properties to be updated | 
 **aid** | **String**| Application ID | [optional] 

### Return type

[**PropertiesEnvelope**](PropertiesEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

