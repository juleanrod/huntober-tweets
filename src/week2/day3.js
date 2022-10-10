export default function moveThingsAround(array) {
    
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        let curr = array[i];
        if(curr.indexOf('a') > 0) {
            array[i] = array[j];
            array[j] = curr; 
            j++;
        } 
    }

    let temp = [];
    for(let i = j; i < array.length;) {
        let curr = array[i];
        if(curr.length <= 3){
            i++;
        } else {
            array.splice(i, 1);
            temp.push(curr);
        }
    }
    return array.concat(temp);
}