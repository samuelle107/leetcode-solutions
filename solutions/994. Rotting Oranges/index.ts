function parseCoord(x: number, y: number) {
  return `${x}.${y}`;
}

function getAdjNodes(node: [number, number], grid: (0 | 1 | 2)[][]) {
  const [x, y] = node;

  const u: [number, number] = [x, y - 1];
  const d: [number, number] = [x, y + 1];
  const l: [number, number] = [x - 1, y];
  const r: [number, number] = [x + 1, y];

  return [u, d, l, r].filter((coord) => !!grid[coord[0]]?.[coord[1]]);
}

function orangesRotting(grid: (0 | 1 | 2)[][]): number {
  let q: [number, number][] = [];
  const visited = new Set<string>();
  let counter = -1;

  // Stores the initial counts of fresh, rotten, and nothing
  let count = {
    0: 0,
    1: 0,
    2: 0,
  };

  // Add all of the initial rotten apples to the q
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const curr = grid[i][j];

      count[curr] = count[curr] + 1;

      if (curr === 2) {
        q.push([i, j]);
        visited.add(parseCoord(i, j));
      }
    }
  }

  // There are fresh oranges, and no rotten oranges
  if (count[1] > 0 && count[2] === 0) {
    return -1;
  }

  // There are no rotten oranges
  if (count[2] === 0) {
    return 0;
  }

  while (q.length > 0) {
    counter += 1;

    const tempQ = q;

    q = [];

    tempQ.forEach((node) => {
      getAdjNodes(node, grid).forEach(([x, y]) => {
        if (!visited.has(parseCoord(x, y))) {
          q.push([x, y]);
          visited.add(parseCoord(x, y));
          grid[x][y] = 2;
        }
      });
    });
  }

  // If there remains a fresh orange, then it is not possible
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      const curr = grid[i][j];

      if (curr === 1) {
        return -1;
      }
    }
  }

  return counter;
}

const grid: (0 | 1 | 2)[][] = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];

console.log(orangesRotting(grid));
