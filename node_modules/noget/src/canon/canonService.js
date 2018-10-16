(function (root, factory) {
    var dependencies = ['./ngeCanon'];
    if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require(dependencies[0]));
    } else {
        root.returnExports = factory(root.canon);
    }
}(typeof self !== 'undefined' ? self : this, function (canon) {

// i.e. define(['node_modules/lodash/lodash.min', 'ngeCanon'], function (_, canon) {

        'use strict';

        var canonService = {

            findAllCanonItems: function () {
                return canon;
            },

            findAllAlphanumerics: function () {
                return canon.map(function(canonItem) {
                    return canonItem.alphanumeric;
                });
            },

            findAllTerms: function () {
                return canon.map(function(canonItem) {
                    return canonItem.term;
                });
            },

            findAllNumericTerms: function () {
                var terms = canon.map(function(canonItem) {
                    return canonItem.term;
                })
                return terms.slice(0, 9);
            },

            findAllAlphaTerms: function () {
                return canon.map(function(canonItem) {
                    return canonItem.term;
                }).slice(10, 35);
            },

            findAllMeanings: function () {
                return canon.map(function(canonItem) {
                    return canonItem.meaning;
                });
            },

            findCanonItemByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                });
            },

            findTermByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).term;
            },

            findTermByNumeric: function (numeric) {
                return canon.find(function(item) {
                    return item.numeric == numeric;
                }).term;
            },

            findMeaningByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).meaning;
            },

            findNumericByAlphanumeric: function (alphanumeric) {
                return canon.find(function(item) {
                    return item.alphanumeric.toUpperCase() == alphanumeric.toUpperCase();
                }).numeric;
            },

            findCanonItemByTerm: function (term) {
                return canon.find(function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                });
            },

            findAlphanumericByTerm: function (term) {
                return canon.find(function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                }).alphanumeric;
            },

            findMeaningByTerm: function (term) {
                return canon.find(function(item) {
                    return item.term.toUpperCase() == term.toUpperCase();
                }).meaning;
            }

        };

        return canonService;

    }
));

