/**
 * https://www.interviewcake.com/question/javascript/linked-list-cycles
 */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function containsCycle(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}
