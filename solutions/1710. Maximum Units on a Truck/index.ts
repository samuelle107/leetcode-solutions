function maximumUnits(boxTypes: number[][], truckSize: number): number {
  const sortedBoxTypes = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let truckCount = 0;
  let unitCount = 0;

  for (let i = 0; i < sortedBoxTypes.length; i += 1) {
    const [num, units] = sortedBoxTypes[i];

    if (truckCount + num > truckSize) {
      const diff = truckSize - truckCount;

      truckCount += diff;
      unitCount += diff * units;

      return unitCount;
    } else if (truckCount + num <= truckSize) {
      truckCount += num;
      unitCount += num * units;
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
