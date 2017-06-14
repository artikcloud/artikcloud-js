(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.FieldsActions = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FieldsActions model module.
   * @module model/FieldsActions
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>FieldsActions</code>.
   * Fields and Actions
   * @alias module:model/FieldsActions
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>FieldsActions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldsActions} obj Optional instance to populate.
   * @return {module:model/FieldsActions} The populated <code>FieldsActions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], {'String': Object});
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * Message Fields
   * @member Object.<String, Object> fields
   */
  exports.prototype['fields'] = undefined;

  /**
   * Actions
   * @member Object.<String, Object> actions
   */
  exports.prototype['actions'] = undefined;




  return exports;
}));
