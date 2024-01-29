/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
      const length = nums.length;
    
 
    const left = new Array(length).fill(1);
    const right = new Array(length).fill(1);
    const answer = new Array(length);

   
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    // Calculate right products
    for (let i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

   
    for (let i = 0; i < length; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;
};