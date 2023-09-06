function createLinkedList() {
  let head = null;

  function getHead() {
    return head;
  }

  function insertHead(data) {
    const newNode = {
      data,
      next: null,
    };

    // in case linked list is empty, use it as head
    if (!head) {
      head = newNode;
      return head;
    }

    // Otherwise, assign head to newNode
    newNode.next = head;
    head = newNode;
    return head;
  }

  function some(isValidFn) {
    // your code here
    if (head == null) return false;
    let value = head;
    let i = 0;
    while (value != null) {
      if (isValidFn(value.data, i)) return true;
      i++;
      value = value.next;
    }
    return false;
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
    getHead,
    insertHead,
    some,
    printList,
  };
}

createLinkedList().insertHead(4);
createLinkedList().insertHead(3);
createLinkedList().insertHead(2);
createLinkedList().insertHead(1);

console.log(createLinkedList().some((x) => x === 3));
createLinkedList().printList();
