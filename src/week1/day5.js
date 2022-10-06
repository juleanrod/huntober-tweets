import { getDataFromFile } from "./day3.js";

const data = getDataFromFile('bestTitlesEver.txt');
const arrData = data.split(',');

export default function catThemedPunFilter(title) {
    let flag = true;
    
    (function isTrimmed(t) {
        if(t !== t.trim()) flag = false;
    })(title);

    (function noDogBarkBone(t) {
        let test = t.toLowerCase();
        if(test.indexOf('dog') !== -1 ||
           test.indexOf('bark') !== -1 ||
           test.indexOf('bone') !== -1)
           flag = false;
    })(title);
    
    (function lenNotMultipleOf5(t) {
        if(t.length % 5 === 0) flag = false;
    })(title);

    (function oddSumFirstLastCharCode(t) {
        let last = t.charCodeAt(t.length - 1);
        let first = t.charCodeAt(0);
        let sum = last + first;
        if(sum % 2 === 0) flag = false;
    })(title);

    (function isEAfterMiddle(t) {
        t = t.toLowerCase();
        let idx = Math.ceil(t.length / 2);
        if(t[idx] === 'e') flag = false;
    })(title);

    (function isEvenChars(t) {
        let lowercaseCount = t.match(/[a-z]/g)?.length;
        if(lowercaseCount % 2 !== 0) flag = false;
    })(title);

    (function twoUpperCases(t){
        let countUppercases = t.match(/[A-Z]/g)?.length;
        if(countUppercases < 2) flag = false;
    })(title);

    (function hasUpperS(t) {
        if(t?.match(/[S]/g) !== null) flag = false;
    })(title);
    
    return flag;
    
}

const result = arrData.filter(title => catThemedPunFilter(title) === true);

console.log(result);
