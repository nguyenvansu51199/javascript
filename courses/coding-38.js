function createLinkedList() {
  let head = null;

  function insertTail(data) {
    const newNode = {
      data: data,
      next: null,
    };
    // your code here ...
    if (head == null) {
      head = newNode;
      return head;
    }
    while (head.next != null) {
      head = head.next;
    }
    head.next = newNode;
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
    insertTail,
    printList,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertTail(5);

numberLinkedList.printList();
