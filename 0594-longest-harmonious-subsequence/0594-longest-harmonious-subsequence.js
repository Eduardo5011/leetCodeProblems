/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const frequency = {};
    let max_length = 0;

    // Count the frequency of each element
    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Find the longest harmonious subsequence
    for (const key in frequency) {
        const num = parseInt(key);
        if (frequency[num + 1]) {
            max_length = Math.max(max_length, frequency[num] + frequency[num + 1]);
        }
    }

    return max_length;
};