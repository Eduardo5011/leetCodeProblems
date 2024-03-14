/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 //arrray of integers
 // integer target
 // for loop
 // check if target adds 2 integers



var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j ++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};