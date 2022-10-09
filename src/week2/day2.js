
export function moveLeft(value, array) {
    let idx = array.indexOf(value);
    if(idx > 0) {
        let temp = array[idx];
        array[idx] = array[idx - 1];
        array[idx - 1] = temp;
    }
    return array;
}

export function moveRight(value, array) {
    let idx = array.indexOf(value);
    if(idx != -1 && idx < array.length -1) {
        let temp = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = temp;
    } 
    return array;
}