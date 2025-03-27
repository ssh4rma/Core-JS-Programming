//definition of List
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}


//List
const head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);

printList(head);

//print the list
function printList(head) {
  while(head != null) {
    console.log(head.val);
    head = head.next;
  }
}