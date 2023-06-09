type Grid = ("1" | "0")[][];

/**
 *
 * @param x - i position of the grid
 * @param y  - j position of the grid
 * @param grid - The input grid
 * @param visited - visited set
 * @returns All valid adjacent cells (Does not include visited cells)
 */
function getAdjCells(x: number, y: number, grid: Grid, visited: Set<string>) {
  const l = grid[x - 1]?.[y];
  const r = grid[x + 1]?.[y];
  const u = grid[x]?.[y - 1];
  const d = grid[x]?.[y + 1];

  const adjNodes: [number, number][] = [];

  if (l === "1" && !visited.has(`${x - 1}.${y}`)) adjNodes.push([x - 1, y]);
  if (r === "1" && !visited.has(`${x + 1}.${y}`)) adjNodes.push([x + 1, y]);
  if (u === "1" && !visited.has(`${x}.${y - 1}`)) adjNodes.push([x, y - 1]);
  if (d === "1" && !visited.has(`${x}.${y + 1}`)) adjNodes.push([x, y + 1]);

  return adjNodes;
}

function bfs(
  i: number,
  j: number,
  grid: Grid,
  q: [number, number][],
  visited: Set<string>
) {
  const strNode = `${i}.${j}`;

  q.push([i, j]);
  visited.add(strNode);

  while (q.length > 0) {
    const coords = q.pop();
    const [x, y] = coords!;
    const adjNodes = getAdjCells(x, y, grid, visited);

    for (let i = 0; i < adjNodes.length; i += 1) {
      const node = adjNodes[i];
      const [x, y] = node;
      const strNode = `${x}.${y}`;

      visited.add(strNode);
      q.push([x, y]);
    }
  }
}

function numIslands(grid: Grid): number {
  const visited = new Set<string>();
  const q: [number, number][] = [];
  let islands = 0;

  // Loop through every cell and conduct a BFS if the cell has not been discovered
  // and is part of and island
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const strNode = `${i}.${j}`;
      const node = grid[i][j];

      // No point in doing a bfs in the water, or if the island has already been discovered
      if (node === "0" || visited.has(strNode)) continue;

      bfs(i, j, grid, q, visited);
      islands += 1;
    }
  }

  return islands;
}
