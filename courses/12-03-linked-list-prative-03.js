const { white } = require("color-name");

function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }
    newNode.next = head;
    head = newNode;
  }

  function getHead() {
    if (head == null) return;

    return head;
  }

  function getTail() {
    let tail = head;
    if (tail == null) return null;

    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  }

  function getSize() {
    let size = head;
    let count = 0;
    while (size != null) {
      count++;
      size = size.next;
    }
    return count;
  }

  function findIndex(n) {
    if (head == null) return -1;
    let current = head;
    let i = 0;
    while (current != null) {
      if (current.data === n) return i;
      i++;
      current = current.next;
    }
    return -1;
  }

  function findCallback(callBackFn) {
    if (head == null) return undefined;
    let current = head;
    let i = 0;
    while (current != null) {
      if (callBackFn(current.data, i)) return current.data;
      i++;
      current = current.next;
    }
    return undefined;
  }

  function insertBeforePosition(data, position) {
    const newNode = {
      data: data,
      next: null,
    };
    if (position <= 0) {
      newNode.next = head;
      head = newNode;
    }

    let prev = head;
    let curr = head;
    let i = 0;
    while (curr != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = newNode;
    newNode.next = curr;
  }

  function removeHead() {
    if (head != null) {
      head = head.next;
    }
  }

  function removeTail() {
    // is empty
    if (head == null) return null;
    // has 1 item
    if (head.next == null) {
      head = null;
    }
    // has some items
    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    secondLast.next = null;
  }

  function printList() {
    if (head == null) return;
    let current = head;

    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  return {
    insertHead,
    printList,
    getHead,
    getTail,
    getSize,
    findIndex,
    findCallback,
    insertBeforePosition,
    removeHead,
    removeTail,
  };
}
const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.insertBeforePosition(8, 3);
numberLinkedList.removeHead();
numberLinkedList.removeTail();

numberLinkedList.printList();

console.log("Tail", numberLinkedList.getTail());
console.log("Head", numberLinkedList.getHead());
console.log("Size", numberLinkedList.getSize());
console.log("Index", numberLinkedList.findIndex(3));
console.log(
  "CallbackFn",
  numberLinkedList.findCallback((x) => x % 2 === 0)
);
