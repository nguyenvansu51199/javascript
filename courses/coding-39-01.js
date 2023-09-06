function createLinkedList() {
  let head = null;

  function insertBeforePosition(data, position) {
    // your code here
    let current = head;
    let size = head;
    let count = 0;
    let i = 0;
    const newNode = {
      data,
      next: null,
    };

    while (size != null) {
      count++;
      size = size.next;
    }

    if (position <= 0) {
      newNode.next = head;
      head = newNode;
      return head;
    }

    if (position >= count) {
      let tail = head;
      while (tail.next != null) {
        tail = tail.next;
      }
      tail.next = newNode;
      return head;
    }

    while (current != null) {
      i++;
      current = current.next;
      if (position === i) {
        newNode.next = current;
        current = newNode;
      }
    }
    return head;
  }

  return {
    insertBeforePosition,
  };
}
