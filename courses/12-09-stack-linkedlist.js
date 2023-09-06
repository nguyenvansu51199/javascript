function createStack() {
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

  function getTop() {
    if (head == null) return;

    return head;
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

  function pushStack(data) {
    const newNode = {
      data,
      next: null,
    };
    let tail = head;
    if (tail == null) return undefined;

    while (tail.next != null) {
      tail = tail.next;
    }
    tail.next = newNode;
  }

  function pop() {
    // is empty
    if (head == null) return null;
    // has 1 item
    if (head.next == null) {
      return head;
    }
    // has some items
    let secondLast = head;
    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    return secondLast;
  }

  return {
    insertHead,
    pushStack,
    getTop,
    getSize,
    pop,
  };
}

const stack = createStack();
stack.insertHead(9);
stack.pushStack(3);
stack.pushStack(4);
console.log(stack.pop());
console.log(stack.getSize());
console.log(stack.getTop());
