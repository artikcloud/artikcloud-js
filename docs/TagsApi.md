# ArtikCloud.TagsApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTagCategories**](TagsApi.md#getTagCategories) | **GET** /tags/categories | Get all categories
[**getTagSuggestions**](TagsApi.md#getTagSuggestions) | **GET** /tags/suggestions | Get tag suggestions
[**getTagsByCategories**](TagsApi.md#getTagsByCategories) | **GET** /tags | Get all tags of categories


<a name="getTagCategories"></a>
# **getTagCategories**
> TagsEnvelope getTagCategories

Get all categories

Get all tags marked as categories

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.TagsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTagCategories(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TagsEnvelope**](TagsEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTagSuggestions"></a>
# **getTagSuggestions**
> TagsEnvelope getTagSuggestions(opts)

Get tag suggestions

Get tag suggestions for applications, device types that have been most used with a group of tags.

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.TagsApi()

var opts = { 
  'entityType': "entityType_example", // {String} Entity type name.
  'tags': "tags_example", // {String} Comma separated list of tags.
  'name': "name_example", // {String} Name of tags used for type ahead.
  'count': 56 // {Number} Number of results to return. Max 10.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTagSuggestions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Entity type name. | [optional] 
 **tags** | **String**| Comma separated list of tags. | [optional] 
 **name** | **String**| Name of tags used for type ahead. | [optional] 
 **count** | **Number**| Number of results to return. Max 10. | [optional] 

### Return type

[**TagsEnvelope**](TagsEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTagsByCategories"></a>
# **getTagsByCategories**
> TagsEnvelope getTagsByCategories(opts)

Get all tags of categories

Get all tags related to the list of categories

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.TagsApi()

var opts = { 
  'categories': "categories_example" // {String} Comma separated list of categories.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTagsByCategories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categories** | **String**| Comma separated list of categories. | [optional] 

### Return type

[**TagsEnvelope**](TagsEnvelope.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

