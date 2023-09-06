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

  function insertBeforePosition(data, position) {
    const newNode = {
      data: data,
      next: null,
    };

    if (position <= 0) {
      newNode.next = head;
      head = newNode;
    }

    let frev = head;
    let curr = head;
    let i = 0;
    while (curr != null && i < position) {
      frev = curr;
      curr = curr.next;
      i++;
    }

    frev.next = newNode;
    newNode.next = curr;
  }

  function getHead() {
    let curr = head;
    if (curr == null) return;

    return curr;
  }

  function getTail() {
    let tail = head;
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
    let curr = head;
    let i = 0;
    while (curr != null) {
      if (curr.data === n) return i;
      i++;
      curr = curr.next;
    }
    return -1;
  }

  function findCallback(callBackFn) {
    if (head == null) return undefined;
    let flag = head;
    while (flag != null) {
      if (callBackFn(flag.data)) return flag;
      flag = flag.next;
    }
    return undefined;
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
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
numberLinkedList.insertBeforePosition(11, -1);

numberLinkedList.printList();
console.log("Head", numberLinkedList.getHead());
console.log("Tail", numberLinkedList.getTail());
console.log("Size", numberLinkedList.getSize());
console.log("Index", numberLinkedList.findIndex(3));
console.log(
  "Calback",
  numberLinkedList.findCallback((x) => x % 2 === 0)
);
