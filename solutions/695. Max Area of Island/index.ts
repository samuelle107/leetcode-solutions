function parseCoord(x: number, y: number) {
  return `${x}.${y}`;
}

function getAdjCells(
  node: [number, number],
  grid: number[][],
  visited: Set<string>
) {
  const [x, y] = node;

  visited.add(parseCoord(x, y));

  const dirs: [number, number][] = [
    [x, y - 1],
    [x, y + 1],
    [x - 1, y],
    [x + 1, y],
  ];

  const arr: [number, number][] = [];

  for (let i = 0; i < dirs.length; i += 1) {
    const dir = dirs[i];
    const [x1, y1] = dir;

    if (!visited.has(parseCoord(x1, y1)) && grid[x1]?.[y1] === 1) {
      arr.push(dir);
      visited.add(parseCoord(x1, y1));
    }
  }

  return arr;
}

function dfs(
  node: [number, number],
  grid: number[][],
  visited: Set<string>
): number {
  const adjNodes = getAdjCells(node, grid, visited);

  if (adjNodes.length === 0) return 1;

  // start with one to account for the current node
  let sum = 1;

  for (let i = 0; i < adjNodes.length; i += 1) {
    const node = adjNodes[i];

    sum += dfs(node, grid, visited);
  }

  return sum;
}

function maxAreaOfIsland(grid: number[][]): number {
  const visited = new Set<string>();

  let maxArea = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      visited.add(parseCoord(i, j));

      if (grid[i][j] === 1) {
        const area = dfs([i, j], grid, visited);

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}
