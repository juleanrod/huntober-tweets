export default function moveThingsAround(array) {
    
    let bucket1 = array.filter((x) => { return x.includes('a') });
    let bucket2 = array.filter((x) => { return x.length <= 3 });
    let bucket3 = array.filter((x) => { return x.length > 3 && !x.includes('a')});

    return bucket1.concat(bucket2).concat(bucket3);
}