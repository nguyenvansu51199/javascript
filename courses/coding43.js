// using object
function buildCategoryMapV1(categoryList) {
  // your code here
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};
  return (map = categoryList.reduce((map, category) => {
    map[category.id] = category;
    return map;
  }, {}));
}

console.log(
  buildCategoryMapV1([
    { id: 1, name: "iphone" },
    { id: 2, name: "macbook" },
  ])
);

// using Map
function buildCategoryMapV2(categoryList) {
  // your code here
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};
  const categoryMap = new Map();
  categoryList.forEach((category) => {
    categoryMap.set(category.id, category);
  });
  return categoryMap;
}

console.log(
  buildCategoryMapV2([
    { id: 1, name: "iphone" },
    { id: 2, name: "macbook" },
  ])
);
