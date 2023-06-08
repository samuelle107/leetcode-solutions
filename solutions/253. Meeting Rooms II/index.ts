import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Time - O(N * Log(N))
 * Space - O(N)
 * @param intervals
 * @returns
 */
function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  const rooms = new MinPriorityQueue<number>();

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sortedIntervals.length; i += 1) {
    const [start, end] = sortedIntervals[i];

    const front = rooms.front();

    const el: number | null =
      (typeof front === "number" ? front : front?.element) ?? 0;

    if (start >= el) {
      rooms.dequeue();
    }

    rooms.enqueue(end);
  }

  return rooms.size();
}

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(minMeetingRooms(intervals));
