/**
 * Backbone Dirty Model and Collection Sync
 * Version 1.0.0
 *
 * https://github.com/ChiefORZ/backbone.dirty-sync
 */
(function(root, factory) {
    if (typeof exports === 'object' && typeof require === 'function') {
        module.exports = factory(require("backbone"), require('underscore'));
    } else if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(['backbone', 'underscore'], factory);
    } else {
        factory(root.Backbone, root._);
    }
}(this, function(Backbone, _) {

    'use strict';

    var Original_BackboneSync = Backbone.sync;

    Backbone.sync = function(method, model, options) {

        _.defaults(options || (options = {}));
        // just handle the data picking logic for update method
        if (options.data == null && model && method == 'update') {

            options.contentType = 'application/json';

            var changedModels;
            // if it is a collection, get all changed attributes for the models.
            if (model.models) {
                changedModels = [];
                _.each(model.models, function(model) {
                    if (model.changedAttributes()) {
                        var extend = {};
                        extend[model.idAttribute] = model.get(model.idAttribute);
                        changedModels.push(_.extend({}, extend, model.changedAttributes()));
                    }
                });
            } else {
                changedModels = model.changedAttributes();
            }
            options.data = JSON.stringify(changedModels || {});
        }
        // invoke the original backbone sync method
        return Original_BackboneSync.apply(this, [method, model, options]);
    };

    return Backbone.sync;
}));
