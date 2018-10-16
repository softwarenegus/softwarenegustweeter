(function (root, factory) {
    var dependencies = ['./canon/canonService'];
    if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require(dependencies[0]));
    } else {
        root.returnExports = factory(root.canonService);
    }
}(typeof self !== 'undefined' ? self : this, function (canonService, _) {

// i.e. define(['canonService'], function (canonService) {

        'use strict';

        var translator = {

            toSupremeTerms: function(text) {
                var alphanumerics = text.replace(/\W/g, '').toUpperCase().split('');
                var terms = alphanumerics.map(function(alphanumeric) {
                    return canonService.findTermByAlphanumeric(alphanumeric);
                });
                return terms.join(' ');
            },

            toSupremeNumbers: function(text) {
                var alphanumerics = text.replace(/\W/g, '').toUpperCase().split('');
                var numerics = alphanumerics.map(function(alphanumeric) {
                    return canonService.findNumericByAlphanumeric(alphanumeric);
                });
                return numerics.join(' ');
            },

            doTheMathsOfText: function(text) {
                var self = this;
                var numbers = this.toSupremeNumbers(text).split(' ').map(Number);
                var math = numbers.map(function(number) {
                    return self.doTheMathOfNumber(number);
                });
                return math.join(', ');
            },

            doTheMathOfNumber: function(number) {
                if(!Number.isInteger(number)) {
                    // convert to integer by removing the decimal
                    number = parseInt(number.toString().replace('.', ''));
                }

                var math = [];
                if(number <= 9) {
                    math.push(canonService.findTermByNumeric(number));
                }
                else {

                    // break them into individual digits
                    var digits = number.toString().split('').map(Number);

                    // push the terms for each digit
                    math.push(digits.map(function(digit) {
                        return canonService.findTermByNumeric(digit);
                    }).join(' '));

                    // push 'all being born to'
                    math.push('all being born to');

                    // sum them
                    var sum = digits.reduce(function(a, b) {
                        return parseInt(a) + parseInt(b);
                    });

                    // recurse on the sum
                    math.push(this.doTheMathOfNumber(sum));
                }

                return math.join(' ');
            },

            toTodaysMath: function() {
                return this.doTheMathOfNumber(new Date().getDate());
            },

            toTodaysMathAddon: function() {
                var date = new Date();
		var month = ("0" + (date.getMonth() + 1)).slice(-2);
		var day = ("0" + date.getDate()).slice(-2);
		var longdate = date.getFullYear() + '' + month + '' + day; 
		return this.doTheMathOfNumber(longdate);
            },

            toTodaysBuild: function() {
                var math = this.doTheMathOfNumber(new Date().getDate());
                var terms = this.extractArrayOfTermsFromText(math);
                var meanings = terms.map(function(term) {
                    return canonService.findMeaningByTerm(term);
                });
                return meanings.join('; ');
            },

            buildOnNumber: function(number) {
                var build = '';
                if(Number.isInteger(number)) {
                    var math = this.doTheMathOfNumber(number);
                    var terms = this.extractArrayOfTermsFromText(math);
                    var meanings = terms.map(function(term) {
                        return canonService.findMeaningByTerm(term);
                    });
                    build = meanings.join('; ');
                }
                else {
                    build = '';
                }
                return build;
            },

            extractArrayOfTermsFromText: function(text) {
                var termsInMath = [];
                var allPossibleTerms = canonService.findAllNumericTerms();
                var termsInMath = allPossibleTerms.map(function(term) {
                    return text.includes(term) ? term : '';
                });
                return termsInMath.filter(function(term) { return term !== ''; });
            },
        };

        return translator;
}));

