import { ListNode } from "../../types/linked-list";

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast = head?.next;

  while (fast) {
    if (slow === fast) return true;

    slow = slow?.next || null;
    fast = fast?.next?.next || null;
  }

  return false;
}
