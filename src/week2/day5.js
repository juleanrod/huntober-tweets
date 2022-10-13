
export function oneDShuffle(array) {

    if(!array) return null;
    if(array.length === 0) return array;
    
    for(let i = 0; i < array.length - 1; i++) {

        let randomIdx = Math.ceil(Math.random() * array.length - 1);

        let temp = array[i];
        array[i] = array[randomIdx];
        array[randomIdx] = temp;
    }

    return array;
}

export function twoDShuffle(matrix) {
    
    if(!matrix) return null;
    if(matrix.length === 0) return matrix;
    
    let r = matrix.length;

    for(let i = 0; i < r - 1; i++) {

        oneDShuffle(matrix[i]);
        let randomInnerArray = Math.abs(Math.ceil(Math.random() * r - 1)); 

        let temp = matrix[i];
        matrix[i] = matrix[randomInnerArray];
        matrix[randomInnerArray] = temp;
    }

    return matrix;
}

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }