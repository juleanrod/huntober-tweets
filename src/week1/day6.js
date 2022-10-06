
export default function removeDecoy(s, int) {
    if(!s.length) return s;
    let result = s.split('');
    
    for(let i = int-1; i <= s.length; i+=int) {
        result[i] = '';
    }
    return result.join('');
}