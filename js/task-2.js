function getShippingMessage(country, price, deliveryFee) {
  if (
    typeof price !== "number" ||
    typeof deliveryFee !== "number" ||
    typeof country !== "string"
  ) {
    return `Sorry there was an error `;
  }
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
// console.log(getShippingMessage('Sop', 100, 20));
// console.log(getShippingMessage('Spanish', 0, 0));
// console.log(getShippingMessage('Spanish', 10, -12));
// console.log(getShippingMessage( 12, 0, 0));
// console.log(getShippingMessage('Spanish', 'Spanish', 0));
// console.log(getShippingMessage('Spanish', 12, true));
