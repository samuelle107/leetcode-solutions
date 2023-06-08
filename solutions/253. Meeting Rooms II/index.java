import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
  public int minMeetingRooms(int[][] intervals) {
    if (intervals.length == 0) {
      return 0;
    }

    PriorityQueue<Integer> rooms = new PriorityQueue();

    Arrays.sort(intervals, (a,b) -> a[0] - b[0]);

    for (int[] interval : intervals) {
      if (
        rooms.size() > 0
        // peek is front
        && interval[0] >= rooms.peek()
      ) {
        // poll is dequeue
        rooms.poll();
      }
      // Add is enqueue
      rooms.add(interval[1]);
    }

    return rooms.size();
  }
}

