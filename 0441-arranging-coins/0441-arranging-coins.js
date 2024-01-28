/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0;
    let right = n;

    while(left <= right){
        mid = Math.floor((left + right) / 2)
        current = mid * (mid + 1) / 2;

        if(current === n){
            return mid
        } else if(current < n){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};