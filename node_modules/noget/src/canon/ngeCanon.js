/*

    var canonItem = {
        alphanumeric: 'a',  // single char
        term: 'term',       // term or phrase
        meaning: 'meaning'  // long definition
    }

    var canonItems = [1..n canonItem]
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

    var canonItems = [
        {
            alphanumeric: '1',
            numeric: 1,
            term: 'Knowledge',
            meaning: 'Knowledge is to know, listen and observe. Knowledge is a body of accumulated facts. Knowledge is the foundation for all things, as the Sun is the foundation for our solar system and man is the foundation for his family.'
        },
        {
            alphanumeric: '2',
            numeric: 2,
            term: 'Wisdom',
            meaning: 'Wisdom is the manifestation of ones knowledge, the ways and actions one uses to make his or her knowledge to know the truth, such as speaking wisely to the wise, to the dumb or to possess a wise Mind. Wisdom is the woman.'
        },
        {
            alphanumeric: '3',
            numeric: 3,
            term: 'Understanding',
            meaning: 'Understanding is the mental picture one draws of knowledge wisdom. To see things much clearer for what they are, (not for what they present themselves to be) visible through the all Seeing Eye, which is the Mind. Understanding is the child.'
        },
        {
            alphanumeric: '4',
            numeric: 4,
            term: 'Culture Freedom',
            meaning: 'Culture or Freedom: Culture is ones way of life; I self lord asiatic master is the culture of freedom and righteousness, the culture of peace, in which all things coincide and lives in harmony.'
        },
        {
            alphanumeric: '5',
            numeric: 5,
            term: 'Power Refinement',
            meaning: 'Power: Power is the truth, truth in origin only means God add God; Doing the knowledge adding on the culture, to show that power, for to go according to the truth is to make ones-self known again. Truth is the power to resurrect the mentally dead from their present state of unawareness and ignorance of self.'
        },
        {
            alphanumeric: '6',
            numeric: 6,
            term: 'Equality',
            meaning: 'Equality means to be equal in all aspects of one’s true self.'
        },
        {
            alphanumeric: '7',
            numeric: 7,
            term: 'God',
//            term: 'God and Perfection',
            meaning: 'God is the original Asiatic Blackman, the Blackman is God, a wiseman\'s equality born to build or destroy infinity. I, is self, self is the true reality, Son of Man; God Allah.'
        },
        {
            alphanumeric: '8',
            numeric: 8,
            term: 'Build Destroy',
            meaning: 'Build or Destroy: Build means to add on to life a positive creation or education; destroy means to know of, take, that which is untrue, and add light to the knowledge.'
        },
        {
            alphanumeric: '9',
            numeric: 9,
            term: 'Born',
            meaning: 'Born is to bring into existence a mental birth of self.'
        },
        {
            alphanumeric: '0',
            numeric: 0,
            term: 'Cipher',
//            term: 'Cipher, Cypher (Cycle or Circle)',
            meaning: 'Cipher is the completion of a circle or 360 degrees of Knowledge, Wisdom and Understanding.'
        },
        {
            alphanumeric: 'A',
            numeric: 1,
            term: 'Allah',
            meaning: 'Allah is the Supreme Being, the Asiatic Man from Asia the planet earth, God of the Universe, Lord of All the Worlds from the highest to the lowest, the original man, the giver and taker of life. The foundation of all life, the Father of reality and knowledge of the Sun, the following diagram shows the complete realm or cipher of the Asiatic Man’s body that keeps everything pure, true and living. The blanket of protection is 5 times 72 this equals 360 degrees. The power of God’s wisdom shows forth the understanding of his equality that is added onto his cipher. A - Arm = 72 degrees, L - Leg = 72 degrees, L - Leg = 72 degrees, A - Arm = 72 degrees and the supreme H - Head = 72 degrees.'
        },
        {
            alphanumeric: 'B',
            numeric: 2,
            term: 'Be or Born',
            meaning: 'Be or Born is the realm or state of being born into existence, be gives birth to God. Born is to be aware of everything because everything is from the sun, moon and stars or man, woman and child or the past, present and future. Born is to be complete and to give birth to the culture (I-God). Knowing that everything is real, one must born his or her knowledge to show born equality, to knowledge power, or equality as being real.'
        },

        {
            alphanumeric: 'C',
            numeric: 3,
            term: 'Cee or See',
            meaning: 'See is to knowledge wisdom being born and gain a clear picture, which will be the understanding. To see is to be equipped with sight both insight and eyesight, C is the cream.'
        },
        {
            alphanumeric: 'D',
            numeric: 4,
            term: 'Divine',
            meaning: 'Divine is knowledge and wisdom being understood, showing its completion and manifesting a perfect state of existence equating the culture which is God the Divine being, Divine being that which is sacred.'
        },
        {
            alphanumeric: 'E',
            numeric: 5,
            term: 'Equality',
            meaning: 'Equality is to be equal with all society and nations of the earth, showing and proving with the power of equality that we are the fathers of civilization, also, to equal all nations with the science of education. Equality is the woman.'
        },
        {
            alphanumeric: 'F',
            numeric: 6,
            term: 'Father',
            meaning: 'Father Allah is the father of the 5% nation also the father of civilization and the God of the Universe. Fat-Her or the equality of man with woman in that father will manifest into power build, Peace!'
        },
        {
            alphanumeric: 'G',
            numeric: 7,
            term: 'God',
            meaning: 'God is being himself at all times, by knowing his equality as God, dealing equal with the knowledge known only to Allah, Supreme Being,  Asiatic Mind, for man is God and this is Self who is Allah.'
        },
        {
            alphanumeric: 'H',
            numeric: 8,
            term: 'He or Her',
            meaning: 'He or Her is the man or woman who has knowledge of self and is building a strong foundation. He who is God, she who is the Earth, the woman planet to bring about the Gods and Earths and teach them at birth, He or Her without the knowledge of self cannot build but only destroy and or take many other lives.'
        },
        {
            alphanumeric: 'I',
            numeric: 9,
            term: 'I or Islam',
            meaning: 'Islam is self and self is God. Woman is earth an also life when advocated for the same cause, to be reborn into the knowledge of self. I is self, self is the true reality son of man God.'
        },
        {
            alphanumeric: 'J',
            numeric: 10,
            term: 'Justice',
            meaning: 'Justice is the star, meaning your reward, regardless of whether it is one of happiness or sorrow. These are rewards and or penalties, also knowledge added on to the cipher, (REWARD), Just I C Equality with which I have been blessed, (PENALTY), Just Ice to be frozen at 32 degrees.'
        },
        {
            alphanumeric: 'K',
            numeric: 11,
            term: 'King or Kingdom',
            meaning: 'King, God is the King of kings meaning that God is the only true King there is, Ruler of a kingdom is the equivalent of God for this is Self or the Father He. The King Rules because he is Wise and just, one who knows the ledge of his knowledge for his term is life. In the beginning was the term and the term is life.'
        },
        {
            alphanumeric: 'L',
            numeric: 12,
            term: 'Love, Hell or Right',
            meaning: 'Love Hell or Right (Lord), love is the emotion that God blessed the woman with, many man and woman possess this emotion and to those who have failed to cope with it have proven love to be a handicap, love to those who have gotten over this burden realize that love is understanding and not two separate qualities. Understanding brings on love or hate love brings on understanding. Hatred can be caused by what you understand or don’t understand. Those who have realized the truth of love have proven that he is a Lord. Lord is the equivalent of God, King, He, Father and thereby abides in paradise (Heaven).  Hell is the home of the ignorant, those who lack knowledge of self. God shows his love by manifesting the knowledge of himself through his wisdom, which reveals the hell one must go through in order to be right. Knowledge the wisdom to bring about an understanding for love brings forth love.'
        },
        {
            alphanumeric: 'M',
            numeric: 13,
            term: 'Master',
            meaning: 'Master is one who possesses 360 degrees of knowledge, wisdom and understanding. The equivalent of Lord, He, King, Father, God that is I, Also, one who knows the ledge of his understanding enabling him to manifest the culture which is I-God, to knowledge understanding.'
        },
        {
            alphanumeric: 'N',
            numeric: 14,
            term: 'In or Now Nation',
            meaning: 'Now, Nation End - Now is the time to get knowledge of self or end in a pit of ignorance. Nation - the United Asiatic people, dark and light, the pale person is in a race with time now to avoid the wrath of the Asiatic Nation (GOD). Knowledge the culture to show the power.'
        },
        {
            alphanumeric: 'O',
            numeric: 15,
            term: 'Cipher',
            meaning: 'Cipher is a person place or being, a circle that consists of 360 degrees or a cycle of life, C-I-Power-Her, Her-Power-I-C.'
        },
        {
            alphanumeric: 'P',
            numeric: 16,
            term: 'Power',
            meaning: 'Power is strength, energy, and magnetism. Truth is the ultimate power, star or child. Knowledge equality is power; therefore, knowledge will born that equality.'
        },
        {
            alphanumeric: 'Q',
            numeric: 17,
            term: 'Queen',
            meaning: 'Queen is the woman factor of life. Mother of the womb, she is queen for she is knowledge god, build or destroy, and or equality wisdom.'
        },
        {
            alphanumeric: 'R',
            numeric: 18,
            term: 'Rule or Ruler',
            meaning: 'Rule (Righteous, Right Ruler) is a guide which God, the Asiatic man, uses to keep everything right and exact. Righteous are the Asiatic people according to nature. Right is the proper nature of things and people. Ruler is one who leads a King and or Queen when the King is not physically present.'
        },
        {
            alphanumeric: 'S',
            numeric: 19,
            term: 'Self or Savior',
            meaning: 'Saviour (Self) is the one possessing the power of God and resurrects the people after first saving self. One who saves all who want to be saved and add on to self, self is the true reality of one, be it man or woman.'
        },
        {
            alphanumeric: 'T',
            numeric: 20,
            term: 'Truth or Square',
            meaning: 'Truth or Square - Truth is understanding the reality of wisdom. Allah shows his powers and proves his powers, and presents the truth regardless of what angles of a square. Ninety degrees to each angle, four times ninety equals three hundred sixty. The square is a multiple of four and the cube is six.'
        },
        {
            alphanumeric: 'U',
            numeric: 21,
            term: 'You, Universe, and U-N-I-Verse',
            meaning: 'Universe - The universe is the home of galaxies, which is home to our solar system. The universe owns and belongs to all Asiatic men and women. U - (You) and I verse. You is pertaining to the woman when dealing in completing the home (Child). You also means self, King, Savior, Queen, her, woman.'
        },
        {
            alphanumeric: 'V',
            numeric: 22,
            term: 'Victory',
            meaning: 'Victory - To obtain the knowledge, wisdom and understanding, a man that is blind, deaf and dumb has to take on the Seal of Victory to win.'
        },
        {
            alphanumeric: 'W',
            numeric: 23,
            term: 'Wisdom',
            meaning: 'Wisdom is wise terms spoken by a wise man, this is power, when Allah speaks it is called wisdom, for when He speaks, it is like an ocean that would never go dry. Wisdom is the woman.'
        },
        {
            alphanumeric: 'X',
            numeric: 24,
            term: 'Unknown',
            meaning: 'Unknown is the identity of self, woman, man, and God because they are not wise to their true culture. X in genetics is the female factor or chromosome.'
        },
        {
            alphanumeric: 'Y',
            numeric: 25,
            term: 'Why',
            meaning: 'Why the question most asked to justify, why does he like the devil? Why does the devil call our people African? Why are there so many of our people still dead? This is because of their own doing, not accepting God. In genetics, the male factor or chromosome is Y. God knowledge on the Y has three points, foundation, right point and left point.'
        },
        {
            alphanumeric: 'Z',
            numeric: 26,
            term: 'Zig-Zag-Zig',
            meaning: 'Zig, Zag, Zig - meaning knowledge and understanding are alike and zag is un-a-like.'
        },
    ];

    return canonItems;
}));

