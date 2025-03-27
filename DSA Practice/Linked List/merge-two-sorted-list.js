function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const head1 = new ListNode(1, null);
head1.next = new ListNode(2, null);
head1.next.next = new ListNode(3, null);
head1.next.next.next = new ListNode(4, null);
head1.next.next.next.next = new ListNode(5, null);

const head2 = new ListNode(6, null);
head2.next = new ListNode(7, null);
head2.next.next = new ListNode(3, null);
head2.next.next.next = new ListNode(9, null);
head2.next.next.next.next = new ListNode(10, null);


var t1 = head1, t2 = head2;

let dummy = new ListNode(-1);
let newHead = dummy;

while(t1 && t2) {
  if(t1.val < t2.val) {
    let newnode = new ListNode(t1.val);
    newHead.next = newnode;
    newHead = newHead.next;
    t1 = t1.next;
  } else if(t1.val >= t2.val) {
    let newnode = new ListNode(t2.val);
    newHead.next = newnode;
    newHead = newHead.next;
    t2 = t2.next;
  }
}

while(t1) {
  let newnode = new ListNode(t1.val);
  newHead.next = newnode;
  newHead = newHead.next;
  t1 = t1.next;
}

while(t2) {
  let newnode = new ListNode(t2.val);
  newHead.next = newnode;
  newHead = newHead.next;
  t2 = t2.next;
}

printList(dummy.next);
function printList(head) {
  var t = head; 
  while(t) {
    console.log(t.val);
    t = t.next;
  }
}
