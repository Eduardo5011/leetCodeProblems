/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length !== t.length) {
        return false;
    }

    const count = {};

    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return Object.values(count).every(val => val === 0);
};