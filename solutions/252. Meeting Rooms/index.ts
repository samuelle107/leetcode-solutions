function canAttendMeetings(intervals: number[][]): boolean {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sortedIntervals.length - 1; i += 1) {
    const [_s1, e1] = sortedIntervals[i];
    const [s2, _e2] = sortedIntervals[i + 1];

    if (s2 < e1) return false;
  }

  return true;
}
