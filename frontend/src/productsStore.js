
const productsArray = [
  {
    id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
    title: "TicketBlaster tickets",
    price: 80.00,
  }
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
