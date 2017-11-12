/**
 * https://www.interviewcake.com/question/javascript/reverse-linked-list
 */

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
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

console.log(reverseLinkedList(a));