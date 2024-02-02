/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const characters = s.split("");
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(characters[left])) {
            left++;
        }
        while (left < right && !vowels.has(characters[right])) {
            right--;
        }

        [characters[left], characters[right]] = [characters[right], characters[left]]; // Swap
        left++;
        right--;
    }

    return characters.join("");
};

