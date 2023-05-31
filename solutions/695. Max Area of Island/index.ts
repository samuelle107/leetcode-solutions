function dfs(x: number, y: number, grid: number[][]): number {
  if (grid[x]?.[y] !== 1) return 0;

  grid[x][y] = 0;

  return (
    1 +
    dfs(x + 1, y, grid) +
    dfs(x - 1, y, grid) +
    dfs(x, y + 1, grid) +
    dfs(x, y - 1, grid)
  );
}

function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j, grid);

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}
