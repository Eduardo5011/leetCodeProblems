/**
 * @param {number[]} nums
 * @return {number}
 */

 //return the maximum number of consecutive 1s
 // loop through array
 //check if the array has consecutive numbers
 //if so increment
var findMaxConsecutiveOnes = function(nums) {
    let maxStreak = 0;
    let currentStreak = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            currentStreak++
            maxStreak = Math.max(maxStreak, currentStreak)
        } else {
            currentStreak = 0
        }
    }
    return maxStreak
};