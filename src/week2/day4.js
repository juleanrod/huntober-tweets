
export function moveUp(value, matrix) {
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        let row = matrix[i];
        if(row.includes(value) && i > 0){
            let idxValue = row.indexOf(value);
            matrix[i][idxValue] = matrix[i-1][idxValue];
            matrix[i-1][idxValue] = value;
            break;
        }
    }

    return matrix;
}

export function moveDown(value, matrix) {
    let n = matrix.length;
    for(let i = 0; i < n-1; i++) {
        let row = matrix[i];
        if(row.includes(value)){
            let idxValue = row.indexOf(value);
            matrix[i][idxValue] = matrix[i+1][idxValue];
            matrix[i+1][idxValue] = value;
            break;
        }
    }

    return matrix;
}

const test = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']];

console.log(moveDown('a', test));
console.log(moveUp('a', test));
console.log(moveDown('a', test));
console.log(moveDown('a', test));
console.log(moveDown('a', test));
// console.log(moveUp('f', test));
// console.log(moveUp('f', test));
// console.log(moveUp('f', test));
// console.log(moveUp('a', test));
// console.log(moveDown('a', test));