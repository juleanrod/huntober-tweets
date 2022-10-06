/*
    example key characters -> 'A','_','K','E','Y','!'

    input: 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
     implement key replacement function
    output: ' you could think this is hard to read before replacing the key characters'

*/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import aBitOfAMess from './day2.js';


let getData = function() {

    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        let filePath = path.join(__dirname, 'theMess.txt');
        
        let data = fs.readFileSync(filePath).toString();
        
        return data;

    } catch(err) {
        console.log("Error!");
    }
}

let data = getData();
const charactersArr = aBitOfAMess(data);

export default function giveItSomeSpace(s, keyCharacters) {
    
    let set = new Set(keyCharacters);
    let res = s.split('');
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            res.splice(i, 1, ' ');
        }
    }
    return res.join('');
}