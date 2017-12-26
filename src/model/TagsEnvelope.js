(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TagArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.TagsEnvelope = factory(root.ArtikCloud.ApiClient, root.ArtikCloud.TagArray);
  }
}(this, function(ApiClient, TagArray) {
  'use strict';

  /**
   * The TagsEnvelope model module.
   * @module model/TagsEnvelope
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>TagsEnvelope</code>.
   * Tags Envelope.
   * @alias module:model/TagsEnvelope
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TagsEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagsEnvelope} obj Optional instance to populate.
   * @return {module:model/TagsEnvelope} The populated <code>TagsEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = TagArray.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member module:model/TagArray data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
