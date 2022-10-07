
export default function swapToInverse(string) {
    const uppercaseAlphabet = Array(26).fill(0).map((_, i) => i + 65);
    const lowercaseAlphabet = uppercaseAlphabet.map(c => c + 32).reverse();
    const set = uppercaseAlphabet.concat(lowercaseAlphabet);
    
    const result = Array(string.length);
    
    for(let i = 0; i < string.length; i++) {
        let currCharCode = string.charCodeAt(i);
        // if curr is uppercase letter
        if(currCharCode >= 65 && currCharCode <= 90) {
            const idx = set.indexOf(currCharCode);
            result[i] = String.fromCharCode(set[idx + 26]);
        // if curr is lowercase letter
        } else if(currCharCode >= 97 && currCharCode <= 122) {
            const idx = set.indexOf(currCharCode);
            result[i] = String.fromCharCode(set[idx - 26]);
        // if neither upper or lower
        }else {
            result[i] = string[i];
        }

    }
    return result.join('');
}