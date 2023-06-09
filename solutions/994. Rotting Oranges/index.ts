function parseCoord(x: number, y: number) {
  return `${x}.${y}`;
}

function getAdjNodes(node: [number, number], grid: (0 | 1 | 2)[][]) {
  const [x, y] = node;

  const u: [number, number] = [x, y - 1];
  const d: [number, number] = [x, y + 1];
  const l: [number, number] = [x - 1, y];
  const r: [number, number] = [x + 1, y];

  const arr: [number, number][] = [];

  const dirs = [u, d, l, r];

  for (let i = 0; i < dirs.length; i += 1) {
    const [x1, y1] = dirs[i];

    if (grid[x1]?.[y1]) arr.push(dirs[i]);
  }

  return arr;
}

function orangesRotting(grid: (0 | 1 | 2)[][]): number {
  let q: [number, number][] = [];
  const visited = new Set<string>();
  let counter = 0;

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

  // If the count of fresh is 0, then there is no need to continue rotting
  // Without this condition
  while (q.length > 0 && count[1] > 0) {
    counter += 1;
    const tempQ = q;

    // clear the q
    q = [];

    // Does ring scans
    // Each iteration of the while loop, get all of the adjacent cells and add it to the q
    for (let i = 0; i < tempQ.length; i += 1) {
      const node = tempQ[i];
      const adjNodes = getAdjNodes(node, grid);

      for (let j = 0; j < adjNodes.length; j += 1) {
        const [x, y] = adjNodes[j];

        if (!visited.has(parseCoord(x, y))) {
          q.push([x, y]);
          visited.add(parseCoord(x, y));
          count[1] -= 1;
        }
      }
    }
  }

  if (count[1] > 0) return -1;

  return counter;
}
