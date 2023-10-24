function makeTransaction(quantity, pricePerDroid) {
    // Умова на випадок дивних значень
    if (quantity < 0 || pricePerDroid < 0) {
        return `Sorry, an error occurred`
    }

    return `You ordered ${quantity} droids worth ${
        pricePerDroid * quantity
    } credits!`
}
console.log(makeTransaction(5, 3000))
console.log(makeTransaction(3, 1000))
console.log(makeTransaction(10, 500))
// console.log(makeTransaction(10, 0));
// console.log(makeTransaction(-1, 500));
// console.log(makeTransaction(0, 0));
// console.log(makeTransaction(2, 1));
