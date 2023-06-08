function countNegatives(grid: number[][]): number {
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const num = grid[i][j];

      if (num < 0) {
        count += 1;
      }
    }
  }

  return count;
}
