/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let map = new Map();
    let operations = 0;

    for (let num of nums){
        let complement = k - num;

        if(map.has(complement) && map.get(complement) > 0){
            operations++
            map.set(complement, map.get(complement) - 1)
        } else {
              map.set(num, (map.get(num) || 0) + 1);
        }
    }
    return operations;
};