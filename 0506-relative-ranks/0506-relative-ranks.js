/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScores = [...score].sort((a,b)=> b - a);
    const rankMap = new Map();

    for (let i = 0; i < sortedScores.length; i++){
        let rank = "";
        if (i === 0) rank = "Gold Medal";
        else if (i === 1) rank = "Silver Medal";
        else if (i === 2) rank = "Bronze Medal";
        else rank = (i + 1).toString();

        rankMap.set(sortedScores[i], rank)
    }
    return score.map(s => rankMap.get(s));
};