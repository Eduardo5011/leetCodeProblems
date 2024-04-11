/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let totalDuration = 0;
    let t = timeSeries.length

    for (let i = 0; i < t - 1; i++){
        if(timeSeries[i] + duration > timeSeries[i + 1]){
            totalDuration += timeSeries[i + 1] - timeSeries[i]
        } else {
            totalDuration += duration
        }
    }
    totalDuration += duration

    return totalDuration
};