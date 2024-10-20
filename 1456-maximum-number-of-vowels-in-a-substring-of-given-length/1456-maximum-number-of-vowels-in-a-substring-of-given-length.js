/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const isVowel = (char) => 'aeiou'.includes(char);

    let maxVowelCount = 0
    let currentVowelCount = 0;

    for(let i =0; i < k; i++){
        if (isVowel(s[i])){
            currentVowelCount++
        }
    }

    maxVowelCount = currentVowelCount

    for (let i = k; i < s.length; i++) {
        
        if (isVowel(s[i - k])) {
            currentVowelCount--;
        }
        
        if (isVowel(s[i])) {
            currentVowelCount++;
        }
        
        
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }
    
    return maxVowelCount;
    
};