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
    root.ArtikCloud.ActionDetails = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ActionDetails model module.
   * @module model/ActionDetails
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>ActionDetails</code>.
   * Action details.
   * @alias module:model/ActionDetails
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ActionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionDetails} obj Optional instance to populate.
   * @return {module:model/ActionDetails} The populated <code>ActionDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': Object});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * Parameters.
   * @member Object.<String, Object> parameters
   */
  exports.prototype['parameters'] = undefined;

  /**
   * Name.
   * @member String name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));
