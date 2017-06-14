(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DeviceTaskUpdateRequest', '../model/DeviceTaskUpdateResponse', '../model/DeviceTypesInfo', '../model/DeviceTypesInfoEnvelope', '../model/MetadataEnvelope', '../model/MetadataPropertiesEnvelope', '../model/MetadataQueryEnvelope', '../model/TaskByDidListEnvelope', '../model/TaskEnvelope', '../model/TaskListEnvelope', '../model/TaskRequest', '../model/TaskStatusesEnvelope', '../model/TaskStatusesHistoryEnvelope', '../model/TaskUpdateRequest', '../model/TaskUpdateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceTaskUpdateRequest'), require('../model/DeviceTaskUpdateResponse'), require('../model/DeviceTypesInfo'), require('../model/DeviceTypesInfoEnvelope'), require('../model/MetadataEnvelope'), require('../model/MetadataPropertiesEnvelope'), require('../model/MetadataQueryEnvelope'), require('../model/TaskByDidListEnvelope'), require('../model/TaskEnvelope'), require('../model/TaskListEnvelope'), require('../model/TaskRequest'), require('../model/TaskStatusesEnvelope'), require('../model/TaskStatusesHistoryEnvelope'), require('../model/TaskUpdateRequest'), require('../model/TaskUpdateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DevicesManagementApi = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.DeviceTaskUpdateRequest, root.ArtikCloud.DeviceTaskUpdateResponse, root.ArtikCloud.DeviceTypesInfo, root.ArtikCloud.DeviceTypesInfoEnvelope, root.ArtikCloud.MetadataEnvelope, root.ArtikCloud.MetadataPropertiesEnvelope, root.ArtikCloud.MetadataQueryEnvelope, root.ArtikCloud.TaskByDidListEnvelope, root.ArtikCloud.TaskEnvelope, root.ArtikCloud.TaskListEnvelope, root.ArtikCloud.TaskRequest, root.ArtikCloud.TaskStatusesEnvelope, root.ArtikCloud.TaskStatusesHistoryEnvelope, root.ArtikCloud.TaskUpdateRequest, root.ArtikCloud.TaskUpdateResponse);
  }
}(this, function(ApiClient, DeviceTaskUpdateRequest, DeviceTaskUpdateResponse, DeviceTypesInfo, DeviceTypesInfoEnvelope, MetadataEnvelope, MetadataPropertiesEnvelope, MetadataQueryEnvelope, TaskByDidListEnvelope, TaskEnvelope, TaskListEnvelope, TaskRequest, TaskStatusesEnvelope, TaskStatusesHistoryEnvelope, TaskUpdateRequest, TaskUpdateResponse) {
  'use strict';

  /**
   * DevicesManagement service.
   * @module api/DevicesManagementApi
   * @version 2.0.6
   */

  /**
   * Constructs a new DevicesManagementApi. 
   * @alias module:api/DevicesManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTasks operation.
     * @callback module:api/DevicesManagementApi~createTasksCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new task for one or more devices
     * Create a new task for one or more devices
     * @param module:model/TaskRequest taskPayload Task object to be created
     * @param {module:api/DevicesManagementApi~createTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskEnvelope
     */
    this.createTasks = function(taskPayload, callback) {
      var postBody = taskPayload;

      // verify the required parameter 'taskPayload' is set
      if (taskPayload == undefined || taskPayload == null) {
        throw "Missing the required parameter 'taskPayload' when calling createTasks";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteServerProperties operation.
     * @callback module:api/DevicesManagementApi~deleteServerPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/MetadataEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a device&#39;s properties.
     * Deletes a device&#39;s properties.
     * @param String did Device ID.
     * @param {module:api/DevicesManagementApi~deleteServerPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MetadataEnvelope
     */
    this.deleteServerProperties = function(did, callback) {
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling deleteServerProperties";
      }


      var pathParams = {
        'did': did
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MetadataEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devices/{did}/serverproperties', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllByDid operation.
     * @callback module:api/DevicesManagementApi~getAllByDidCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskByDidListEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of tasks for a particular device id with optional status filter.
     * Returns the list of tasks for a particular device id with optional status filter.
     * @param String did Device ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Max results count.
     * @param Number opts.offset Result starting offset.
     * @param String opts.status Status filter. Comma-separated statuses.
     * @param String opts.order Sort results by a field. Valid fields: createdOn.
     * @param String opts.sort Sort order. Valid values: asc or desc.
     * @param {module:api/DevicesManagementApi~getAllByDidCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskByDidListEnvelope
     */
    this.getAllByDid = function(did, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling getAllByDid";
      }


      var pathParams = {
        'did': did
      };
      var queryParams = {
        'count': opts['count'],
        'offset': opts['offset'],
        'status': opts['status'],
        'order': opts['order'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskByDidListEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devices/{did}/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceTypesInfo operation.
     * @callback module:api/DevicesManagementApi~getDeviceTypesInfoCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypesInfoEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a device type device management information.
     * Read a device type device management information.
     * @param String dtid Device type ID.
     * @param {module:api/DevicesManagementApi~getDeviceTypesInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypesInfoEnvelope
     */
    this.getDeviceTypesInfo = function(dtid, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getDeviceTypesInfo";
      }


      var pathParams = {
        'dtid': dtid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceTypesInfoEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devicetypes/{dtid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManifestProperties operation.
     * @callback module:api/DevicesManagementApi~getManifestPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/MetadataPropertiesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a device type&#39;s device management manifest properties
     * Get a device type&#39;s device management manifest properties
     * @param String dtid Device Type ID.
     * @param {module:api/DevicesManagementApi~getManifestPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MetadataPropertiesEnvelope
     */
    this.getManifestProperties = function(dtid, callback) {
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getManifestProperties";
      }


      var pathParams = {
        'dtid': dtid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MetadataPropertiesEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devicetypes/{dtid}/manifest/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProperties operation.
     * @callback module:api/DevicesManagementApi~getPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/MetadataEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read a device&#39;s properties.
     * Read a device&#39;s properties.
     * @param String did Device ID.
     * @param {Object} opts Optional parameters
     * @param Boolean opts.includeTimestamp Include timestamp.
     * @param {module:api/DevicesManagementApi~getPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MetadataEnvelope
     */
    this.getProperties = function(did, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling getProperties";
      }


      var pathParams = {
        'did': did
      };
      var queryParams = {
        'includeTimestamp': opts['includeTimestamp']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MetadataEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devices/{did}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatuses operation.
     * @callback module:api/DevicesManagementApi~getStatusesCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskStatusesEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the details and status of a task id and the individual statuses of each device id in the list.
     * Returns the details and status of a task id and the individual statuses of each device id in the list.
     * @param String tid Task ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Max results count.
     * @param Number opts.offset Result starting offset.
     * @param String opts.status Status filter. Comma-separated statuses.
     * @param String opts.dids Devices filter. Comma-separated device IDs.
     * @param {module:api/DevicesManagementApi~getStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskStatusesEnvelope
     */
    this.getStatuses = function(tid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tid' is set
      if (tid == undefined || tid == null) {
        throw "Missing the required parameter 'tid' when calling getStatuses";
      }


      var pathParams = {
        'tid': tid
      };
      var queryParams = {
        'count': opts['count'],
        'offset': opts['offset'],
        'status': opts['status'],
        'dids': opts['dids']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskStatusesEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/tasks/{tid}/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatusesHistory operation.
     * @callback module:api/DevicesManagementApi~getStatusesHistoryCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskStatusesHistoryEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the history of the status changes for a specific task id, or for a specific device id in that task.
     * Returns the history of the status changes for a specific task id, or for a specific device id in that task.
     * @param String tid Task ID.
     * @param {Object} opts Optional parameters
     * @param String opts.did Device ID. Optional.
     * @param {module:api/DevicesManagementApi~getStatusesHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskStatusesHistoryEnvelope
     */
    this.getStatusesHistory = function(tid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tid' is set
      if (tid == undefined || tid == null) {
        throw "Missing the required parameter 'tid' when calling getStatusesHistory";
      }


      var pathParams = {
        'tid': tid
      };
      var queryParams = {
        'did': opts['did']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskStatusesHistoryEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/tasks/{tid}/statuses/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskByID operation.
     * @callback module:api/DevicesManagementApi~getTaskByIDCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the details and global status of a specific task id.
     * Returns the details and global status of a specific task id.
     * @param String tid Task ID.
     * @param {module:api/DevicesManagementApi~getTaskByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskEnvelope
     */
    this.getTaskByID = function(tid, callback) {
      var postBody = null;

      // verify the required parameter 'tid' is set
      if (tid == undefined || tid == null) {
        throw "Missing the required parameter 'tid' when calling getTaskByID";
      }


      var pathParams = {
        'tid': tid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/tasks/{tid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTasks operation.
     * @callback module:api/DevicesManagementApi~getTasksCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskListEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the all the tasks for a device type.
     * Returns the all the tasks for a device type.
     * @param String dtid Device Type ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Max results count.
     * @param Number opts.offset Result starting offset.
     * @param String opts.status Status filter. Comma-separated statuses.
     * @param String opts.order Sort results by a field. Valid fields: createdOn.
     * @param String opts.sort Sort order. Valid values: asc or desc.
     * @param {module:api/DevicesManagementApi~getTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskListEnvelope
     */
    this.getTasks = function(dtid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling getTasks";
      }


      var pathParams = {
      };
      var queryParams = {
        'dtid': dtid,
        'count': opts['count'],
        'offset': opts['offset'],
        'status': opts['status'],
        'order': opts['order'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskListEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queryProperties operation.
     * @callback module:api/DevicesManagementApi~queryPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/MetadataQueryEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query device properties across devices.
     * Query device properties across devices.
     * @param String dtid Device Type ID.
     * @param {Object} opts Optional parameters
     * @param Number opts.count Max results count.
     * @param Number opts.offset Result starting offset.
     * @param String opts.filter Query filter. Comma-separated key&#x3D;value pairs
     * @param Boolean opts.includeTimestamp Include timestamp.
     * @param {module:api/DevicesManagementApi~queryPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MetadataQueryEnvelope
     */
    this.queryProperties = function(dtid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling queryProperties";
      }


      var pathParams = {
      };
      var queryParams = {
        'dtid': dtid,
        'count': opts['count'],
        'offset': opts['offset'],
        'filter': opts['filter'],
        'includeTimestamp': opts['includeTimestamp']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MetadataQueryEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devices/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeviceTypesInfo operation.
     * @callback module:api/DevicesManagementApi~updateDeviceTypesInfoCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTypesInfoEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a device type information
     * Updates a device type information
     * @param String dtid Device type ID.
     * @param module:model/DeviceTypesInfo deviceTypeInfo Device type info object to be set
     * @param {module:api/DevicesManagementApi~updateDeviceTypesInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTypesInfoEnvelope
     */
    this.updateDeviceTypesInfo = function(dtid, deviceTypeInfo, callback) {
      var postBody = deviceTypeInfo;

      // verify the required parameter 'dtid' is set
      if (dtid == undefined || dtid == null) {
        throw "Missing the required parameter 'dtid' when calling updateDeviceTypesInfo";
      }

      // verify the required parameter 'deviceTypeInfo' is set
      if (deviceTypeInfo == undefined || deviceTypeInfo == null) {
        throw "Missing the required parameter 'deviceTypeInfo' when calling updateDeviceTypesInfo";
      }


      var pathParams = {
        'dtid': dtid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceTypesInfoEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devicetypes/{dtid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServerProperties operation.
     * @callback module:api/DevicesManagementApi~updateServerPropertiesCallback
     * @param {String} error Error message, if any.
     * @param module:model/MetadataEnvelope data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a device&#39;s server properties.
     * Updates a device&#39;s server properties.
     * @param String did Device ID.
     * @param Object deviceProperties Device properties object to be set
     * @param {module:api/DevicesManagementApi~updateServerPropertiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/MetadataEnvelope
     */
    this.updateServerProperties = function(did, deviceProperties, callback) {
      var postBody = deviceProperties;

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling updateServerProperties";
      }

      // verify the required parameter 'deviceProperties' is set
      if (deviceProperties == undefined || deviceProperties == null) {
        throw "Missing the required parameter 'deviceProperties' when calling updateServerProperties";
      }


      var pathParams = {
        'did': did
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MetadataEnvelope;

      return this.apiClient.callApi(
        '/devicemgmt/devices/{did}/serverproperties', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTask operation.
     * @callback module:api/DevicesManagementApi~updateTaskCallback
     * @param {String} error Error message, if any.
     * @param module:model/TaskUpdateResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a task for all devices - For now just allows changing the state to cancelled.
     * Updates a task for all devices - For now just allows changing the state to cancelled.
     * @param String tid Task ID.
     * @param module:model/TaskUpdateRequest taskUpdateRequest Task update request
     * @param {module:api/DevicesManagementApi~updateTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/TaskUpdateResponse
     */
    this.updateTask = function(tid, taskUpdateRequest, callback) {
      var postBody = taskUpdateRequest;

      // verify the required parameter 'tid' is set
      if (tid == undefined || tid == null) {
        throw "Missing the required parameter 'tid' when calling updateTask";
      }

      // verify the required parameter 'taskUpdateRequest' is set
      if (taskUpdateRequest == undefined || taskUpdateRequest == null) {
        throw "Missing the required parameter 'taskUpdateRequest' when calling updateTask";
      }


      var pathParams = {
        'tid': tid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TaskUpdateResponse;

      return this.apiClient.callApi(
        '/devicemgmt/tasks/{tid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaskForDevice operation.
     * @callback module:api/DevicesManagementApi~updateTaskForDeviceCallback
     * @param {String} error Error message, if any.
     * @param module:model/DeviceTaskUpdateResponse data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a task for a specific device - For now just allows changing the state to cancelled.
     * Updates a task for a specific device - For now just allows changing the state to cancelled.
     * @param String tid Task ID.
     * @param String did Device ID.
     * @param module:model/DeviceTaskUpdateRequest deviceTaskUpdateRequest Device task update request
     * @param {module:api/DevicesManagementApi~updateTaskForDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: module:model/DeviceTaskUpdateResponse
     */
    this.updateTaskForDevice = function(tid, did, deviceTaskUpdateRequest, callback) {
      var postBody = deviceTaskUpdateRequest;

      // verify the required parameter 'tid' is set
      if (tid == undefined || tid == null) {
        throw "Missing the required parameter 'tid' when calling updateTaskForDevice";
      }

      // verify the required parameter 'did' is set
      if (did == undefined || did == null) {
        throw "Missing the required parameter 'did' when calling updateTaskForDevice";
      }

      // verify the required parameter 'deviceTaskUpdateRequest' is set
      if (deviceTaskUpdateRequest == undefined || deviceTaskUpdateRequest == null) {
        throw "Missing the required parameter 'deviceTaskUpdateRequest' when calling updateTaskForDevice";
      }


      var pathParams = {
        'tid': tid,
        'did': did
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['artikcloud_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceTaskUpdateResponse;

      return this.apiClient.callApi(
        '/devicemgmt/tasks/{tid}/devices/{did}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
