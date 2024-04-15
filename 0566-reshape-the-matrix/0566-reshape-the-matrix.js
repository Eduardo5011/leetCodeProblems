/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    if (m * n !== r * c){
        return mat;
    }

    let reshaped = new Array(r).fill().map(() => new Array(c));
    let row = 0;
    let col = 0;

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            reshaped[row][col] = mat[i][j];
            col++
            if(col === c){
                col = 0
                row++
            }
        }
    }
    return reshaped
};