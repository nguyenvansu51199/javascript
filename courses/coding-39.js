function createLinkedList() {
  let head = null;
  let count = 0;
  let i = 0;
  function getSize() {
    let size = head;
    if (size == null) return -1;
    while (size != null) {
      count++;
      size = size.next;
    }
  }

  function findIndex() {
    let current = head;
    while (current.next != null) {
      i++;
      current = current.next;
    }
    return i;
  }

  function insertBeforePosition(data, position) {
    // your code here
    const newNode = {
      data: data,
      next: null,
    };
    if (position <= 0) {
      newNode.next = head;
      head = newNode;
      return;
    }

    let tail = head;
    if (position >= count) {
      while (tail.next != null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }

    let idx = head;
    if (position > 0 && position < count) {
      // while (idx != null) {
      //   if (position === i) {
      //     newNode.next = idx;
      //     idx = newNode;
      //   }
      // }

      for (let y = 0; y < i - 1; y++) {
        if (y === position) {
          newNode.next;
        }
      }
    }

    return head;
  }

  return {
    insertBeforePosition,
    getSize,
    findIndex,
  };
}
