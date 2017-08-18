(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AckEnvelope', './model/Acknowledgement', './model/Action', './model/ActionArray', './model/ActionDetails', './model/ActionDetailsArray', './model/ActionIn', './model/ActionOut', './model/Actions', './model/AggregateData', './model/AggregatesHistogramData', './model/AggregatesHistogramResponse', './model/AggregatesResponse', './model/AppProperties', './model/CheckTokenMessage', './model/CheckTokenResponse', './model/Device', './model/DeviceArray', './model/DeviceEnvelope', './model/DeviceRegCompleteRequest', './model/DeviceRegConfirmUserRequest', './model/DeviceRegConfirmUserResponse', './model/DeviceRegConfirmUserResponseEnvelope', './model/DeviceRegStatusResponse', './model/DeviceRegStatusResponseEnvelope', './model/DeviceShareInfo', './model/DeviceSharing', './model/DeviceSharingArray', './model/DeviceSharingEnvelope', './model/DeviceSharingId', './model/DeviceStatus', './model/DeviceStatusBatch', './model/DeviceStatusData', './model/DeviceStatusPut', './model/DeviceStatusPutData', './model/DeviceTask', './model/DeviceTaskUpdateRequest', './model/DeviceTaskUpdateResponse', './model/DeviceToken', './model/DeviceTokenEnvelope', './model/DeviceType', './model/DeviceTypeArray', './model/DeviceTypeEnvelope', './model/DeviceTypeInfo', './model/DeviceTypeInfoEnvelope', './model/DeviceTypesEnvelope', './model/DeviceTypesInfo', './model/DeviceTypesInfoEnvelope', './model/DevicesEnvelope', './model/ErrorEnvelope', './model/EventFeedData', './model/ExportData', './model/ExportDataArray', './model/ExportHistoryResponse', './model/ExportNormalizedMessagesResponse', './model/ExportRequest', './model/ExportRequestData', './model/ExportRequestInfo', './model/ExportRequestResponse', './model/ExportResponse', './model/ExportStatusResponse', './model/FieldPath', './model/FieldPresence', './model/FieldPresenceEnvelope', './model/FieldsActions', './model/ManifestProperties', './model/ManifestPropertiesEnvelope', './model/ManifestVersions', './model/ManifestVersionsEnvelope', './model/Message', './model/MessageAction', './model/MessageID', './model/MessageIDEnvelope', './model/MessageIn', './model/MessageOut', './model/MetadataEnvelope', './model/MetadataPropertiesEnvelope', './model/MetadataQueryEnvelope', './model/NonEmptyString', './model/NormalizedAction', './model/NormalizedActionsEnvelope', './model/NormalizedMessage', './model/NormalizedMessagesEnvelope', './model/NotifMessage', './model/NotifMessageArray', './model/NotifMessagesResponse', './model/OutputRule', './model/PresenceEnvelope', './model/PresenceModel', './model/PropertiesEnvelope', './model/RefreshTokenResponse', './model/RegisterMessage', './model/RuleArray', './model/RuleCreationInfo', './model/RuleEnvelope', './model/RuleError', './model/RuleUpdateInfo', './model/RuleWarningOutput', './model/RulesEnvelope', './model/SnapshotResponse', './model/SnapshotResponses', './model/SnapshotsResponseEnvelope', './model/Subscription', './model/SubscriptionArray', './model/SubscriptionEnvelope', './model/SubscriptionInfo', './model/SubscriptionsEnvelope', './model/Tag', './model/TagArray', './model/TagsEnvelope', './model/Task', './model/TaskByDid', './model/TaskByDidList', './model/TaskByDidListEnvelope', './model/TaskEnvelope', './model/TaskHistory', './model/TaskHistoryList', './model/TaskList', './model/TaskListEnvelope', './model/TaskParameters', './model/TaskRequest', './model/TaskStatus', './model/TaskStatusCounts', './model/TaskStatuses', './model/TaskStatusesEnvelope', './model/TaskStatusesHistoryEnvelope', './model/TaskUpdateRequest', './model/TaskUpdateResponse', './model/TasksStatusCounts', './model/Token', './model/TokenInfo', './model/TokenInfoSuccessResponse', './model/TokenRequest', './model/TokenResponse', './model/UnregisterDeviceResponse', './model/UnregisterDeviceResponseEnvelope', './model/UpdateParameters', './model/User', './model/UserEnvelope', './model/ValidationCallbackInfo', './model/WebSocketError', './api/DeviceTypesApi', './api/DevicesApi', './api/DevicesManagementApi', './api/DevicesSharesApi', './api/DevicesStatusApi', './api/ExportApi', './api/MessagesApi', './api/RegistrationsApi', './api/RulesApi', './api/SubscriptionsApi', './api/TagsApi', './api/TokensApi', './api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AckEnvelope'), require('./model/Acknowledgement'), require('./model/Action'), require('./model/ActionArray'), require('./model/ActionDetails'), require('./model/ActionDetailsArray'), require('./model/ActionIn'), require('./model/ActionOut'), require('./model/Actions'), require('./model/AggregateData'), require('./model/AggregatesHistogramData'), require('./model/AggregatesHistogramResponse'), require('./model/AggregatesResponse'), require('./model/AppProperties'), require('./model/CheckTokenMessage'), require('./model/CheckTokenResponse'), require('./model/Device'), require('./model/DeviceArray'), require('./model/DeviceEnvelope'), require('./model/DeviceRegCompleteRequest'), require('./model/DeviceRegConfirmUserRequest'), require('./model/DeviceRegConfirmUserResponse'), require('./model/DeviceRegConfirmUserResponseEnvelope'), require('./model/DeviceRegStatusResponse'), require('./model/DeviceRegStatusResponseEnvelope'), require('./model/DeviceShareInfo'), require('./model/DeviceSharing'), require('./model/DeviceSharingArray'), require('./model/DeviceSharingEnvelope'), require('./model/DeviceSharingId'), require('./model/DeviceStatus'), require('./model/DeviceStatusBatch'), require('./model/DeviceStatusData'), require('./model/DeviceStatusPut'), require('./model/DeviceStatusPutData'), require('./model/DeviceTask'), require('./model/DeviceTaskUpdateRequest'), require('./model/DeviceTaskUpdateResponse'), require('./model/DeviceToken'), require('./model/DeviceTokenEnvelope'), require('./model/DeviceType'), require('./model/DeviceTypeArray'), require('./model/DeviceTypeEnvelope'), require('./model/DeviceTypeInfo'), require('./model/DeviceTypeInfoEnvelope'), require('./model/DeviceTypesEnvelope'), require('./model/DeviceTypesInfo'), require('./model/DeviceTypesInfoEnvelope'), require('./model/DevicesEnvelope'), require('./model/ErrorEnvelope'), require('./model/EventFeedData'), require('./model/ExportData'), require('./model/ExportDataArray'), require('./model/ExportHistoryResponse'), require('./model/ExportNormalizedMessagesResponse'), require('./model/ExportRequest'), require('./model/ExportRequestData'), require('./model/ExportRequestInfo'), require('./model/ExportRequestResponse'), require('./model/ExportResponse'), require('./model/ExportStatusResponse'), require('./model/FieldPath'), require('./model/FieldPresence'), require('./model/FieldPresenceEnvelope'), require('./model/FieldsActions'), require('./model/ManifestProperties'), require('./model/ManifestPropertiesEnvelope'), require('./model/ManifestVersions'), require('./model/ManifestVersionsEnvelope'), require('./model/Message'), require('./model/MessageAction'), require('./model/MessageID'), require('./model/MessageIDEnvelope'), require('./model/MessageIn'), require('./model/MessageOut'), require('./model/MetadataEnvelope'), require('./model/MetadataPropertiesEnvelope'), require('./model/MetadataQueryEnvelope'), require('./model/NonEmptyString'), require('./model/NormalizedAction'), require('./model/NormalizedActionsEnvelope'), require('./model/NormalizedMessage'), require('./model/NormalizedMessagesEnvelope'), require('./model/NotifMessage'), require('./model/NotifMessageArray'), require('./model/NotifMessagesResponse'), require('./model/OutputRule'), require('./model/PresenceEnvelope'), require('./model/PresenceModel'), require('./model/PropertiesEnvelope'), require('./model/RefreshTokenResponse'), require('./model/RegisterMessage'), require('./model/RuleArray'), require('./model/RuleCreationInfo'), require('./model/RuleEnvelope'), require('./model/RuleError'), require('./model/RuleUpdateInfo'), require('./model/RuleWarningOutput'), require('./model/RulesEnvelope'), require('./model/SnapshotResponse'), require('./model/SnapshotResponses'), require('./model/SnapshotsResponseEnvelope'), require('./model/Subscription'), require('./model/SubscriptionArray'), require('./model/SubscriptionEnvelope'), require('./model/SubscriptionInfo'), require('./model/SubscriptionsEnvelope'), require('./model/Tag'), require('./model/TagArray'), require('./model/TagsEnvelope'), require('./model/Task'), require('./model/TaskByDid'), require('./model/TaskByDidList'), require('./model/TaskByDidListEnvelope'), require('./model/TaskEnvelope'), require('./model/TaskHistory'), require('./model/TaskHistoryList'), require('./model/TaskList'), require('./model/TaskListEnvelope'), require('./model/TaskParameters'), require('./model/TaskRequest'), require('./model/TaskStatus'), require('./model/TaskStatusCounts'), require('./model/TaskStatuses'), require('./model/TaskStatusesEnvelope'), require('./model/TaskStatusesHistoryEnvelope'), require('./model/TaskUpdateRequest'), require('./model/TaskUpdateResponse'), require('./model/TasksStatusCounts'), require('./model/Token'), require('./model/TokenInfo'), require('./model/TokenInfoSuccessResponse'), require('./model/TokenRequest'), require('./model/TokenResponse'), require('./model/UnregisterDeviceResponse'), require('./model/UnregisterDeviceResponseEnvelope'), require('./model/UpdateParameters'), require('./model/User'), require('./model/UserEnvelope'), require('./model/ValidationCallbackInfo'), require('./model/WebSocketError'), require('./api/DeviceTypesApi'), require('./api/DevicesApi'), require('./api/DevicesManagementApi'), require('./api/DevicesSharesApi'), require('./api/DevicesStatusApi'), require('./api/ExportApi'), require('./api/MessagesApi'), require('./api/RegistrationsApi'), require('./api/RulesApi'), require('./api/SubscriptionsApi'), require('./api/TagsApi'), require('./api/TokensApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, AckEnvelope, Acknowledgement, Action, ActionArray, ActionDetails, ActionDetailsArray, ActionIn, ActionOut, Actions, AggregateData, AggregatesHistogramData, AggregatesHistogramResponse, AggregatesResponse, AppProperties, CheckTokenMessage, CheckTokenResponse, Device, DeviceArray, DeviceEnvelope, DeviceRegCompleteRequest, DeviceRegConfirmUserRequest, DeviceRegConfirmUserResponse, DeviceRegConfirmUserResponseEnvelope, DeviceRegStatusResponse, DeviceRegStatusResponseEnvelope, DeviceShareInfo, DeviceSharing, DeviceSharingArray, DeviceSharingEnvelope, DeviceSharingId, DeviceStatus, DeviceStatusBatch, DeviceStatusData, DeviceStatusPut, DeviceStatusPutData, DeviceTask, DeviceTaskUpdateRequest, DeviceTaskUpdateResponse, DeviceToken, DeviceTokenEnvelope, DeviceType, DeviceTypeArray, DeviceTypeEnvelope, DeviceTypeInfo, DeviceTypeInfoEnvelope, DeviceTypesEnvelope, DeviceTypesInfo, DeviceTypesInfoEnvelope, DevicesEnvelope, ErrorEnvelope, EventFeedData, ExportData, ExportDataArray, ExportHistoryResponse, ExportNormalizedMessagesResponse, ExportRequest, ExportRequestData, ExportRequestInfo, ExportRequestResponse, ExportResponse, ExportStatusResponse, FieldPath, FieldPresence, FieldPresenceEnvelope, FieldsActions, ManifestProperties, ManifestPropertiesEnvelope, ManifestVersions, ManifestVersionsEnvelope, Message, MessageAction, MessageID, MessageIDEnvelope, MessageIn, MessageOut, MetadataEnvelope, MetadataPropertiesEnvelope, MetadataQueryEnvelope, NonEmptyString, NormalizedAction, NormalizedActionsEnvelope, NormalizedMessage, NormalizedMessagesEnvelope, NotifMessage, NotifMessageArray, NotifMessagesResponse, OutputRule, PresenceEnvelope, PresenceModel, PropertiesEnvelope, RefreshTokenResponse, RegisterMessage, RuleArray, RuleCreationInfo, RuleEnvelope, RuleError, RuleUpdateInfo, RuleWarningOutput, RulesEnvelope, SnapshotResponse, SnapshotResponses, SnapshotsResponseEnvelope, Subscription, SubscriptionArray, SubscriptionEnvelope, SubscriptionInfo, SubscriptionsEnvelope, Tag, TagArray, TagsEnvelope, Task, TaskByDid, TaskByDidList, TaskByDidListEnvelope, TaskEnvelope, TaskHistory, TaskHistoryList, TaskList, TaskListEnvelope, TaskParameters, TaskRequest, TaskStatus, TaskStatusCounts, TaskStatuses, TaskStatusesEnvelope, TaskStatusesHistoryEnvelope, TaskUpdateRequest, TaskUpdateResponse, TasksStatusCounts, Token, TokenInfo, TokenInfoSuccessResponse, TokenRequest, TokenResponse, UnregisterDeviceResponse, UnregisterDeviceResponseEnvelope, UpdateParameters, User, UserEnvelope, ValidationCallbackInfo, WebSocketError, DeviceTypesApi, DevicesApi, DevicesManagementApi, DevicesSharesApi, DevicesStatusApi, ExportApi, MessagesApi, RegistrationsApi, RulesApi, SubscriptionsApi, TagsApi, TokensApi, UsersApi) {
  'use strict';

  /**
   * JS, Node.js client for ARTIK Cloud.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ArtikCloud = require('./index'); // See note below*.
   * var xxxSvc = new ArtikCloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ArtikCloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ArtikCloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ArtikCloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.6
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AckEnvelope model constructor.
     * @property {module:model/AckEnvelope}
     */
    AckEnvelope: AckEnvelope,
    /**
     * The Acknowledgement model constructor.
     * @property {module:model/Acknowledgement}
     */
    Acknowledgement: Acknowledgement,
    /**
     * The Action model constructor.
     * @property {module:model/Action}
     */
    Action: Action,
    /**
     * The ActionArray model constructor.
     * @property {module:model/ActionArray}
     */
    ActionArray: ActionArray,
    /**
     * The ActionDetails model constructor.
     * @property {module:model/ActionDetails}
     */
    ActionDetails: ActionDetails,
    /**
     * The ActionDetailsArray model constructor.
     * @property {module:model/ActionDetailsArray}
     */
    ActionDetailsArray: ActionDetailsArray,
    /**
     * The ActionIn model constructor.
     * @property {module:model/ActionIn}
     */
    ActionIn: ActionIn,
    /**
     * The ActionOut model constructor.
     * @property {module:model/ActionOut}
     */
    ActionOut: ActionOut,
    /**
     * The Actions model constructor.
     * @property {module:model/Actions}
     */
    Actions: Actions,
    /**
     * The AggregateData model constructor.
     * @property {module:model/AggregateData}
     */
    AggregateData: AggregateData,
    /**
     * The AggregatesHistogramData model constructor.
     * @property {module:model/AggregatesHistogramData}
     */
    AggregatesHistogramData: AggregatesHistogramData,
    /**
     * The AggregatesHistogramResponse model constructor.
     * @property {module:model/AggregatesHistogramResponse}
     */
    AggregatesHistogramResponse: AggregatesHistogramResponse,
    /**
     * The AggregatesResponse model constructor.
     * @property {module:model/AggregatesResponse}
     */
    AggregatesResponse: AggregatesResponse,
    /**
     * The AppProperties model constructor.
     * @property {module:model/AppProperties}
     */
    AppProperties: AppProperties,
    /**
     * The CheckTokenMessage model constructor.
     * @property {module:model/CheckTokenMessage}
     */
    CheckTokenMessage: CheckTokenMessage,
    /**
     * The CheckTokenResponse model constructor.
     * @property {module:model/CheckTokenResponse}
     */
    CheckTokenResponse: CheckTokenResponse,
    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device: Device,
    /**
     * The DeviceArray model constructor.
     * @property {module:model/DeviceArray}
     */
    DeviceArray: DeviceArray,
    /**
     * The DeviceEnvelope model constructor.
     * @property {module:model/DeviceEnvelope}
     */
    DeviceEnvelope: DeviceEnvelope,
    /**
     * The DeviceRegCompleteRequest model constructor.
     * @property {module:model/DeviceRegCompleteRequest}
     */
    DeviceRegCompleteRequest: DeviceRegCompleteRequest,
    /**
     * The DeviceRegConfirmUserRequest model constructor.
     * @property {module:model/DeviceRegConfirmUserRequest}
     */
    DeviceRegConfirmUserRequest: DeviceRegConfirmUserRequest,
    /**
     * The DeviceRegConfirmUserResponse model constructor.
     * @property {module:model/DeviceRegConfirmUserResponse}
     */
    DeviceRegConfirmUserResponse: DeviceRegConfirmUserResponse,
    /**
     * The DeviceRegConfirmUserResponseEnvelope model constructor.
     * @property {module:model/DeviceRegConfirmUserResponseEnvelope}
     */
    DeviceRegConfirmUserResponseEnvelope: DeviceRegConfirmUserResponseEnvelope,
    /**
     * The DeviceRegStatusResponse model constructor.
     * @property {module:model/DeviceRegStatusResponse}
     */
    DeviceRegStatusResponse: DeviceRegStatusResponse,
    /**
     * The DeviceRegStatusResponseEnvelope model constructor.
     * @property {module:model/DeviceRegStatusResponseEnvelope}
     */
    DeviceRegStatusResponseEnvelope: DeviceRegStatusResponseEnvelope,
    /**
     * The DeviceShareInfo model constructor.
     * @property {module:model/DeviceShareInfo}
     */
    DeviceShareInfo: DeviceShareInfo,
    /**
     * The DeviceSharing model constructor.
     * @property {module:model/DeviceSharing}
     */
    DeviceSharing: DeviceSharing,
    /**
     * The DeviceSharingArray model constructor.
     * @property {module:model/DeviceSharingArray}
     */
    DeviceSharingArray: DeviceSharingArray,
    /**
     * The DeviceSharingEnvelope model constructor.
     * @property {module:model/DeviceSharingEnvelope}
     */
    DeviceSharingEnvelope: DeviceSharingEnvelope,
    /**
     * The DeviceSharingId model constructor.
     * @property {module:model/DeviceSharingId}
     */
    DeviceSharingId: DeviceSharingId,
    /**
     * The DeviceStatus model constructor.
     * @property {module:model/DeviceStatus}
     */
    DeviceStatus: DeviceStatus,
    /**
     * The DeviceStatusBatch model constructor.
     * @property {module:model/DeviceStatusBatch}
     */
    DeviceStatusBatch: DeviceStatusBatch,
    /**
     * The DeviceStatusData model constructor.
     * @property {module:model/DeviceStatusData}
     */
    DeviceStatusData: DeviceStatusData,
    /**
     * The DeviceStatusPut model constructor.
     * @property {module:model/DeviceStatusPut}
     */
    DeviceStatusPut: DeviceStatusPut,
    /**
     * The DeviceStatusPutData model constructor.
     * @property {module:model/DeviceStatusPutData}
     */
    DeviceStatusPutData: DeviceStatusPutData,
    /**
     * The DeviceTask model constructor.
     * @property {module:model/DeviceTask}
     */
    DeviceTask: DeviceTask,
    /**
     * The DeviceTaskUpdateRequest model constructor.
     * @property {module:model/DeviceTaskUpdateRequest}
     */
    DeviceTaskUpdateRequest: DeviceTaskUpdateRequest,
    /**
     * The DeviceTaskUpdateResponse model constructor.
     * @property {module:model/DeviceTaskUpdateResponse}
     */
    DeviceTaskUpdateResponse: DeviceTaskUpdateResponse,
    /**
     * The DeviceToken model constructor.
     * @property {module:model/DeviceToken}
     */
    DeviceToken: DeviceToken,
    /**
     * The DeviceTokenEnvelope model constructor.
     * @property {module:model/DeviceTokenEnvelope}
     */
    DeviceTokenEnvelope: DeviceTokenEnvelope,
    /**
     * The DeviceType model constructor.
     * @property {module:model/DeviceType}
     */
    DeviceType: DeviceType,
    /**
     * The DeviceTypeArray model constructor.
     * @property {module:model/DeviceTypeArray}
     */
    DeviceTypeArray: DeviceTypeArray,
    /**
     * The DeviceTypeEnvelope model constructor.
     * @property {module:model/DeviceTypeEnvelope}
     */
    DeviceTypeEnvelope: DeviceTypeEnvelope,
    /**
     * The DeviceTypeInfo model constructor.
     * @property {module:model/DeviceTypeInfo}
     */
    DeviceTypeInfo: DeviceTypeInfo,
    /**
     * The DeviceTypeInfoEnvelope model constructor.
     * @property {module:model/DeviceTypeInfoEnvelope}
     */
    DeviceTypeInfoEnvelope: DeviceTypeInfoEnvelope,
    /**
     * The DeviceTypesEnvelope model constructor.
     * @property {module:model/DeviceTypesEnvelope}
     */
    DeviceTypesEnvelope: DeviceTypesEnvelope,
    /**
     * The DeviceTypesInfo model constructor.
     * @property {module:model/DeviceTypesInfo}
     */
    DeviceTypesInfo: DeviceTypesInfo,
    /**
     * The DeviceTypesInfoEnvelope model constructor.
     * @property {module:model/DeviceTypesInfoEnvelope}
     */
    DeviceTypesInfoEnvelope: DeviceTypesInfoEnvelope,
    /**
     * The DevicesEnvelope model constructor.
     * @property {module:model/DevicesEnvelope}
     */
    DevicesEnvelope: DevicesEnvelope,
    /**
     * The ErrorEnvelope model constructor.
     * @property {module:model/ErrorEnvelope}
     */
    ErrorEnvelope: ErrorEnvelope,
    /**
     * The EventFeedData model constructor.
     * @property {module:model/EventFeedData}
     */
    EventFeedData: EventFeedData,
    /**
     * The ExportData model constructor.
     * @property {module:model/ExportData}
     */
    ExportData: ExportData,
    /**
     * The ExportDataArray model constructor.
     * @property {module:model/ExportDataArray}
     */
    ExportDataArray: ExportDataArray,
    /**
     * The ExportHistoryResponse model constructor.
     * @property {module:model/ExportHistoryResponse}
     */
    ExportHistoryResponse: ExportHistoryResponse,
    /**
     * The ExportNormalizedMessagesResponse model constructor.
     * @property {module:model/ExportNormalizedMessagesResponse}
     */
    ExportNormalizedMessagesResponse: ExportNormalizedMessagesResponse,
    /**
     * The ExportRequest model constructor.
     * @property {module:model/ExportRequest}
     */
    ExportRequest: ExportRequest,
    /**
     * The ExportRequestData model constructor.
     * @property {module:model/ExportRequestData}
     */
    ExportRequestData: ExportRequestData,
    /**
     * The ExportRequestInfo model constructor.
     * @property {module:model/ExportRequestInfo}
     */
    ExportRequestInfo: ExportRequestInfo,
    /**
     * The ExportRequestResponse model constructor.
     * @property {module:model/ExportRequestResponse}
     */
    ExportRequestResponse: ExportRequestResponse,
    /**
     * The ExportResponse model constructor.
     * @property {module:model/ExportResponse}
     */
    ExportResponse: ExportResponse,
    /**
     * The ExportStatusResponse model constructor.
     * @property {module:model/ExportStatusResponse}
     */
    ExportStatusResponse: ExportStatusResponse,
    /**
     * The FieldPath model constructor.
     * @property {module:model/FieldPath}
     */
    FieldPath: FieldPath,
    /**
     * The FieldPresence model constructor.
     * @property {module:model/FieldPresence}
     */
    FieldPresence: FieldPresence,
    /**
     * The FieldPresenceEnvelope model constructor.
     * @property {module:model/FieldPresenceEnvelope}
     */
    FieldPresenceEnvelope: FieldPresenceEnvelope,
    /**
     * The FieldsActions model constructor.
     * @property {module:model/FieldsActions}
     */
    FieldsActions: FieldsActions,
    /**
     * The ManifestProperties model constructor.
     * @property {module:model/ManifestProperties}
     */
    ManifestProperties: ManifestProperties,
    /**
     * The ManifestPropertiesEnvelope model constructor.
     * @property {module:model/ManifestPropertiesEnvelope}
     */
    ManifestPropertiesEnvelope: ManifestPropertiesEnvelope,
    /**
     * The ManifestVersions model constructor.
     * @property {module:model/ManifestVersions}
     */
    ManifestVersions: ManifestVersions,
    /**
     * The ManifestVersionsEnvelope model constructor.
     * @property {module:model/ManifestVersionsEnvelope}
     */
    ManifestVersionsEnvelope: ManifestVersionsEnvelope,
    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message: Message,
    /**
     * The MessageAction model constructor.
     * @property {module:model/MessageAction}
     */
    MessageAction: MessageAction,
    /**
     * The MessageID model constructor.
     * @property {module:model/MessageID}
     */
    MessageID: MessageID,
    /**
     * The MessageIDEnvelope model constructor.
     * @property {module:model/MessageIDEnvelope}
     */
    MessageIDEnvelope: MessageIDEnvelope,
    /**
     * The MessageIn model constructor.
     * @property {module:model/MessageIn}
     */
    MessageIn: MessageIn,
    /**
     * The MessageOut model constructor.
     * @property {module:model/MessageOut}
     */
    MessageOut: MessageOut,
    /**
     * The MetadataEnvelope model constructor.
     * @property {module:model/MetadataEnvelope}
     */
    MetadataEnvelope: MetadataEnvelope,
    /**
     * The MetadataPropertiesEnvelope model constructor.
     * @property {module:model/MetadataPropertiesEnvelope}
     */
    MetadataPropertiesEnvelope: MetadataPropertiesEnvelope,
    /**
     * The MetadataQueryEnvelope model constructor.
     * @property {module:model/MetadataQueryEnvelope}
     */
    MetadataQueryEnvelope: MetadataQueryEnvelope,
    /**
     * The NonEmptyString model constructor.
     * @property {module:model/NonEmptyString}
     */
    NonEmptyString: NonEmptyString,
    /**
     * The NormalizedAction model constructor.
     * @property {module:model/NormalizedAction}
     */
    NormalizedAction: NormalizedAction,
    /**
     * The NormalizedActionsEnvelope model constructor.
     * @property {module:model/NormalizedActionsEnvelope}
     */
    NormalizedActionsEnvelope: NormalizedActionsEnvelope,
    /**
     * The NormalizedMessage model constructor.
     * @property {module:model/NormalizedMessage}
     */
    NormalizedMessage: NormalizedMessage,
    /**
     * The NormalizedMessagesEnvelope model constructor.
     * @property {module:model/NormalizedMessagesEnvelope}
     */
    NormalizedMessagesEnvelope: NormalizedMessagesEnvelope,
    /**
     * The NotifMessage model constructor.
     * @property {module:model/NotifMessage}
     */
    NotifMessage: NotifMessage,
    /**
     * The NotifMessageArray model constructor.
     * @property {module:model/NotifMessageArray}
     */
    NotifMessageArray: NotifMessageArray,
    /**
     * The NotifMessagesResponse model constructor.
     * @property {module:model/NotifMessagesResponse}
     */
    NotifMessagesResponse: NotifMessagesResponse,
    /**
     * The OutputRule model constructor.
     * @property {module:model/OutputRule}
     */
    OutputRule: OutputRule,
    /**
     * The PresenceEnvelope model constructor.
     * @property {module:model/PresenceEnvelope}
     */
    PresenceEnvelope: PresenceEnvelope,
    /**
     * The PresenceModel model constructor.
     * @property {module:model/PresenceModel}
     */
    PresenceModel: PresenceModel,
    /**
     * The PropertiesEnvelope model constructor.
     * @property {module:model/PropertiesEnvelope}
     */
    PropertiesEnvelope: PropertiesEnvelope,
    /**
     * The RefreshTokenResponse model constructor.
     * @property {module:model/RefreshTokenResponse}
     */
    RefreshTokenResponse: RefreshTokenResponse,
    /**
     * The RegisterMessage model constructor.
     * @property {module:model/RegisterMessage}
     */
    RegisterMessage: RegisterMessage,
    /**
     * The RuleArray model constructor.
     * @property {module:model/RuleArray}
     */
    RuleArray: RuleArray,
    /**
     * The RuleCreationInfo model constructor.
     * @property {module:model/RuleCreationInfo}
     */
    RuleCreationInfo: RuleCreationInfo,
    /**
     * The RuleEnvelope model constructor.
     * @property {module:model/RuleEnvelope}
     */
    RuleEnvelope: RuleEnvelope,
    /**
     * The RuleError model constructor.
     * @property {module:model/RuleError}
     */
    RuleError: RuleError,
    /**
     * The RuleUpdateInfo model constructor.
     * @property {module:model/RuleUpdateInfo}
     */
    RuleUpdateInfo: RuleUpdateInfo,
    /**
     * The RuleWarningOutput model constructor.
     * @property {module:model/RuleWarningOutput}
     */
    RuleWarningOutput: RuleWarningOutput,
    /**
     * The RulesEnvelope model constructor.
     * @property {module:model/RulesEnvelope}
     */
    RulesEnvelope: RulesEnvelope,
    /**
     * The SnapshotResponse model constructor.
     * @property {module:model/SnapshotResponse}
     */
    SnapshotResponse: SnapshotResponse,
    /**
     * The SnapshotResponses model constructor.
     * @property {module:model/SnapshotResponses}
     */
    SnapshotResponses: SnapshotResponses,
    /**
     * The SnapshotsResponseEnvelope model constructor.
     * @property {module:model/SnapshotsResponseEnvelope}
     */
    SnapshotsResponseEnvelope: SnapshotsResponseEnvelope,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The SubscriptionArray model constructor.
     * @property {module:model/SubscriptionArray}
     */
    SubscriptionArray: SubscriptionArray,
    /**
     * The SubscriptionEnvelope model constructor.
     * @property {module:model/SubscriptionEnvelope}
     */
    SubscriptionEnvelope: SubscriptionEnvelope,
    /**
     * The SubscriptionInfo model constructor.
     * @property {module:model/SubscriptionInfo}
     */
    SubscriptionInfo: SubscriptionInfo,
    /**
     * The SubscriptionsEnvelope model constructor.
     * @property {module:model/SubscriptionsEnvelope}
     */
    SubscriptionsEnvelope: SubscriptionsEnvelope,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TagArray model constructor.
     * @property {module:model/TagArray}
     */
    TagArray: TagArray,
    /**
     * The TagsEnvelope model constructor.
     * @property {module:model/TagsEnvelope}
     */
    TagsEnvelope: TagsEnvelope,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The TaskByDid model constructor.
     * @property {module:model/TaskByDid}
     */
    TaskByDid: TaskByDid,
    /**
     * The TaskByDidList model constructor.
     * @property {module:model/TaskByDidList}
     */
    TaskByDidList: TaskByDidList,
    /**
     * The TaskByDidListEnvelope model constructor.
     * @property {module:model/TaskByDidListEnvelope}
     */
    TaskByDidListEnvelope: TaskByDidListEnvelope,
    /**
     * The TaskEnvelope model constructor.
     * @property {module:model/TaskEnvelope}
     */
    TaskEnvelope: TaskEnvelope,
    /**
     * The TaskHistory model constructor.
     * @property {module:model/TaskHistory}
     */
    TaskHistory: TaskHistory,
    /**
     * The TaskHistoryList model constructor.
     * @property {module:model/TaskHistoryList}
     */
    TaskHistoryList: TaskHistoryList,
    /**
     * The TaskList model constructor.
     * @property {module:model/TaskList}
     */
    TaskList: TaskList,
    /**
     * The TaskListEnvelope model constructor.
     * @property {module:model/TaskListEnvelope}
     */
    TaskListEnvelope: TaskListEnvelope,
    /**
     * The TaskParameters model constructor.
     * @property {module:model/TaskParameters}
     */
    TaskParameters: TaskParameters,
    /**
     * The TaskRequest model constructor.
     * @property {module:model/TaskRequest}
     */
    TaskRequest: TaskRequest,
    /**
     * The TaskStatus model constructor.
     * @property {module:model/TaskStatus}
     */
    TaskStatus: TaskStatus,
    /**
     * The TaskStatusCounts model constructor.
     * @property {module:model/TaskStatusCounts}
     */
    TaskStatusCounts: TaskStatusCounts,
    /**
     * The TaskStatuses model constructor.
     * @property {module:model/TaskStatuses}
     */
    TaskStatuses: TaskStatuses,
    /**
     * The TaskStatusesEnvelope model constructor.
     * @property {module:model/TaskStatusesEnvelope}
     */
    TaskStatusesEnvelope: TaskStatusesEnvelope,
    /**
     * The TaskStatusesHistoryEnvelope model constructor.
     * @property {module:model/TaskStatusesHistoryEnvelope}
     */
    TaskStatusesHistoryEnvelope: TaskStatusesHistoryEnvelope,
    /**
     * The TaskUpdateRequest model constructor.
     * @property {module:model/TaskUpdateRequest}
     */
    TaskUpdateRequest: TaskUpdateRequest,
    /**
     * The TaskUpdateResponse model constructor.
     * @property {module:model/TaskUpdateResponse}
     */
    TaskUpdateResponse: TaskUpdateResponse,
    /**
     * The TasksStatusCounts model constructor.
     * @property {module:model/TasksStatusCounts}
     */
    TasksStatusCounts: TasksStatusCounts,
    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The TokenInfo model constructor.
     * @property {module:model/TokenInfo}
     */
    TokenInfo: TokenInfo,
    /**
     * The TokenInfoSuccessResponse model constructor.
     * @property {module:model/TokenInfoSuccessResponse}
     */
    TokenInfoSuccessResponse: TokenInfoSuccessResponse,
    /**
     * The TokenRequest model constructor.
     * @property {module:model/TokenRequest}
     */
    TokenRequest: TokenRequest,
    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse: TokenResponse,
    /**
     * The UnregisterDeviceResponse model constructor.
     * @property {module:model/UnregisterDeviceResponse}
     */
    UnregisterDeviceResponse: UnregisterDeviceResponse,
    /**
     * The UnregisterDeviceResponseEnvelope model constructor.
     * @property {module:model/UnregisterDeviceResponseEnvelope}
     */
    UnregisterDeviceResponseEnvelope: UnregisterDeviceResponseEnvelope,
    /**
     * The UpdateParameters model constructor.
     * @property {module:model/UpdateParameters}
     */
    UpdateParameters: UpdateParameters,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserEnvelope model constructor.
     * @property {module:model/UserEnvelope}
     */
    UserEnvelope: UserEnvelope,
    /**
     * The ValidationCallbackInfo model constructor.
     * @property {module:model/ValidationCallbackInfo}
     */
    ValidationCallbackInfo: ValidationCallbackInfo,
    /**
     * The WebSocketError model constructor.
     * @property {module:model/WebSocketError}
     */
    WebSocketError: WebSocketError,
    /**
     * The DeviceTypesApi service constructor.
     * @property {module:api/DeviceTypesApi}
     */
    DeviceTypesApi: DeviceTypesApi,
    /**
     * The DevicesApi service constructor.
     * @property {module:api/DevicesApi}
     */
    DevicesApi: DevicesApi,
    /**
     * The DevicesManagementApi service constructor.
     * @property {module:api/DevicesManagementApi}
     */
    DevicesManagementApi: DevicesManagementApi,
    /**
     * The DevicesSharesApi service constructor.
     * @property {module:api/DevicesSharesApi}
     */
    DevicesSharesApi: DevicesSharesApi,
    /**
     * The DevicesStatusApi service constructor.
     * @property {module:api/DevicesStatusApi}
     */
    DevicesStatusApi: DevicesStatusApi,
    /**
     * The ExportApi service constructor.
     * @property {module:api/ExportApi}
     */
    ExportApi: ExportApi,
    /**
     * The MessagesApi service constructor.
     * @property {module:api/MessagesApi}
     */
    MessagesApi: MessagesApi,
    /**
     * The RegistrationsApi service constructor.
     * @property {module:api/RegistrationsApi}
     */
    RegistrationsApi: RegistrationsApi,
    /**
     * The RulesApi service constructor.
     * @property {module:api/RulesApi}
     */
    RulesApi: RulesApi,
    /**
     * The SubscriptionsApi service constructor.
     * @property {module:api/SubscriptionsApi}
     */
    SubscriptionsApi: SubscriptionsApi,
    /**
     * The TagsApi service constructor.
     * @property {module:api/TagsApi}
     */
    TagsApi: TagsApi,
    /**
     * The TokensApi service constructor.
     * @property {module:api/TokensApi}
     */
    TokensApi: TokensApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
