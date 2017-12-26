(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Action'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Action'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ActionArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Action);
  }
}(this, function(ApiClient, Action) {
  'use strict';

  /**
   * The ActionArray model module.
   * @module model/ActionArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ActionArray</code>.
   * Holds an array of Actions
   * @alias module:model/ActionArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ActionArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionArray} obj Optional instance to populate.
   * @return {module:model/ActionArray} The populated <code>ActionArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [Action]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/Action> actions
   */
  exports.prototype['actions'] = undefined;




  return exports;
}));
