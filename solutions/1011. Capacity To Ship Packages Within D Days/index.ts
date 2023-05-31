function canShip(cap: number, weights: number[], days: number): boolean {
  let ships = 1;
  let cumSum = 0;

  for (let i = 0; i < weights.length; i += 1) {
    const weight = weights[i];

    if (cumSum + weight > cap) {
      ships += 1;

      cumSum = weight;
    } else {
      cumSum += weight;
    }
  }

  return ships <= days;
}

function shipWithinDays(weights: number[], days: number): number {
  let minWeight = weights[0];
  let maxWeight = 0;

  // Calculate lower and upper bounds
  for (let i = 0; i < weights.length; i += 1) {
    const weight = weights[i];
    minWeight = Math.max(minWeight, weight);
    maxWeight += weight;
  }

  for (let i = minWeight; i <= maxWeight; i += 1) {
    if (canShip(i, weights, days)) {
      return i;
    }
  }
  return -1;
}
