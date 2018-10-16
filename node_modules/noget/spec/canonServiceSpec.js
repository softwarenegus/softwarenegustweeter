(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {



    describe("canon service spec suite", function() {

    /*
        References:
        http://www.ancientorderoffreeasiatics.com/MathNGE.html
        http://www.ancientorderoffreeasiatics.com/Mathematics.html
        http://thesource.com/tag/todays-mathematics/
        http://thesource.com/2017/11/02/exclusive-never-heard-interview-mobb-deeps-prodigy-builds-todays-mathematics/
        Sha Be Allah - @IamShaBeAllah
        http://www.abovetopsecret.com/forum/thread565324/pg1
        https://www.youtube.com/watch?v=p6ziEaVeWUs - Knowledge God
    */

        beforeEach(function() {
            this.canonService = require('../src/canon/canonService');
        });

        afterAll(function() {
            this.canonService = null;
        });

        it("canon service translates alphanumerics to terms", function() {
            expect(this.canonService.findTermByAlphanumeric('1')).toBe('Knowledge');
            expect(this.canonService.findTermByAlphanumeric('0')).toBe('Cipher');

            expect(this.canonService.findTermByAlphanumeric('a')).toBe('Allah');
            expect(this.canonService.findTermByAlphanumeric('z')).toBe('Zig-Zag-Zig');

        });

        it("canon service translates alphanumerics to numerics", function() {
            expect(this.canonService.findNumericByAlphanumeric('1')).toBe(1);
            expect(this.canonService.findNumericByAlphanumeric('0')).toBe(0);

            expect(this.canonService.findNumericByAlphanumeric('a')).toBe(1);
            expect(this.canonService.findNumericByAlphanumeric('z')).toBe(26);
        });

        it("canon service translates numerics to terms", function() {
            expect(this.canonService.findTermByNumeric(1)).toBe('Knowledge');
            expect(this.canonService.findTermByNumeric(0)).toBe('Cipher');
        });

        it("canon service finds canon items from terms", function() {

            var U = {
                alphanumeric: 'U',
                numeric: 21,
                term: 'You, Universe, and U-N-I-Verse',
                meaning: 'Universe - The universe is the home of galaxies, which is home to our solar system. The universe owns and belongs to all Asiatic men and women. U - (You) and I verse. You is pertaining to the woman when dealing in completing the home (Child). You also means self, King, Savior, Queen, her, woman.'
            };

            expect(this.canonService.findCanonItemByTerm('You, Universe, and U-N-I-Verse')).toEqual(U);

        });

        it("canon service finds meanings from terms", function() {

            var U = {
                alphanumeric: 'U',
                numeric: 21,
                term: 'You, Universe, and U-N-I-Verse',
                meaning: 'Universe - The universe is the home of galaxies, which is home to our solar system. The universe owns and belongs to all Asiatic men and women. U - (You) and I verse. You is pertaining to the woman when dealing in completing the home (Child). You also means self, King, Savior, Queen, her, woman.'
            };

            expect(this.canonService.findMeaningByTerm('You, Universe, and U-N-I-Verse')).toEqual(U.meaning);

        });

    });

}));
