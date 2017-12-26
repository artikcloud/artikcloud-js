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
    root.ArtikCloud.Tag = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Tag model module.
   * @module model/Tag
   * @version 2.2.2
   */

  /**
   * Constructs a new <code>Tag</code>.
   * Tag information.
   * @alias module:model/Tag
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isCategory')) {
        obj['isCategory'] = ApiClient.convertToType(data['isCategory'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * Tag Name.
   * @member String name
   */
  exports.prototype['name'] = undefined;

  /**
   * Is Category.
   * @member Boolean isCategory
   */
  exports.prototype['isCategory'] = undefined;




  return exports;
}));
