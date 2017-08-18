ARTIK Cloud JavaScript SDK
==========================

[![npm version](https://badge.fury.io/js/artikcloud-js.svg)](https://badge.fury.io/js/artikcloud-js)

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
var ArtikCloud = require('artikcloud-js');

var defaultClient = ArtikCloud.ApiClient.default;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new ArtikCloud.DeviceTypesApi()

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
*ArtikCloud.DeviceTypesApi* | [**getAvailableManifestVersions**](docs/DeviceTypesApi.md#getAvailableManifestVersions) | **GET** /devicetypes/{deviceTypeId}/availablemanifestversions | Get Available Manifest Versions
*ArtikCloud.DeviceTypesApi* | [**getDeviceType**](docs/DeviceTypesApi.md#getDeviceType) | **GET** /devicetypes/{deviceTypeId} | Get Device Type
*ArtikCloud.DeviceTypesApi* | [**getDeviceTypes**](docs/DeviceTypesApi.md#getDeviceTypes) | **GET** /devicetypes | Get Device Types
*ArtikCloud.DeviceTypesApi* | [**getDeviceTypesByApplication**](docs/DeviceTypesApi.md#getDeviceTypesByApplication) | **GET** /applications/{appId}/devicetypes | Get Device Types by Application
*ArtikCloud.DeviceTypesApi* | [**getLatestManifestProperties**](docs/DeviceTypesApi.md#getLatestManifestProperties) | **GET** /devicetypes/{deviceTypeId}/manifests/latest/properties | Get Latest Manifest Properties
*ArtikCloud.DeviceTypesApi* | [**getManifestProperties**](docs/DeviceTypesApi.md#getManifestProperties) | **GET** /devicetypes/{deviceTypeId}/manifests/{version}/properties | Get manifest properties
*ArtikCloud.DevicesApi* | [**addDevice**](docs/DevicesApi.md#addDevice) | **POST** /devices | Add Device
*ArtikCloud.DevicesApi* | [**deleteDevice**](docs/DevicesApi.md#deleteDevice) | **DELETE** /devices/{deviceId} | Delete Device
*ArtikCloud.DevicesApi* | [**deleteDeviceToken**](docs/DevicesApi.md#deleteDeviceToken) | **DELETE** /devices/{deviceId}/tokens | Delete Device Token
*ArtikCloud.DevicesApi* | [**getDevice**](docs/DevicesApi.md#getDevice) | **GET** /devices/{deviceId} | Get Device
*ArtikCloud.DevicesApi* | [**getDevicePresence**](docs/DevicesApi.md#getDevicePresence) | **GET** /devices/{deviceId}/presence | Get device presence information
*ArtikCloud.DevicesApi* | [**getDeviceToken**](docs/DevicesApi.md#getDeviceToken) | **GET** /devices/{deviceId}/tokens | Get Device Token
*ArtikCloud.DevicesApi* | [**updateDevice**](docs/DevicesApi.md#updateDevice) | **PUT** /devices/{deviceId} | Update Device
*ArtikCloud.DevicesApi* | [**updateDeviceToken**](docs/DevicesApi.md#updateDeviceToken) | **PUT** /devices/{deviceId}/tokens | Update Device Token
*ArtikCloud.DevicesManagementApi* | [**createTasks**](docs/DevicesManagementApi.md#createTasks) | **POST** /devicemgmt/tasks | Create a new task for one or more devices
*ArtikCloud.DevicesManagementApi* | [**deleteServerProperties**](docs/DevicesManagementApi.md#deleteServerProperties) | **DELETE** /devicemgmt/devices/{did}/serverproperties | Deletes a device&#39;s properties.
*ArtikCloud.DevicesManagementApi* | [**getAllByDid**](docs/DevicesManagementApi.md#getAllByDid) | **GET** /devicemgmt/devices/{did}/tasks | Returns the list of tasks for a particular device id with optional status filter.
*ArtikCloud.DevicesManagementApi* | [**getDeviceTypesInfo**](docs/DevicesManagementApi.md#getDeviceTypesInfo) | **GET** /devicemgmt/devicetypes/{dtid} | Read a device type device management information.
*ArtikCloud.DevicesManagementApi* | [**getManifestProperties**](docs/DevicesManagementApi.md#getManifestProperties) | **GET** /devicemgmt/devicetypes/{dtid}/manifest/properties | Get a device type&#39;s device management manifest properties
*ArtikCloud.DevicesManagementApi* | [**getProperties**](docs/DevicesManagementApi.md#getProperties) | **GET** /devicemgmt/devices/{did}/properties | Read a device&#39;s properties.
*ArtikCloud.DevicesManagementApi* | [**getStatuses**](docs/DevicesManagementApi.md#getStatuses) | **GET** /devicemgmt/tasks/{tid}/statuses | Returns the details and status of a task id and the individual statuses of each device id in the list.
*ArtikCloud.DevicesManagementApi* | [**getStatusesHistory**](docs/DevicesManagementApi.md#getStatusesHistory) | **GET** /devicemgmt/tasks/{tid}/statuses/history | Returns the history of the status changes for a specific task id, or for a specific device id in that task.
*ArtikCloud.DevicesManagementApi* | [**getTaskByID**](docs/DevicesManagementApi.md#getTaskByID) | **GET** /devicemgmt/tasks/{tid} | Returns the details and global status of a specific task id.
*ArtikCloud.DevicesManagementApi* | [**getTasks**](docs/DevicesManagementApi.md#getTasks) | **GET** /devicemgmt/tasks | Returns the all the tasks for a device type.
*ArtikCloud.DevicesManagementApi* | [**queryProperties**](docs/DevicesManagementApi.md#queryProperties) | **GET** /devicemgmt/devices/properties | Query device properties across devices.
*ArtikCloud.DevicesManagementApi* | [**updateDeviceTypesInfo**](docs/DevicesManagementApi.md#updateDeviceTypesInfo) | **PUT** /devicemgmt/devicetypes/{dtid} | Updates a device type information
*ArtikCloud.DevicesManagementApi* | [**updateServerProperties**](docs/DevicesManagementApi.md#updateServerProperties) | **POST** /devicemgmt/devices/{did}/serverproperties | Updates a device&#39;s server properties.
*ArtikCloud.DevicesManagementApi* | [**updateTask**](docs/DevicesManagementApi.md#updateTask) | **PUT** /devicemgmt/tasks/{tid} | Updates a task for all devices - For now just allows changing the state to cancelled.
*ArtikCloud.DevicesManagementApi* | [**updateTaskForDevice**](docs/DevicesManagementApi.md#updateTaskForDevice) | **PUT** /devicemgmt/tasks/{tid}/devices/{did} | Updates a task for a specific device - For now just allows changing the state to cancelled.
*ArtikCloud.DevicesSharesApi* | [**createShareForDevice**](docs/DevicesSharesApi.md#createShareForDevice) | **POST** /devices/{deviceId}/shares | Share a device 
*ArtikCloud.DevicesSharesApi* | [**deleteSharingForDevice**](docs/DevicesSharesApi.md#deleteSharingForDevice) | **DELETE** /devices/{deviceId}/shares/{shareId} | Delete specific share of the given device id
*ArtikCloud.DevicesSharesApi* | [**getAllSharesForDevice**](docs/DevicesSharesApi.md#getAllSharesForDevice) | **GET** /devices/{deviceId}/shares | List all shares for the given device id
*ArtikCloud.DevicesSharesApi* | [**getSharingForDevice**](docs/DevicesSharesApi.md#getSharingForDevice) | **GET** /devices/{deviceId}/shares/{shareId} | Get specific share of the given device id
*ArtikCloud.DevicesStatusApi* | [**getDeviceStatus**](docs/DevicesStatusApi.md#getDeviceStatus) | **GET** /devices/{deviceId}/status | Get Device Status
*ArtikCloud.DevicesStatusApi* | [**getDevicesStatus**](docs/DevicesStatusApi.md#getDevicesStatus) | **GET** /devices/status | Get Devices Status
*ArtikCloud.DevicesStatusApi* | [**putDeviceStatus**](docs/DevicesStatusApi.md#putDeviceStatus) | **PUT** /devices/{deviceId}/status | Update Device Status
*ArtikCloud.ExportApi* | [**exportRequest**](docs/ExportApi.md#exportRequest) | **POST** /messages/export | Create Export Request
*ArtikCloud.ExportApi* | [**getExportHistory**](docs/ExportApi.md#getExportHistory) | **GET** /messages/export/history | Get Export History
*ArtikCloud.ExportApi* | [**getExportResult**](docs/ExportApi.md#getExportResult) | **GET** /messages/export/{exportId}/result | Get Export Result
*ArtikCloud.ExportApi* | [**getExportStatus**](docs/ExportApi.md#getExportStatus) | **GET** /messages/export/{exportId}/status | Check Export Status
*ArtikCloud.MessagesApi* | [**getAggregatesHistogram**](docs/MessagesApi.md#getAggregatesHistogram) | **GET** /messages/analytics/histogram | Get Normalized Message Histogram
*ArtikCloud.MessagesApi* | [**getFieldPresence**](docs/MessagesApi.md#getFieldPresence) | **GET** /messages/presence | Get normalized message presence
*ArtikCloud.MessagesApi* | [**getLastNormalizedMessages**](docs/MessagesApi.md#getLastNormalizedMessages) | **GET** /messages/last | Get Last Normalized Message
*ArtikCloud.MessagesApi* | [**getMessageAggregates**](docs/MessagesApi.md#getMessageAggregates) | **GET** /messages/analytics/aggregates | Get Normalized Message Aggregates
*ArtikCloud.MessagesApi* | [**getMessageSnapshots**](docs/MessagesApi.md#getMessageSnapshots) | **GET** /messages/snapshots | Get Message Snapshots
*ArtikCloud.MessagesApi* | [**getNormalizedActions**](docs/MessagesApi.md#getNormalizedActions) | **GET** /actions | Get Normalized Actions
*ArtikCloud.MessagesApi* | [**getNormalizedMessages**](docs/MessagesApi.md#getNormalizedMessages) | **GET** /messages | Get Normalized Messages
*ArtikCloud.MessagesApi* | [**sendActions**](docs/MessagesApi.md#sendActions) | **POST** /actions | Send Actions
*ArtikCloud.MessagesApi* | [**sendMessage**](docs/MessagesApi.md#sendMessage) | **POST** /messages | Send Message
*ArtikCloud.RegistrationsApi* | [**confirmUser**](docs/RegistrationsApi.md#confirmUser) | **PUT** /devices/registrations/pin | Confirm User
*ArtikCloud.RegistrationsApi* | [**getRequestStatusForUser**](docs/RegistrationsApi.md#getRequestStatusForUser) | **GET** /devices/registrations/{requestId}/status | Get Request Status For User
*ArtikCloud.RegistrationsApi* | [**unregisterDevice**](docs/RegistrationsApi.md#unregisterDevice) | **DELETE** /devices/{deviceId}/registrations | Unregister Device
*ArtikCloud.RulesApi* | [**createRule**](docs/RulesApi.md#createRule) | **POST** /rules | Create Rule
*ArtikCloud.RulesApi* | [**deleteRule**](docs/RulesApi.md#deleteRule) | **DELETE** /rules/{ruleId} | Delete Rule
*ArtikCloud.RulesApi* | [**getRule**](docs/RulesApi.md#getRule) | **GET** /rules/{ruleId} | Get Rule
*ArtikCloud.RulesApi* | [**updateRule**](docs/RulesApi.md#updateRule) | **PUT** /rules/{ruleId} | Update Rule
*ArtikCloud.SubscriptionsApi* | [**createSubscription**](docs/SubscriptionsApi.md#createSubscription) | **POST** /subscriptions | Create Subscription
*ArtikCloud.SubscriptionsApi* | [**deleteSubscription**](docs/SubscriptionsApi.md#deleteSubscription) | **DELETE** /subscriptions/{subId} | Delete Subscription
*ArtikCloud.SubscriptionsApi* | [**getAllSubscriptions**](docs/SubscriptionsApi.md#getAllSubscriptions) | **GET** /subscriptions | Get All Subscriptions
*ArtikCloud.SubscriptionsApi* | [**getMessages**](docs/SubscriptionsApi.md#getMessages) | **GET** /notifications/{notifId}/messages | Get Messages
*ArtikCloud.SubscriptionsApi* | [**getSubscription**](docs/SubscriptionsApi.md#getSubscription) | **GET** /subscriptions/{subId} | Get Subscription
*ArtikCloud.SubscriptionsApi* | [**validateSubscription**](docs/SubscriptionsApi.md#validateSubscription) | **POST** /subscriptions/{subId}/validate | Validate Subscription
*ArtikCloud.TagsApi* | [**getTagCategories**](docs/TagsApi.md#getTagCategories) | **GET** /tags/categories | Get all categories
*ArtikCloud.TagsApi* | [**getTagSuggestions**](docs/TagsApi.md#getTagSuggestions) | **GET** /tags/suggestions | Get tag suggestions
*ArtikCloud.TagsApi* | [**getTagsByCategories**](docs/TagsApi.md#getTagsByCategories) | **GET** /tags | Get all tags of categories
*ArtikCloud.TokensApi* | [**checkToken**](docs/TokensApi.md#checkToken) | **POST** /accounts/checkToken | Check Token
*ArtikCloud.TokensApi* | [**refreshToken**](docs/TokensApi.md#refreshToken) | **POST** /accounts/token | Refresh Token
*ArtikCloud.TokensApi* | [**tokenInfo**](docs/TokensApi.md#tokenInfo) | **GET** /accounts/tokenInfo | Token Info
*ArtikCloud.UsersApi* | [**createUserProperties**](docs/UsersApi.md#createUserProperties) | **POST** /users/{userId}/properties | Create User Application Properties
*ArtikCloud.UsersApi* | [**deleteUserProperties**](docs/UsersApi.md#deleteUserProperties) | **DELETE** /users/{userId}/properties | Delete User Application Properties
*ArtikCloud.UsersApi* | [**getSelf**](docs/UsersApi.md#getSelf) | **GET** /users/self | Get Current User Profile
*ArtikCloud.UsersApi* | [**getUserDeviceTypes**](docs/UsersApi.md#getUserDeviceTypes) | **GET** /users/{userId}/devicetypes | Get User Device Types
*ArtikCloud.UsersApi* | [**getUserDevices**](docs/UsersApi.md#getUserDevices) | **GET** /users/{userId}/devices | Get User Devices
*ArtikCloud.UsersApi* | [**getUserProperties**](docs/UsersApi.md#getUserProperties) | **GET** /users/{userId}/properties | Get User application properties
*ArtikCloud.UsersApi* | [**getUserRules**](docs/UsersApi.md#getUserRules) | **GET** /users/{userId}/rules | Get User Rules
*ArtikCloud.UsersApi* | [**listAllSharesForUser**](docs/UsersApi.md#listAllSharesForUser) | **GET** /users/{userId}/shares | Get User shares
*ArtikCloud.UsersApi* | [**updateUserProperties**](docs/UsersApi.md#updateUserProperties) | **PUT** /users/{userId}/properties | Update User Application Properties


## Documentation for Models

 - [ArtikCloud.AckEnvelope](docs/AckEnvelope.md)
 - [ArtikCloud.Acknowledgement](docs/Acknowledgement.md)
 - [ArtikCloud.Action](docs/Action.md)
 - [ArtikCloud.ActionArray](docs/ActionArray.md)
 - [ArtikCloud.ActionDetails](docs/ActionDetails.md)
 - [ArtikCloud.ActionDetailsArray](docs/ActionDetailsArray.md)
 - [ArtikCloud.ActionIn](docs/ActionIn.md)
 - [ArtikCloud.ActionOut](docs/ActionOut.md)
 - [ArtikCloud.Actions](docs/Actions.md)
 - [ArtikCloud.AggregateData](docs/AggregateData.md)
 - [ArtikCloud.AggregatesHistogramData](docs/AggregatesHistogramData.md)
 - [ArtikCloud.AggregatesHistogramResponse](docs/AggregatesHistogramResponse.md)
 - [ArtikCloud.AggregatesResponse](docs/AggregatesResponse.md)
 - [ArtikCloud.AppProperties](docs/AppProperties.md)
 - [ArtikCloud.CheckTokenMessage](docs/CheckTokenMessage.md)
 - [ArtikCloud.CheckTokenResponse](docs/CheckTokenResponse.md)
 - [ArtikCloud.Device](docs/Device.md)
 - [ArtikCloud.DeviceArray](docs/DeviceArray.md)
 - [ArtikCloud.DeviceEnvelope](docs/DeviceEnvelope.md)
 - [ArtikCloud.DeviceRegCompleteRequest](docs/DeviceRegCompleteRequest.md)
 - [ArtikCloud.DeviceRegConfirmUserRequest](docs/DeviceRegConfirmUserRequest.md)
 - [ArtikCloud.DeviceRegConfirmUserResponse](docs/DeviceRegConfirmUserResponse.md)
 - [ArtikCloud.DeviceRegConfirmUserResponseEnvelope](docs/DeviceRegConfirmUserResponseEnvelope.md)
 - [ArtikCloud.DeviceRegStatusResponse](docs/DeviceRegStatusResponse.md)
 - [ArtikCloud.DeviceRegStatusResponseEnvelope](docs/DeviceRegStatusResponseEnvelope.md)
 - [ArtikCloud.DeviceShareInfo](docs/DeviceShareInfo.md)
 - [ArtikCloud.DeviceSharing](docs/DeviceSharing.md)
 - [ArtikCloud.DeviceSharingArray](docs/DeviceSharingArray.md)
 - [ArtikCloud.DeviceSharingEnvelope](docs/DeviceSharingEnvelope.md)
 - [ArtikCloud.DeviceSharingId](docs/DeviceSharingId.md)
 - [ArtikCloud.DeviceStatus](docs/DeviceStatus.md)
 - [ArtikCloud.DeviceStatusBatch](docs/DeviceStatusBatch.md)
 - [ArtikCloud.DeviceStatusData](docs/DeviceStatusData.md)
 - [ArtikCloud.DeviceStatusPut](docs/DeviceStatusPut.md)
 - [ArtikCloud.DeviceStatusPutData](docs/DeviceStatusPutData.md)
 - [ArtikCloud.DeviceTask](docs/DeviceTask.md)
 - [ArtikCloud.DeviceTaskUpdateRequest](docs/DeviceTaskUpdateRequest.md)
 - [ArtikCloud.DeviceTaskUpdateResponse](docs/DeviceTaskUpdateResponse.md)
 - [ArtikCloud.DeviceToken](docs/DeviceToken.md)
 - [ArtikCloud.DeviceTokenEnvelope](docs/DeviceTokenEnvelope.md)
 - [ArtikCloud.DeviceType](docs/DeviceType.md)
 - [ArtikCloud.DeviceTypeArray](docs/DeviceTypeArray.md)
 - [ArtikCloud.DeviceTypeEnvelope](docs/DeviceTypeEnvelope.md)
 - [ArtikCloud.DeviceTypeInfo](docs/DeviceTypeInfo.md)
 - [ArtikCloud.DeviceTypeInfoEnvelope](docs/DeviceTypeInfoEnvelope.md)
 - [ArtikCloud.DeviceTypesEnvelope](docs/DeviceTypesEnvelope.md)
 - [ArtikCloud.DeviceTypesInfo](docs/DeviceTypesInfo.md)
 - [ArtikCloud.DeviceTypesInfoEnvelope](docs/DeviceTypesInfoEnvelope.md)
 - [ArtikCloud.DevicesEnvelope](docs/DevicesEnvelope.md)
 - [ArtikCloud.ErrorEnvelope](docs/ErrorEnvelope.md)
 - [ArtikCloud.EventFeedData](docs/EventFeedData.md)
 - [ArtikCloud.ExportData](docs/ExportData.md)
 - [ArtikCloud.ExportDataArray](docs/ExportDataArray.md)
 - [ArtikCloud.ExportHistoryResponse](docs/ExportHistoryResponse.md)
 - [ArtikCloud.ExportNormalizedMessagesResponse](docs/ExportNormalizedMessagesResponse.md)
 - [ArtikCloud.ExportRequest](docs/ExportRequest.md)
 - [ArtikCloud.ExportRequestData](docs/ExportRequestData.md)
 - [ArtikCloud.ExportRequestInfo](docs/ExportRequestInfo.md)
 - [ArtikCloud.ExportRequestResponse](docs/ExportRequestResponse.md)
 - [ArtikCloud.ExportResponse](docs/ExportResponse.md)
 - [ArtikCloud.ExportStatusResponse](docs/ExportStatusResponse.md)
 - [ArtikCloud.FieldPath](docs/FieldPath.md)
 - [ArtikCloud.FieldPresence](docs/FieldPresence.md)
 - [ArtikCloud.FieldPresenceEnvelope](docs/FieldPresenceEnvelope.md)
 - [ArtikCloud.FieldsActions](docs/FieldsActions.md)
 - [ArtikCloud.ManifestProperties](docs/ManifestProperties.md)
 - [ArtikCloud.ManifestPropertiesEnvelope](docs/ManifestPropertiesEnvelope.md)
 - [ArtikCloud.ManifestVersions](docs/ManifestVersions.md)
 - [ArtikCloud.ManifestVersionsEnvelope](docs/ManifestVersionsEnvelope.md)
 - [ArtikCloud.Message](docs/Message.md)
 - [ArtikCloud.MessageAction](docs/MessageAction.md)
 - [ArtikCloud.MessageID](docs/MessageID.md)
 - [ArtikCloud.MessageIDEnvelope](docs/MessageIDEnvelope.md)
 - [ArtikCloud.MessageIn](docs/MessageIn.md)
 - [ArtikCloud.MessageOut](docs/MessageOut.md)
 - [ArtikCloud.MetadataEnvelope](docs/MetadataEnvelope.md)
 - [ArtikCloud.MetadataPropertiesEnvelope](docs/MetadataPropertiesEnvelope.md)
 - [ArtikCloud.MetadataQueryEnvelope](docs/MetadataQueryEnvelope.md)
 - [ArtikCloud.NonEmptyString](docs/NonEmptyString.md)
 - [ArtikCloud.NormalizedAction](docs/NormalizedAction.md)
 - [ArtikCloud.NormalizedActionsEnvelope](docs/NormalizedActionsEnvelope.md)
 - [ArtikCloud.NormalizedMessage](docs/NormalizedMessage.md)
 - [ArtikCloud.NormalizedMessagesEnvelope](docs/NormalizedMessagesEnvelope.md)
 - [ArtikCloud.NotifMessage](docs/NotifMessage.md)
 - [ArtikCloud.NotifMessageArray](docs/NotifMessageArray.md)
 - [ArtikCloud.NotifMessagesResponse](docs/NotifMessagesResponse.md)
 - [ArtikCloud.OutputRule](docs/OutputRule.md)
 - [ArtikCloud.PresenceEnvelope](docs/PresenceEnvelope.md)
 - [ArtikCloud.PresenceModel](docs/PresenceModel.md)
 - [ArtikCloud.PropertiesEnvelope](docs/PropertiesEnvelope.md)
 - [ArtikCloud.RefreshTokenResponse](docs/RefreshTokenResponse.md)
 - [ArtikCloud.RegisterMessage](docs/RegisterMessage.md)
 - [ArtikCloud.RuleArray](docs/RuleArray.md)
 - [ArtikCloud.RuleCreationInfo](docs/RuleCreationInfo.md)
 - [ArtikCloud.RuleEnvelope](docs/RuleEnvelope.md)
 - [ArtikCloud.RuleError](docs/RuleError.md)
 - [ArtikCloud.RuleUpdateInfo](docs/RuleUpdateInfo.md)
 - [ArtikCloud.RuleWarningOutput](docs/RuleWarningOutput.md)
 - [ArtikCloud.RulesEnvelope](docs/RulesEnvelope.md)
 - [ArtikCloud.SnapshotResponse](docs/SnapshotResponse.md)
 - [ArtikCloud.SnapshotResponses](docs/SnapshotResponses.md)
 - [ArtikCloud.SnapshotsResponseEnvelope](docs/SnapshotsResponseEnvelope.md)
 - [ArtikCloud.Subscription](docs/Subscription.md)
 - [ArtikCloud.SubscriptionArray](docs/SubscriptionArray.md)
 - [ArtikCloud.SubscriptionEnvelope](docs/SubscriptionEnvelope.md)
 - [ArtikCloud.SubscriptionInfo](docs/SubscriptionInfo.md)
 - [ArtikCloud.SubscriptionsEnvelope](docs/SubscriptionsEnvelope.md)
 - [ArtikCloud.Tag](docs/Tag.md)
 - [ArtikCloud.TagArray](docs/TagArray.md)
 - [ArtikCloud.TagsEnvelope](docs/TagsEnvelope.md)
 - [ArtikCloud.Task](docs/Task.md)
 - [ArtikCloud.TaskByDid](docs/TaskByDid.md)
 - [ArtikCloud.TaskByDidList](docs/TaskByDidList.md)
 - [ArtikCloud.TaskByDidListEnvelope](docs/TaskByDidListEnvelope.md)
 - [ArtikCloud.TaskEnvelope](docs/TaskEnvelope.md)
 - [ArtikCloud.TaskHistory](docs/TaskHistory.md)
 - [ArtikCloud.TaskHistoryList](docs/TaskHistoryList.md)
 - [ArtikCloud.TaskList](docs/TaskList.md)
 - [ArtikCloud.TaskListEnvelope](docs/TaskListEnvelope.md)
 - [ArtikCloud.TaskParameters](docs/TaskParameters.md)
 - [ArtikCloud.TaskRequest](docs/TaskRequest.md)
 - [ArtikCloud.TaskStatus](docs/TaskStatus.md)
 - [ArtikCloud.TaskStatusCounts](docs/TaskStatusCounts.md)
 - [ArtikCloud.TaskStatuses](docs/TaskStatuses.md)
 - [ArtikCloud.TaskStatusesEnvelope](docs/TaskStatusesEnvelope.md)
 - [ArtikCloud.TaskStatusesHistoryEnvelope](docs/TaskStatusesHistoryEnvelope.md)
 - [ArtikCloud.TaskUpdateRequest](docs/TaskUpdateRequest.md)
 - [ArtikCloud.TaskUpdateResponse](docs/TaskUpdateResponse.md)
 - [ArtikCloud.TasksStatusCounts](docs/TasksStatusCounts.md)
 - [ArtikCloud.Token](docs/Token.md)
 - [ArtikCloud.TokenInfo](docs/TokenInfo.md)
 - [ArtikCloud.TokenInfoSuccessResponse](docs/TokenInfoSuccessResponse.md)
 - [ArtikCloud.TokenRequest](docs/TokenRequest.md)
 - [ArtikCloud.TokenResponse](docs/TokenResponse.md)
 - [ArtikCloud.UnregisterDeviceResponse](docs/UnregisterDeviceResponse.md)
 - [ArtikCloud.UnregisterDeviceResponseEnvelope](docs/UnregisterDeviceResponseEnvelope.md)
 - [ArtikCloud.UpdateParameters](docs/UpdateParameters.md)
 - [ArtikCloud.User](docs/User.md)
 - [ArtikCloud.UserEnvelope](docs/UserEnvelope.md)
 - [ArtikCloud.ValidationCallbackInfo](docs/ValidationCallbackInfo.md)
 - [ArtikCloud.WebSocketError](docs/WebSocketError.md)


## Documentation for Authorization


### artikcloud_oauth

- **Type**: OAuth
- **Flow**: implicit
- **Authorizatoin URL**: https://accounts.artik.cloud/authorize
- **Scopes**: 
  - read:artikcloud: Read from ARTIK Cloud
  - write:artikcloud: Write from ARTIK Cloud



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

Copyright (c) 2017 Samsung Electronics Co., Ltd.
