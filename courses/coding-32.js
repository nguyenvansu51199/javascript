// function calcCartTotal(cartItemList) {
//   // your code here
//   if (typeof cartItemList !== 'object') return undefined;
//   let totalCartItem = 0;
// for (let i = 0; i < cartItemList.length; i++) {
//   const cartItem = cartItemList[i];

//   totalCartItem += cartItem.product.price * cartItem.quantity;
// }
//   return totalCartItem;
// }

function calcCartTotal(cartItemList) {
  // your code here
  if (typeof cartItemList !== "object") return undefined;

  return cartItemList.reduce((total, cartItem) => {
    total += cartItem.product.price * cartItem.quantity;
    return total;
  }, 0);
}

console.log(
  calcCartTotal([
    { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
    { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
  ])
);
