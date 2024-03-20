/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let uniqueTypes = []

    for (let i = 0; i < candyType.length; i++){
        if(!uniqueTypes.includes(candyType[i])){
            uniqueTypes.push(candyType[i])
        }
    }
    return Math.min(uniqueTypes.length, candyType.length / 2)
};