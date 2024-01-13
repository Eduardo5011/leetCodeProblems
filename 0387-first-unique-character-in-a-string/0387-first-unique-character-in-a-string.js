/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const frequency = {};

    for (let i = 0; i < s.length; i++){
        const char = s[i];
        frequency[char] = (frequency[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++){
        if(frequency[s[i]] === 1){
            return i
        }
    }

    return -1
    
};