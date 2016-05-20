ARTIK Cloud JavaScript SDK
================

This SDK helps you connect your JavaScript applications to ARTIK Cloud. The SDK exposes a number of methods to easily execute REST API calls to ARTIK Cloud.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install artikcloud-js --save
```

#### git
#
The library is hosted at this git repository
https://github.com/artikcloud/artikcloud-js
then install it via:

```shell
npm install artikcloud/artikcloud-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ArtikCloudApi = require('artikcloud-js');

var defaultClient = ArtikCloudApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new ArtikCloudApi.DeviceTypesApi()

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

## Documentation for API Endpoints

All URIs are relative to *https://api.artik.cloud/v1.1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ArtikCloudApi.DeviceTypesApi* | [**getAvailableManifestVersions**](docs/DeviceTypesApi.md#getAvailableManifestVersions) | **GET** /devicetypes/{deviceTypeId}/availablemanifestversions | Get Available Manifest Versions
*ArtikCloudApi.DeviceTypesApi* | [**getDeviceType**](docs/DeviceTypesApi.md#getDeviceType) | **GET** /devicetypes/{deviceTypeId} | Get Device Type
*ArtikCloudApi.DeviceTypesApi* | [**getDeviceTypes**](docs/DeviceTypesApi.md#getDeviceTypes) | **GET** /devicetypes | Get Device Types
*ArtikCloudApi.DeviceTypesApi* | [**getLatestManifestProperties**](docs/DeviceTypesApi.md#getLatestManifestProperties) | **GET** /devicetypes/{deviceTypeId}/manifests/latest/properties | Get Latest Manifest Properties
*ArtikCloudApi.DeviceTypesApi* | [**getManifestProperties**](docs/DeviceTypesApi.md#getManifestProperties) | **GET** /devicetypes/{deviceTypeId}/manifests/{version}/properties | Get manifest properties
*ArtikCloudApi.DevicesApi* | [**addDevice**](docs/DevicesApi.md#addDevice) | **POST** /devices | Add Device
*ArtikCloudApi.DevicesApi* | [**deleteDevice**](docs/DevicesApi.md#deleteDevice) | **DELETE** /devices/{deviceId} | Delete Device
*ArtikCloudApi.DevicesApi* | [**deleteDeviceToken**](docs/DevicesApi.md#deleteDeviceToken) | **DELETE** /devices/{deviceId}/tokens | Delete Device Token
*ArtikCloudApi.DevicesApi* | [**getDevice**](docs/DevicesApi.md#getDevice) | **GET** /devices/{deviceId} | Get Device
*ArtikCloudApi.DevicesApi* | [**getDeviceToken**](docs/DevicesApi.md#getDeviceToken) | **GET** /devices/{deviceId}/tokens | Get Device Token
*ArtikCloudApi.DevicesApi* | [**updateDevice**](docs/DevicesApi.md#updateDevice) | **PUT** /devices/{deviceId} | Update Device
*ArtikCloudApi.DevicesApi* | [**updateDeviceToken**](docs/DevicesApi.md#updateDeviceToken) | **PUT** /devices/{deviceId}/tokens | Update Device Token
*ArtikCloudApi.ExportApi* | [**exportRequest**](docs/ExportApi.md#exportRequest) | **POST** /messages/export | Create Export Request
*ArtikCloudApi.ExportApi* | [**getExportHistory**](docs/ExportApi.md#getExportHistory) | **GET** /messages/export/history | Get Export History
*ArtikCloudApi.ExportApi* | [**getExportResult**](docs/ExportApi.md#getExportResult) | **GET** /messages/export/{exportId}/result | Get Export Result
*ArtikCloudApi.ExportApi* | [**getExportStatus**](docs/ExportApi.md#getExportStatus) | **GET** /messages/export/{exportId}/status | Check Export Status
*ArtikCloudApi.MessagesApi* | [**getAggregatesHistogram**](docs/MessagesApi.md#getAggregatesHistogram) | **GET** /messages/analytics/histogram | Get Histogram aggregates
*ArtikCloudApi.MessagesApi* | [**getFieldPresence**](docs/MessagesApi.md#getFieldPresence) | **GET** /messages/presence | Get normalized message presence
*ArtikCloudApi.MessagesApi* | [**getLastNormalizedMessages**](docs/MessagesApi.md#getLastNormalizedMessages) | **GET** /messages/last | Get Last Normalized Message
*ArtikCloudApi.MessagesApi* | [**getMessageAggregates**](docs/MessagesApi.md#getMessageAggregates) | **GET** /messages/analytics/aggregates | Get Normalized Message Aggregates
*ArtikCloudApi.MessagesApi* | [**getNormalizedMessages**](docs/MessagesApi.md#getNormalizedMessages) | **GET** /messages | Get Normalized Messages
*ArtikCloudApi.MessagesApi* | [**sendMessageAction**](docs/MessagesApi.md#sendMessageAction) | **POST** /messages | Send Message Action
*ArtikCloudApi.RegistrationsApi* | [**confirmUser**](docs/RegistrationsApi.md#confirmUser) | **PUT** /devices/registrations/pin | Confirm User
*ArtikCloudApi.RegistrationsApi* | [**getRequestStatusForUser**](docs/RegistrationsApi.md#getRequestStatusForUser) | **GET** /devices/registrations/{requestId}/status | Get Request Status For User
*ArtikCloudApi.RegistrationsApi* | [**unregisterDevice**](docs/RegistrationsApi.md#unregisterDevice) | **DELETE** /devices/{deviceId}/registrations | Unregister Device
*ArtikCloudApi.RulesApi* | [**createRule**](docs/RulesApi.md#createRule) | **POST** /rules | Create Rule
*ArtikCloudApi.RulesApi* | [**deleteRule**](docs/RulesApi.md#deleteRule) | **DELETE** /rules/{ruleId} | Delete Rule
*ArtikCloudApi.RulesApi* | [**getRule**](docs/RulesApi.md#getRule) | **GET** /rules/{ruleId} | Get Rule
*ArtikCloudApi.RulesApi* | [**updateRule**](docs/RulesApi.md#updateRule) | **PUT** /rules/{ruleId} | Update Rule
*ArtikCloudApi.TagsApi* | [**getTagCategories**](docs/TagsApi.md#getTagCategories) | **GET** /tags/categories | Get all categories
*ArtikCloudApi.TagsApi* | [**getTagSuggestions**](docs/TagsApi.md#getTagSuggestions) | **GET** /tags/suggestions | Get tag suggestions
*ArtikCloudApi.TagsApi* | [**getTagsByCategories**](docs/TagsApi.md#getTagsByCategories) | **GET** /tags | Get all tags of categories
*ArtikCloudApi.TokensApi* | [**checkToken**](docs/TokensApi.md#checkToken) | **POST** /checkToken | Check Token
*ArtikCloudApi.TokensApi* | [**refreshToken**](docs/TokensApi.md#refreshToken) | **POST** /token | Refresh Token
*ArtikCloudApi.UsersApi* | [**createUserProperties**](docs/UsersApi.md#createUserProperties) | **POST** /users/{userId}/properties | Create User Application Properties
*ArtikCloudApi.UsersApi* | [**deleteUserProperties**](docs/UsersApi.md#deleteUserProperties) | **DELETE** /users/{userId}/properties | Delete User Application Properties
*ArtikCloudApi.UsersApi* | [**getSelf**](docs/UsersApi.md#getSelf) | **GET** /users/self | Get Current User Profile
*ArtikCloudApi.UsersApi* | [**getUserDeviceTypes**](docs/UsersApi.md#getUserDeviceTypes) | **GET** /users/{userId}/devicetypes | Get User Device Types
*ArtikCloudApi.UsersApi* | [**getUserDevices**](docs/UsersApi.md#getUserDevices) | **GET** /users/{userId}/devices | Get User Devices
*ArtikCloudApi.UsersApi* | [**getUserProperties**](docs/UsersApi.md#getUserProperties) | **GET** /users/{userId}/properties | Get User application properties
*ArtikCloudApi.UsersApi* | [**getUserRules**](docs/UsersApi.md#getUserRules) | **GET** /users/{userId}/rules | Get User Rules
*ArtikCloudApi.UsersApi* | [**updateUserProperties**](docs/UsersApi.md#updateUserProperties) | **PUT** /users/{userId}/properties | Update User Application Properties


## Documentation for Models

 - [ArtikCloudApi.AckEnvelope](docs/AckEnvelope.md)
 - [ArtikCloudApi.Acknowledgement](docs/Acknowledgement.md)
 - [ArtikCloudApi.ActionDetails](docs/ActionDetails.md)
 - [ArtikCloudApi.ActionDetailsArray](docs/ActionDetailsArray.md)
 - [ArtikCloudApi.ActionIn](docs/ActionIn.md)
 - [ArtikCloudApi.ActionOut](docs/ActionOut.md)
 - [ArtikCloudApi.AggregateData](docs/AggregateData.md)
 - [ArtikCloudApi.AggregatesHistogramData](docs/AggregatesHistogramData.md)
 - [ArtikCloudApi.AggregatesHistogramResponse](docs/AggregatesHistogramResponse.md)
 - [ArtikCloudApi.AggregatesResponse](docs/AggregatesResponse.md)
 - [ArtikCloudApi.AppProperties](docs/AppProperties.md)
 - [ArtikCloudApi.CheckTokenMessage](docs/CheckTokenMessage.md)
 - [ArtikCloudApi.CheckTokenResponse](docs/CheckTokenResponse.md)
 - [ArtikCloudApi.Device](docs/Device.md)
 - [ArtikCloudApi.DeviceArray](docs/DeviceArray.md)
 - [ArtikCloudApi.DeviceEnvelope](docs/DeviceEnvelope.md)
 - [ArtikCloudApi.DeviceRegCompleteRequest](docs/DeviceRegCompleteRequest.md)
 - [ArtikCloudApi.DeviceRegConfirmUserRequest](docs/DeviceRegConfirmUserRequest.md)
 - [ArtikCloudApi.DeviceRegConfirmUserResponse](docs/DeviceRegConfirmUserResponse.md)
 - [ArtikCloudApi.DeviceRegConfirmUserResponseEnvelope](docs/DeviceRegConfirmUserResponseEnvelope.md)
 - [ArtikCloudApi.DeviceRegStatusResponse](docs/DeviceRegStatusResponse.md)
 - [ArtikCloudApi.DeviceRegStatusResponseEnvelope](docs/DeviceRegStatusResponseEnvelope.md)
 - [ArtikCloudApi.DeviceToken](docs/DeviceToken.md)
 - [ArtikCloudApi.DeviceTokenEnvelope](docs/DeviceTokenEnvelope.md)
 - [ArtikCloudApi.DeviceType](docs/DeviceType.md)
 - [ArtikCloudApi.DeviceTypeArray](docs/DeviceTypeArray.md)
 - [ArtikCloudApi.DeviceTypeEnvelope](docs/DeviceTypeEnvelope.md)
 - [ArtikCloudApi.DeviceTypesEnvelope](docs/DeviceTypesEnvelope.md)
 - [ArtikCloudApi.DevicesEnvelope](docs/DevicesEnvelope.md)
 - [ArtikCloudApi.ErrorEnvelope](docs/ErrorEnvelope.md)
 - [ArtikCloudApi.ExportData](docs/ExportData.md)
 - [ArtikCloudApi.ExportDataArray](docs/ExportDataArray.md)
 - [ArtikCloudApi.ExportHistoryResponse](docs/ExportHistoryResponse.md)
 - [ArtikCloudApi.ExportNormalizedMessagesResponse](docs/ExportNormalizedMessagesResponse.md)
 - [ArtikCloudApi.ExportRequest](docs/ExportRequest.md)
 - [ArtikCloudApi.ExportRequestData](docs/ExportRequestData.md)
 - [ArtikCloudApi.ExportRequestInfo](docs/ExportRequestInfo.md)
 - [ArtikCloudApi.ExportRequestResponse](docs/ExportRequestResponse.md)
 - [ArtikCloudApi.ExportResponse](docs/ExportResponse.md)
 - [ArtikCloudApi.ExportStatusResponse](docs/ExportStatusResponse.md)
 - [ArtikCloudApi.FieldPath](docs/FieldPath.md)
 - [ArtikCloudApi.FieldPresence](docs/FieldPresence.md)
 - [ArtikCloudApi.FieldPresenceEnvelope](docs/FieldPresenceEnvelope.md)
 - [ArtikCloudApi.FieldsActions](docs/FieldsActions.md)
 - [ArtikCloudApi.ManifestProperties](docs/ManifestProperties.md)
 - [ArtikCloudApi.ManifestPropertiesEnvelope](docs/ManifestPropertiesEnvelope.md)
 - [ArtikCloudApi.ManifestVersions](docs/ManifestVersions.md)
 - [ArtikCloudApi.ManifestVersionsEnvelope](docs/ManifestVersionsEnvelope.md)
 - [ArtikCloudApi.MessageAction](docs/MessageAction.md)
 - [ArtikCloudApi.MessageID](docs/MessageID.md)
 - [ArtikCloudApi.MessageIDEnvelope](docs/MessageIDEnvelope.md)
 - [ArtikCloudApi.MessageIn](docs/MessageIn.md)
 - [ArtikCloudApi.MessageOut](docs/MessageOut.md)
 - [ArtikCloudApi.NonEmptyString](docs/NonEmptyString.md)
 - [ArtikCloudApi.NormalizedMessage](docs/NormalizedMessage.md)
 - [ArtikCloudApi.NormalizedMessagesEnvelope](docs/NormalizedMessagesEnvelope.md)
 - [ArtikCloudApi.OutputRule](docs/OutputRule.md)
 - [ArtikCloudApi.PropertiesEnvelope](docs/PropertiesEnvelope.md)
 - [ArtikCloudApi.RefreshTokenResponse](docs/RefreshTokenResponse.md)
 - [ArtikCloudApi.RegisterMessage](docs/RegisterMessage.md)
 - [ArtikCloudApi.RuleArray](docs/RuleArray.md)
 - [ArtikCloudApi.RuleCreationInfo](docs/RuleCreationInfo.md)
 - [ArtikCloudApi.RuleEnvelope](docs/RuleEnvelope.md)
 - [ArtikCloudApi.RuleError](docs/RuleError.md)
 - [ArtikCloudApi.RuleUpdateInfo](docs/RuleUpdateInfo.md)
 - [ArtikCloudApi.RuleWarningOutput](docs/RuleWarningOutput.md)
 - [ArtikCloudApi.RulesEnvelope](docs/RulesEnvelope.md)
 - [ArtikCloudApi.Tag](docs/Tag.md)
 - [ArtikCloudApi.TagArray](docs/TagArray.md)
 - [ArtikCloudApi.TagsEnvelope](docs/TagsEnvelope.md)
 - [ArtikCloudApi.Token](docs/Token.md)
 - [ArtikCloudApi.TokenRequest](docs/TokenRequest.md)
 - [ArtikCloudApi.TokenResponse](docs/TokenResponse.md)
 - [ArtikCloudApi.UnregisterDeviceResponse](docs/UnregisterDeviceResponse.md)
 - [ArtikCloudApi.UnregisterDeviceResponseEnvelope](docs/UnregisterDeviceResponseEnvelope.md)
 - [ArtikCloudApi.User](docs/User.md)
 - [ArtikCloudApi.UserEnvelope](docs/UserEnvelope.md)
 - [ArtikCloudApi.WebSocketError](docs/WebSocketError.md)


## Documentation for Authorization


### artikcloud_oauth

- **Type**: OAuth
- **Flow**: implicit
- **Authorizatoin URL**: https://accounts.artik.cloud/authorize
- **Scopes**:
  - read:artikcloud: Read from Artik Cloud
  - write:artikcloud: Write from Artik Cloud

More about ARTIK Cloud
-------------------------

If you are not familiar with ARTIK Cloud, we have extensive documentation at https://developer.artik.cloud/documentation

The full ARTIK Cloud API specification can be found at https://developer.artik.cloud/documentation/api-reference/

Check out advanced sample applications at https://developer.artik.cloud/documentation/samples/

To create and manage your services and devices on ARTIK Cloud, create an account at https://developer.artik.cloud

Also see the ARTIK Cloud blog for tutorials, updates, and more: http://artik.io/blog/cloud

Licence and Copyright
---------------------

Licensed under the Apache License. See [LICENSE](https://github.com/artikcloud/artikcloud-js/blob/master/LICENSE).

Copyright (c) 2016 Samsung Electronics Co., Ltd.
