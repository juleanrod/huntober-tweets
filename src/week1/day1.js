/*  
    Given:

   '0' <-> 'O'      '5' <-> 'S'
   '1' <-> 'I'      '6' <-> 'G'
   '2' <-> 'Z'      '7' <-> 'L'
   '3' <-> 'E'      '8' <-> 'B'
   '4' <-> 'h'      '9' <-> 'q'

   Example:

    input: "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
    --implement fix function ->
    output: "PRO-TIP #498: IT'S NICE TO SAY HELLO."
 */


function fix(s) {
    // mappings given to us
    const given = {
        '0': 'O',
        '1': 'I',
        '2': 'Z',
        '3': 'E',
        '4': 'h',
        '5': 'S',
        '6': 'G',
        '7': 'L',
        '8': 'B',
        '9': 'q',
    };

    const result = Array(s.length).fill(0);
    const values = Object.values(given);

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if(curr in given) {
            result[i] = given[curr];
            continue;
        }

        if(values.includes(curr) === true) {
            let idx = values.indexOf(curr);
            result[i] = idx;
        } else {
            result[i] = s[i];
        }
    }
    return result.join('');
} 

console.log("input: PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")
let result = fix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.");
console.log("output:", result);
