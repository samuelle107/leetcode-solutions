function getAdjCells(x: number, y: number, grid: ("1" | "0")[][]) {
  const adjNodes: [number, number][] = [];

  const l = grid[x - 1]?.[y];
  const r = grid[x + 1]?.[y];
  const u = grid[x]?.[y - 1];
  const d = grid[x]?.[y + 1];

  if (l && l === "1") adjNodes.push([x - 1, y]);
  if (r && r === "1") adjNodes.push([x + 1, y]);
  if (u && u === "1") adjNodes.push([x, y - 1]);
  if (d && d === "1") adjNodes.push([x, y + 1]);

  return adjNodes;
}

function numIslands(grid: ("1" | "0")[][]): number {
  const visited = new Set<string>();
  const q: [number, number][] = [];
  let islands = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const strNode = `${i}.${j}`;
      const node = grid[i][j];

      if (node === "0" || visited.has(strNode)) continue;

      islands += 1;

      q.push([i, j]);
      visited.add(strNode);

      while (q.length > 0) {
        const coords = q.pop();

        const [x, y] = coords!;

        const adjNodes = getAdjCells(x, y, grid);

        adjNodes.forEach((node) => {
          const [x, y] = node;
          const strNode = `${x}.${y}`;

          if (!visited.has(strNode)) {
            visited.add(strNode);
            q.push([x, y]);
          }
        });
      }
    }
  }

  return islands;
}

const grid: ("1" | "0")[][] = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
