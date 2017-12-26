(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActionDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.ActionDetailsArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.ActionDetails);
  }
}(this, function(ApiClient, ActionDetails) {
  'use strict';

  /**
   * The ActionDetailsArray model module.
   * @module model/ActionDetailsArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ActionDetailsArray</code>.
   * Contains the array of Action Details
   * @alias module:model/ActionDetailsArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ActionDetailsArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionDetailsArray} obj Optional instance to populate.
   * @return {module:model/ActionDetailsArray} The populated <code>ActionDetailsArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [ActionDetails]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/ActionDetails> actions
   */
  exports.prototype['actions'] = undefined;




  return exports;
}));
