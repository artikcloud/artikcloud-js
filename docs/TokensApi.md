# ArtikCloud.TokensApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkToken**](TokensApi.md#checkToken) | **POST** /accounts/checkToken | Check Token
[**refreshToken**](TokensApi.md#refreshToken) | **POST** /accounts/token | Refresh Token
[**tokenInfo**](TokensApi.md#tokenInfo) | **GET** /accounts/tokenInfo | Token Info


<a name="checkToken"></a>
# **checkToken**
> CheckTokenResponse checkToken(tokenInfo)

Check Token

(Deprecated) Check Token. See tokenInfo

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.TokensApi()

var tokenInfo = new ArtikCloud.TokenRequest(); // {TokenRequest} Token object to be checked


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.checkToken(tokenInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenInfo** | [**TokenRequest**](TokenRequest.md)| Token object to be checked | 

### Return type

[**CheckTokenResponse**](CheckTokenResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> RefreshTokenResponse refreshToken(grantType, refreshToken)

Refresh Token

Refresh Token

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.TokensApi()

var grantType = "grantType_example"; // {String} Grant Type.

var refreshToken = "refreshToken_example"; // {String} Refresh Token.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.refreshToken(grantType, refreshToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grant Type. | 
 **refreshToken** | **String**| Refresh Token. | 

### Return type

[**RefreshTokenResponse**](RefreshTokenResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="tokenInfo"></a>
# **tokenInfo**
> TokenInfoSuccessResponse tokenInfo

Token Info

Returns the Token Information

### Example
```javascript
var ArtikCloud = require('artikcloud-js');
var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloud.TokensApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.tokenInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TokenInfoSuccessResponse**](TokenInfoSuccessResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

