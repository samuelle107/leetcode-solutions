function dfs(
  node: number,
  currentPath: number[],
  graph: number[][],
  validPath: number[][]
) {
  if (node === graph.length - 1) {
    validPath.push(currentPath);

    return;
  }

  const adjNodes = graph[node];

  for (let i = 0; i < adjNodes.length; i += 1) {
    const nextNode = adjNodes[i];
    const nextPath = [...currentPath, nextNode];

    dfs(nextNode, nextPath, graph, validPath);
  }
}

function allPathsSourceTarget(graph: number[][]): number[][] {
  const validPaths: number[][] = [];

  dfs(0, [0], graph, validPaths);

  return validPaths;
}
