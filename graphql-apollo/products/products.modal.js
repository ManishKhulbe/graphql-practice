const products = [
  {
    id: "redshoe",
    description: " Red Shoe",
    price: "43.12",
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: "55.55",
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function productById(id) {
  return products.filter((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  productById(id)[0].reviews.push({ rating, comment });
  console.log("🚀 ~ addNewProductReview ~ productById(id):", productById(id));
  return productById(id)[0]
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  productById,
  addNewProduct,
  addNewProductReview,
};
