/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set('qwertyuiopQWERTYUIOP');
    const row2 = new Set('asdfghjklASDFGHJKL');
    const row3 = new Set('zxcvbnmZXCVBNM');

    function canTypeInOneRow(word, row) {
        for (let char of word) {
            if (!row.has(char)) {
                return false;
            }
        }
        return true;
    }

    // Filter the words to those that can be typed on one keyboard row
    return words.filter(word => {
        return canTypeInOneRow(word, row1) || canTypeInOneRow(word, row2) || canTypeInOneRow(word, row3);
    });
};