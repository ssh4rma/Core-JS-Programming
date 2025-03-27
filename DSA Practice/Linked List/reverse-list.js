function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

//List
const head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);

reverseList(head);
function reverseList(head) {
  var curr = head;
  var front = null;
  var prev = null;

  while(curr) {
    front = curr.next; 
    curr.next = prev;
    prev = curr;
    curr = front; 
  }

  var temp = prev;
  while(temp) {
    console.log(temp.val);
    temp = temp.next;
  }
}