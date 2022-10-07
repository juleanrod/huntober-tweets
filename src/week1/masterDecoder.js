import fix from './day1.js';
import aBitOfAMess from './day2.js';
import { getDataFromFile, giveItSomeSpace } from './day3.js';
import reverseIt from './day4.js';
import catThemedPunFilter from './day5.js';
import removeDecoy from './day6.js';
import swapToInverse from './day7.js';

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";
// day1
const fixedEncryptedMsg = fix(encryptedMsg);
// day2
const theMessData = getDataFromFile('theMess.txt');
const keyCharacters = aBitOfAMess(theMessData);
// day3
const spacedEncryptedMsg = giveItSomeSpace(fixedEncryptedMsg, keyCharacters);
// day4
const reversedSpacedEncryptedMsg = reverseIt(spacedEncryptedMsg);
// day5
const countOfValidPuns = getDataFromFile('bestTitlesEver.txt')
                        .split(',')
                        .filter(title => catThemedPunFilter(title))
                        .length;

// day6
const noDecoyEncryptedMsg = removeDecoy(reversedSpacedEncryptedMsg, countOfValidPuns);
// day7
const decryptedMsg = swapToInverse(noDecoyEncryptedMsg);
console.log(decryptedMsg); // -> HUNTOBER 1 week down. #100Devs WE GO GET!!