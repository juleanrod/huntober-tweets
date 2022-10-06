
export default function catThemedPunFilter(title) {
    let flag = true;
    
    (function isTrimmed(t) {
        if(t !== t.trim()) flag = false;
    })(title);

    (function hasDogBarkBone(t) {
        let test = t.toLowerCase();
        if(test.indexOf('dog') !== -1 ||
           test.indexOf('bark') !== -1 ||
           test.indexOf('bone') !== -1)
           flag = false;
    })(title);
    
    (function hasLenNotMultipleOf5(t) {
        if(t.length % 5 === 0) flag = false;
    })(title);

    (function hasFirstLastCharCodeOddSum(t) {
        let last = t.charCodeAt(t.length - 1);
        let first = t.charCodeAt(0);
        let sum = last + first;
        if(sum % 2 === 0) flag = false;
    })(title);

    (function hasEAfterMiddle(t) {
        t = t.toLowerCase();
        let idx = Math.ceil(t.length / 2);
        if(t[idx] === 'e') flag = false;
    })(title);

    (function hasEvenChars(t) {
        let lowercaseCount = t.match(/[a-z]/g)?.length;
        if(lowercaseCount % 2 !== 0) flag = false;
    })(title);

    (function hasTwoUpperCases(t){
        let countUppercases = t.match(/[A-Z]/g)?.length;
        if(countUppercases < 2) flag = false;
    })(title);

    (function hasS(t) {
        if(t?.match(/[S]/g) !== null) flag = false;
    })(title);
    
    return flag;
    
}