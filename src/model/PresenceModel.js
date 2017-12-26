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
    root.ArtikCloud.PresenceModel = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PresenceModel model module.
   * @module model/PresenceModel
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>PresenceModel</code>.
   * 
   * @alias module:model/PresenceModel
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PresenceModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PresenceModel} obj Optional instance to populate.
   * @return {module:model/PresenceModel} The populated <code>PresenceModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('connected')) {
        obj['connected'] = ApiClient.convertToType(data['connected'], 'Boolean');
      }
      if (data.hasOwnProperty('lastSeenOn')) {
        obj['lastSeenOn'] = ApiClient.convertToType(data['lastSeenOn'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member Boolean connected
   */
  exports.prototype['connected'] = undefined;

  /**
   * @member Number lastSeenOn
   */
  exports.prototype['lastSeenOn'] = undefined;




  return exports;
}));
