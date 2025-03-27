function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const head = new ListNode(1, null); 
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);
head.next.next.next.next = new ListNode(5, null);

//insert at the end
insertAtTheEnd(head, 6);
function insertAtTheEnd(head, newVal) {
  let temp = new ListNode();
  temp = head;

  while(temp.next) {
    temp = temp.next; 
  }

  let newNode = new ListNode(newVal);
  temp.next = newNode;
}

//insert at the front
insertAtFront(head, 0);
function insertAtFront(head, newVal) {
  let newNode = new ListNode(newVal);

  newNode.next = head;
  head = newNode;
}

//print
printList(head);
function printList(head) {
  while(head != null) {
    console.log(head.val);
    head = head.next;
  }
}