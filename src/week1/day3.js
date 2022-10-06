/*
    example key characters -> 'A','_','K','E','Y','!'

    input: 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
     implement key replacement function
    output: ' you could think this is hard to read before replacing the key characters'

*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function getDataFromFile(file) {

    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, file);
        const data = fs.readFileSync(filePath).toString();
        
        return data;

    } catch(err) {
        console.log(err);
    }
}

export function giveItSomeSpace(s, keyCharacters) {

    let result = s;
    keyCharacters.forEach(char => {
        result = result.replaceAll(char, ' ');
    })
    return result;
}