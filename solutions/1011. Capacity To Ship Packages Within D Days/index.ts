/**
 * Determines if it is possible to ship the weights given the max cap of a ship and the number of days
 * Time - O(N)
 * @param cap - max cap a ship can handle
 * @param weights - the weights of the containers
 * @param days
 * @returns
 */
function canShipInUnderNDays(
  cap: number,
  weights: number[],
  days: number
): boolean {
  // The total amount of days to ship the weights if each ship has a capacity of "cap"
  let currDays = 1;
  let cumSum = 0;

  for (let i = 0; i < weights.length; i += 1) {
    const weight = weights[i];

    // If the cum sum + current weight is over cap,
    // we need to get a new ship
    if (cumSum + weight > cap) {
      currDays += 1;

      cumSum = weight;
    } else {
      cumSum += weight;
    }
  }

  return currDays <= days;
}

/**
 * Time - O(N)
 */
function calculateBounds(weights: number[]) {
  let minWeight = weights[0];
  let maxWeight = 0;

  // Calculate lower and upper bounds
  for (let i = 0; i < weights.length; i += 1) {
    const weight = weights[i];

    minWeight = Math.max(minWeight, weight);
    maxWeight += weight;
  }

  return [minWeight, maxWeight];
}

function shipWithinDays(weights: number[], days: number): number {
  const [lower, upper] = calculateBounds(weights);
  let l = lower;
  let r = upper;

  let min = r;

  // BS has O(log(N)) runtime
  // Each iteration of the BS runs O(N)
  // Therefore, runtime is O(N * log(N))
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const canShip = canShipInUnderNDays(mid, weights, days);

    // Since we are trying to minimize this,
    // If we can ship with the current capacity at mid,
    // We will try to see if we can minimize it by exploring the left half of the binary search
    if (canShip) {
      min = Math.min(min, mid);

      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return min;
}
