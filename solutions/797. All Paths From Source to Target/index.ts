// function dfs(
//   node: number,
//   currentPath: number[],
//   graph: number[][],
//   validPath: number[][]
// ) {
//   if (node === graph.length - 1) {
//     validPath.push(currentPath);

//     return;
//   }

//   const adjNodes = graph[node];

//   for (let i = 0; i < adjNodes.length; i += 1) {
//     const nextNode = adjNodes[i];
//     const nextPath = [...currentPath, nextNode];

//     dfs(nextNode, nextPath, graph, validPath);
//   }
// }

// function allPathsSourceTarget(graph: number[][]): number[][] {
//   const validPaths: number[][] = [];

//   dfs(0, [0], graph, validPaths);

//   return validPaths;
// }

/** Backtracking */
function allPathsSourceTarget(graph: number[][]): number[][] {
  const solutions: number[][] = [];

  function backtrack(i: number, curr: number[]) {
    if (i === graph.length - 1) {
      // Weird reference issues.
      // Make sure to make a new ref.
      solutions.push([...curr, i]);

      return;
    }

    const adjCells = graph[i];

    for (let j = 0; j < adjCells.length; j += 1) {
      const adjCell = adjCells[j];

      curr.push(i);
      backtrack(adjCell, curr);
      curr.pop();
    }
  }

  backtrack(0, []);

  return solutions;
}
