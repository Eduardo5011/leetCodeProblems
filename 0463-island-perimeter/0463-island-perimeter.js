/**
 * @param {number[][]} grid
 * @return {number}


 land = 1
 water = 0
 grid -> horizontal and vertical
 */

 
var islandPerimeter = function(grid) {
     const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) { 
                if (i === 0 || grid[i - 1][j] === 0) perimeter += 1;
                if (i === rows - 1 || grid[i + 1][j] === 0) perimeter += 1; 
                if (j === 0 || grid[i][j - 1] === 0) perimeter += 1; 
                if (j === cols - 1 || grid[i][j + 1] === 0) perimeter += 1; 
            }
        }
    }

    return perimeter;
};