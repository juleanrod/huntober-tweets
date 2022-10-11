
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