function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

//List
const head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);
head.next.next.next.next = new ListNode(5, head.next);

var fast = head, slow = head;

while(fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;

  if(slow == fast) {
    console.log("Cycle exists");
    return;
  }
}
console.log("Cycle doens't exists in the list");