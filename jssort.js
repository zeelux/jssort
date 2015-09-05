; (function () {
    'use strict';

    (function (factory) {
        // Support three module loading scenarios
        if (typeof define === 'function' && define['amd']) {
            // [1] AMD anonymous module
            define(['exports', 'underscore', 'knockout'], factory);
        } else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
            // [2] CommonJS/Node.js
            factory(module['exports'] || exports);  // module.exports is for Node.js
        } else {
            // [3] No module loader (plain <script> tag) - put directly in global namespace
            factory(window['jsSort'] = {}, _, ko);
        }
    })(function (exports, _, ko) {
        'use strict';

        function sortByMultiple(sequence, keys) {
            var copy = _.clone(sequence);
            copy.sort(function (x, y) {
                var comparison = 0;
                for (var i = 0; i < keys.length; ++i) {
                    comparison = compareBy(x, y, keys[i]);
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return comparison;
            });
            return copy;
        }

        function compareBy(x, y, key) {
            var xKey = getKeyValue(x, key),
                yKey = getKeyValue(y, key);

            if (_.isDate(xKey)) {
                xKey = xKey.valueOf();
            }

            if (_.isDate(yKey)) {
                yKey = yKey.valueOf();
            }

            if (xKey === yKey) {
                return 0;
            }
            return xKey > yKey ? 1 : -1;
        }

        function getKeyValue(item, key) {
            var keyParts = key.split('.'),
                value, part;

            part = keyParts.shift();
            value = unwrap(item[part]);

            while (part = keyParts.shift()) {
                value = unwrap(value[part]);
            }

            return value;
        }
        
        function unwrap(val) {
            if (_.isFunction(val)) {
                return val();
            }
            return val;
        }
	
        // export sort function
        exports.sortByMultiple = sortByMultiple;

    });
})();