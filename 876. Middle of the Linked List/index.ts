class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Naive
// function middleNode(head: ListNode | null): ListNode | null {
//   let node = head;
//   let count = 0;

//   while (node !== null) {
//     node = node?.next;
//     count += 1;
//   }

//   node = head;

//   let middle = Math.ceil((count + 0.1) / 2);

//   for (let i = 1; i <= middle; i += 1) {
//     if (i === middle) {
//       return node;
//     }

//     if (node !== null) {
//       node = node.next;
//     }
//   }

//   return null;
// }

// Slow fast pointer
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }

  return slow;
}
