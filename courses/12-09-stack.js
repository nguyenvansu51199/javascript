function createStack() {
  const stack = [1];
  function getTop() {
    return stack[stack.length - 1];
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function pushStack(data) {
    stack.push(data);
  }

  function pop() {
    return stack.pop();
  }

  return {
    pushStack,
    getTop,
    getSize,
    isEmpty,
    pop,
  };
}

const stack = createStack();
stack.pushStack(3);
stack.pushStack(4);
console.log(createStack().pop());
console.log(createStack().getSize());
console.log(stack.getTop());
console.log(createStack().isEmpty());
