function createQuece() {
  const quece = [];

  function getFront() {
    return quece.length > 0 ? quece[0] : undefined;
  }

  function getBack() {
    return quece.length > 0 ? quece[quece.length - 1] : undefined;
  }

  function getSize() {
    return quece.length;
  }

  function enquece(data) {
    quece.push(data);
  }

  function dequece() {
    return quece.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    enquece,
    dequece,
  };
}
