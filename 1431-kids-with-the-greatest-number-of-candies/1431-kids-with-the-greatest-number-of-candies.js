/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies)
    let result = [];

    for(let i = 0; i < candies.length; i++){
        result[i] = (candies[i] + extraCandies >= maxCandies);
    }

    return result;
};