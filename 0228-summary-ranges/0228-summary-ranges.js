/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    if (nums.length === 0) return result;

    let start = nums[0], end = nums[0];

    for (let i = 1; i < nums.length; i++) {
    
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            
            if (start === end) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${end}`);
            }

            start = end = nums[i];
        }
    }

    
    if (start === end) {
        result.push(`${start}`);
    } else {
        result.push(`${start}->${end}`);
    }

    return result;
};