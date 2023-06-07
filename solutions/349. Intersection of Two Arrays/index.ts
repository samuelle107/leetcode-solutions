function intersection(nums1: number[], nums2: number[]): number[] {
  const n1 = new Set<number>();
  const n2 = new Set<number>();
  const inter = new Set<number>();

  for (let i = 0; i < Math.max(nums1.length, nums2.length); i += 1) {
    const item1: number | undefined = nums1[i];
    const item2: number | undefined = nums2[i];

    if (item1 !== undefined) n1.add(item1);
    if (item2 !== undefined) n2.add(item2);

    if (n1.has(item1) && n2.has(item1)) inter.add(item1);
    if (n1.has(item2) && n2.has(item2)) inter.add(item2);
  }

  return Array.from(inter);
}

const nums1 = [8, 0, 3],
  nums2 = [0, 0];

console.log(intersection(nums1, nums2));
