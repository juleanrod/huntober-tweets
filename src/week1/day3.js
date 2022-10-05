/*
    example key characters -> 'A','_','K','E','Y','!'

    input: 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
     implement key replacement function
    output: ' you could think this is hard to read before replacing the key characters'

*/

function giveItSomeSpace(s, keyCharacters) {
    let set = new Set(keyCharacters);
    let res = s.split('');
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            res.splice(i, 1, ' ');
        }
    }
    return res.join('');
}


let s = "AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters";

const keyCharacters = ['A', '_', 'K', 'E', 'Y', '!'];

const result = giveItSomeSpace(s, keyCharacters);

console.log(result);
