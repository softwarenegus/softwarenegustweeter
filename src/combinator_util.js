

let prefix = [ 
"bible", "biblical", "christian", "gospel", "Jesus", "GOD",
"buddhist", "buddhism", "hindu", "hinduism",
"kemetic", "sumerian", "babylonian", "mayan", "incan", "aztec",
"moorish", "muslim", "islam", "prohet muhammad", "quran", "quranic", "rastafarian",
"gnostic", "yoruba", "yoruban", "alchemic", "alchemy", "voodoo", "voodou", "talmud", "kabbalah", "kabbahlic",
"african", "africa", "afrikan", "afrika", "african american", "pan african", "pan africanist", "afrocentric", "afro-centric", "black",
"jamaican", "jamaica", "arawak", "carib", "taino", "caribbean", "west indian", 
"nigerian", "ghanian", "nubian", "mali", "malian", "sierra leonean", "cameroon", "angolan", "kenyan", "ugandan", "zimbabwean", "south african",
"chinese", "tibetan", "confucius", "confucian", "tao", "taoist", "taoism", "kung fu", "shaolin",
"japanese", "samurai", "bushido", "martial arts", "karate", "ninjitsu", "zulu",
"native american", "cherokee", "sioux", "pohatan", "comanche", "shinnecock", "chickasaw", "hopi", "shawnee", "apache", "pawnee",
"quantum", "ancient", "indegenous", "metaphysical"
];

let suffix = [
"proverb", "proverbs", "wisdom", "wisdom literature", 
"belief", "beliefs", 
"monk", "monks", 
"shaman", "guru", "priest", "intellectual", "shamans", "gurus", "priests", "intellectuals", 
"theory", "theorist", "theorists", "science", "scientist", "scientists", 
"philosophy", "philosopher", "philosophers", "teaching", "teachings", "teacher", "teachers", 
"consiousness", "konsciousness", "thinker", "thinkers", "thought", "truth", "fact", "facts"
];

for(let pre of prefix) {
  for(let suf of suffix) {
    console.log('"' + pre + ' ' + suf + '"');
  }
}


