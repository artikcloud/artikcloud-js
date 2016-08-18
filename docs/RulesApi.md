# ArtikCloud.RulesApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRule**](RulesApi.md#createRule) | **POST** /rules | Create Rule
[**deleteRule**](RulesApi.md#deleteRule) | **DELETE** /rules/{ruleId} | Delete Rule
[**getRule**](RulesApi.md#getRule) | **GET** /rules/{ruleId} | Get Rule
[**updateRule**](RulesApi.md#updateRule) | **PUT** /rules/{ruleId} | Update Rule


<a name="createRule"></a>
# **createRule**
> RuleEnvelope createRule(ruleInfo, userId)

Create Rule

Create a new Rule

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RulesApi()

var ruleInfo = new ArtikCloud.RuleCreationInfo(); // {RuleCreationInfo} Rule object that needs to be added

var userId = "userId_example"; // {String} User ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createRule(ruleInfo, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleInfo** | [**RuleCreationInfo**](RuleCreationInfo.md)| Rule object that needs to be added | 
 **userId** | **String**| User ID | 

### Return type

[**RuleEnvelope**](RuleEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteRule"></a>
# **deleteRule**
> RuleEnvelope deleteRule(ruleId)

Delete Rule

Delete a Rule

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RulesApi()

var ruleId = "ruleId_example"; // {String} Rule ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deleteRule(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| Rule ID. | 

### Return type

[**RuleEnvelope**](RuleEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRule"></a>
# **getRule**
> RuleEnvelope getRule(ruleId)

Get Rule

Get a rule using the Rule ID

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RulesApi()

var ruleId = "ruleId_example"; // {String} Rule ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRule(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| Rule ID. | 

### Return type

[**RuleEnvelope**](RuleEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateRule"></a>
# **updateRule**
> RuleEnvelope updateRule(ruleId, ruleInfo)

Update Rule

Update an existing Rule

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.RulesApi()

var ruleId = "ruleId_example"; // {String} Rule ID.

var ruleInfo = new ArtikCloud.RuleUpdateInfo(); // {RuleUpdateInfo} Rule object that needs to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateRule(ruleId, ruleInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| Rule ID. | 
 **ruleInfo** | [**RuleUpdateInfo**](RuleUpdateInfo.md)| Rule object that needs to be updated | 

### Return type

[**RuleEnvelope**](RuleEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

