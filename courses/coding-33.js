function filterProducts(productList) {
  // your code here
  if (typeof productList !== "object") return [];
  const productsArray = [];

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    if (product.price > 100000) productsArray.push(product);
  }

  return productsArray;
}

console.log(
  filterProducts([
    { id: 1, price: 100000 },
    { id: 2, price: 150000 },
    { id: 3, price: 270000 },
  ])
);
