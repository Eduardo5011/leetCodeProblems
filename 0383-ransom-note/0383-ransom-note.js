/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCount = {};

    for(let i = 0; i < magazine.length; i++){
        const char = magazine[i];
        if (letterCount[char]){
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }

    for (let i = 0; i <ransomNote.length; i++){
        const char = ransomNote[i];
        if (!letterCount[char] || letterCount[char] === 0){
            return false;
        }
        letterCount[char]--;
    }
    return true
};