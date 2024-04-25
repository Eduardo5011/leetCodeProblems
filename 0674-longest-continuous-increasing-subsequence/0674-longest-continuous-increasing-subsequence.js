/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let maxLen = 1;
    let currentLen = 1;


    for (let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i - 1]){
            currentLen++;
        } else {
            maxLen = Math.max(maxLen, currentLen)
            currentLen = 1
        }
    }

    maxLen = Math.max(maxLen, currentLen)

    return maxLen
};