/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const frequency = {};
    let duplicate, missing;

    // Count the frequency of each number in nums
    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Identify the duplicated and missing numbers
    for (let i = 1; i <= nums.length; i++) {
        if (frequency[i] === 2) {
            duplicate = i;
        } else if (!frequency[i]) {
            missing = i;
        }
    }

    return [duplicate, missing];
};