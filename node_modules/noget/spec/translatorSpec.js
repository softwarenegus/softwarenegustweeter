/*
lower level translator functions suitable for this type of "translation" domain
these apply to any injected Canon, and is the interface of any Translator

0) spell(text): translate each alphanumeric in a given text
turn each alphanumeric into a term
return them as a space-delimited block/line of terms

0) despell(text): translate each term in a given text
turn each term into an alphanumeric (remove each encountered non-term from the text)
return them as a 1..n space-delimited block/line of terms

0) define(text): translate each alphanumeric in a given text
turn each alphanumeric into a meaning
return them as a newline-delimited block of meanings
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    describe("translator spec suite", function() {

        beforeEach(function() {
            this.translator = require('../src/translator');
        });

        afterAll(function() {
            this.translator = null;
        });

//            toSupremeTermsFromLettersInGivenText: function(text) {
//            toSupremeNumbersFromLettersInGivenText: function(text) {
//            doTheMathsOfSupremeNumbersOfLettersInGivenText: function(text) {
//            doTheMathOfGivenNumber: function(number) {
//            toTodaysMath: function(date) {


        it('toSupremeTermsFromLettersInGivenText', function() {
            expect(this.translator.toSupremeTerms('gold'))
            .toBe('God Cipher Love, Hell or Right Divine');
        });

        it('toSupremeNumbersFromLettersInGivenText', function() {
            expect(this.translator.toSupremeNumbers('gold'))
            .toBe('7 15 12 4');
        });

        it('doTheMathsOfSupremeNumbersOfLettersInGivenText', function() {
            expect(this.translator.doTheMathsOfText('gold'))
            .toBe('God, Knowledge Power and Refinement all being born to Equality, Knowledge Wisdom all being born to Understanding, Culture and Freedom');
        });

        it('doTheMathOfGivenNumber', function() {
            expect(this.translator.doTheMathOfNumber('9.7500'))
            .toBe('Born God Power and Refinement Cipher Cipher all being born to Wisdom Knowledge all being born to Understanding');
        });
        
/*
	it('toTodaysMathAddon - return the math for long form date i.e. yyyymmdd instead of just d', function() {
            expect(this.translator.toTodaysMathAddon())
            .toBe('Wisdom Cipher Knowledge Build or Destroy Cipher Power and Refinement Understanding Knowledge all being born to Wisdom Cipher all being born to Wisdom');
        });
        it('toTodaysMath', function() {
            expect(this.translator.toTodaysMath())
            .toBe('Understanding Knowledge all being born to Culture and Freedom');
        });
        it('toTodaysBuild - produce meanings for each term', function() {
            var meaning = 'Power: Power is the truth, truth in origin only means God add God; Doing the knowledge adding on the culture, to show that power, for to go according to the truth is to make ones-self known again. Truth is the power to resurrect the mentally dead from their present state of unawareness and ignorance of self.';
            expect(this.translator.toTodaysBuild())
            .toBe(meaning);
        });
*/
        it('buildOnNumber - todays build on a specific number', function() {
            var build = 'Knowledge is to know, listen and observe. Knowledge is a body of accumulated facts. Knowledge is the foundation for all things, as the Sun is the foundation for our solar system and man is the foundation for his family.; '
            + 'Wisdom is the manifestation of ones knowledge, the ways and actions one uses to make his or her knowledge to know the truth, such as speaking wisely to the wise, to the dumb or to possess a wise Mind. Wisdom is the woman.; '
            + 'Understanding is the mental picture one draws of knowledge wisdom. To see things much clearer for what they are, (not for what they present themselves to be) visible through the all Seeing Eye, which is the Mind. Understanding is the child.';

            expect(this.translator.buildOnNumber(12))
            .toBe(build);
        });

        it('extractArrayOfTermsFromText', function() {
            expect(this.translator.extractArrayOfTermsFromText('God Born all being born to Knowledge Equality all being born to God'))
            .toEqual(jasmine.arrayContaining(['God', 'Born', 'Knowledge', 'Equality']));
        });

    });
}));
