(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TagArray = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * The TagArray model module.
   * @module model/TagArray
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TagArray</code>.
   * Contains the arry of Tags.
   * @alias module:model/TagArray
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TagArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagArray} obj Optional instance to populate.
   * @return {module:model/TagArray} The populated <code>TagArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
      }
    }
    return obj;
  }


  /**
   * @member Array.<module:model/Tag> tags
   */
  exports.prototype['tags'] = undefined;




  return exports;
}));
