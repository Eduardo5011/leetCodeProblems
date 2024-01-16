/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const counts = {};
    const intersection = [];;

    for(const num of nums1){
        counts[num] = (counts[num] || 0) + 1;
    }

    for(const num of nums2){
        if(counts[num] > 0){
            intersection.push(num);
            counts[num]--
        }
    }
    return intersection;
};