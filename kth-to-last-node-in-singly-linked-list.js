/**
 * https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list
 * 
 * Ask questions to clarify the problem: 
 * 1. What should the function return when k is larger than the length of linked-list ? 
 * 2. Does it contain cycles ?
 * 
 * Explain the approach:
 * Use two pointer, one fast pointer which run k-th node first, then run both fast & slow pointer 
 * at the same time, when fast gets to the tail, slow pointer points to the last k-th node. 
 * 
 * Test with edge cases: 
 * 1. k > the length of node
 * 2. k == the length of node
 * 3. Empty linked-list
 * 4. k < 1
 * 
 * Analyze time and space complexity: 
 * T: O(n)
 * S: O(1)
 * 
 */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function kthToLastNode(k, node) {
  if (!node || k < 1) return null;

  let fast = node;
  let slow = node;
  
  let count = 1;
  while (fast.next) {
    fast = fast.next;
    if (count < k) {
      count += 1;
    } else {
      slow = slow.next;
    }
  }
  if (count < k) return null;
  return slow;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(1, a));
console.log(kthToLastNode(0, a));