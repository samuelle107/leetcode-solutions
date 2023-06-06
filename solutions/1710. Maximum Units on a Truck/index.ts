/**
 * Time - O(N * Log(N))
 * Space - O(1)
 * @param boxTypes
 * @param truckSize
 * @returns
 */
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  // Greedy. Try to fit the most amount of units into a box
  const sortedBoxTypes = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  // Keeps track of how many boxes are being used
  let boxCount = 0;
  // Keeps track of how many units are on the trucks
  let unitCount = 0;

  for (let i = 0; i < sortedBoxTypes.length; i += 1) {
    const [numOfBoxes, unitQtyPerBox] = sortedBoxTypes[i];

    if (boxCount + numOfBoxes > truckSize) {
      // If the current set of boxes cannot fit on the truck,
      // Try to fit the remaining space with a partial amount of boxes

      const diff = truckSize - boxCount;

      boxCount += diff;
      unitCount += diff * unitQtyPerBox;

      return unitCount;
    } else if (boxCount + numOfBoxes <= truckSize) {
      // Add all of the boxes and its units to the truck

      boxCount += numOfBoxes;
      unitCount += numOfBoxes * unitQtyPerBox;
    } else {
      return unitCount;
    }
  }

  return unitCount;
}

const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;

console.log(maximumUnits(boxTypes, 4));
