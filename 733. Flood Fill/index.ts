type Cell = [number, number];

function getAdjNodes(
  node: Cell,
  image: number[][],
  targetNodeColor: number
): Cell[] {
  const nodes: Cell[] = [];
  const [x, y] = node;

  const u: Cell = [x, y - 1];
  const d: Cell = [x, y + 1];
  const l: Cell = [x - 1, y];
  const r: Cell = [x + 1, y];

  if (image[u[0]]?.[u[1]] === targetNodeColor) nodes.push(u);
  if (image[d[0]]?.[d[1]] === targetNodeColor) nodes.push(d);
  if (image[l[0]]?.[l[1]] === targetNodeColor) nodes.push(l);
  if (image[r[0]]?.[r[1]] === targetNodeColor) nodes.push(r);

  return nodes;
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const q: Cell[] = [];
  const visited = new Set<string>();
  // Starting node
  const parsedInit = `${sr}.${sc}`;
  const targetNodeColor = image[sr][sc];

  q.push([sr, sc]);
  visited.add(parsedInit);
  image[sr][sc] = color;

  while (q.length > 0) {
    const node = q.pop()!;
    const adjNodes = getAdjNodes(node, image, targetNodeColor);

    for (let i = 0; i < adjNodes.length; i += 1) {
      const node = adjNodes[i];
      const [x, y] = node;
      const parsedCoord = `${x}.${y}`;

      if (!visited.has(parsedCoord)) {
        visited.add(parsedCoord);
        q.push(node);
        image[x][y] = color;
      }
    }
  }

  return image;
}
