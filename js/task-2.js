function getShippingMessage(country ,price ,deliveryFee ){
    const countryLong = country.length; 
        // Умови на випадок дивних значень
    if( typeof price !== 'number' ){
        return`Sorry there was an error in (price)`
    }
    if(typeof deliveryFee !== 'number'){
        return `Sorry there was an error in (delivery prices)`
    }
    if(typeof country !=='string' || countryLong <= 3 ){
        return `country (${country}) is not known, try another one`;
    }
    const totalPrice = price + deliveryFee;
    if (totalPrice< 0){
        return `Sorry for the problem with the price calculation`;
    }
    return `Shipping to ${country} will cost ${totalPrice} credits`
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
