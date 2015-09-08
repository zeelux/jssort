; (function () {
    'use strict';

    (function (factory) {
        // Support three module loading scenarios
        if (typeof define === 'function' && define['amd']) {
            // [1] AMD anonymous module
            define(['exports', 'underscore'], factory);
        } else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
            // [2] CommonJS/Node.js
            factory(module['exports'] || exports);  // module.exports is for Node.js
        } else {
            // [3] No module loader (plain <script> tag) - put directly in global namespace
            // underscore/lodash must be global as well.
            factory(window['jsSort'] = {}, _);
        }
    })(function (exports, _) {
        'use strict';
        
        var SORT_DESCENDING = "[DESC]",
            SORT_ASCENDING = "[ASC]";

        function sortByMultiple(sequence, keys) {
            var copy = _.clone(sequence);
            copy.sort(sortFunc.bind(null, keys));
            return copy;
        }
        
        function sortFunc(keys, x, y) {
            var comparison = 0,
                currentKey,
                sortDesc;
                
            for (var i = 0; i < keys.length; ++i) {
                currentKey = keys[i];
                sortDesc = shouldSortDescending(currentKey);
                currentKey = stripSortOrderFromKey(currentKey);
                
                comparison = compareBy(x, y, currentKey, sortDesc);
                if (comparison !== 0) {
                    return comparison;
                }
            }
            return comparison;
        }
        
        function shouldSortDescending(key) {
            var upperKey = key.toLocaleUpperCase();
            
            if (upperKey.indexOf(SORT_DESCENDING) === 0) {
                return true;
            } else if (upperKey.indexOf(SORT_ASCENDING) === 0) {
                return false;
            }
            
            return false;
        }
        
        function stripSortOrderFromKey(key) {
            key = key.replace(SORT_ASCENDING, '');
            key = key.replace(SORT_DESCENDING, '');
            
            return key;
        }

        function compareBy(x, y, key, sortDesc) {
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
            
            if (sortDesc === false) {
                return xKey > yKey ? 1 : -1;
            } 
            
            return xKey > yKey ? -1 : 1;
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