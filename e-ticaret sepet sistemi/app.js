let cart = [];
function addToCart(productName,price){
cart.push({
    name: productName,
    price: price,
})
console.log("Added to cart: " + productName + " - " + price + " TL");
}

function calculateTotal(){
    let total = 0;
    cart.forEach(item => {total += item.price;})
    return total;
}
addToCart("Laptop", 15000);
addToCart("Mouse", 500);
addToCart("Keyboard", 1200);

let totalTutar = calculateTotal();

console.log("TOTAL CART AMOUNT: " + totalTutar + " TL");