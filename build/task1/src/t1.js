"use strict";
const cart = [];
while (true) {
    const itemName = prompt('Syötä tuotenimi (jätä tyhjäksi lopettaaksesi):') || "";
    if (itemName === "") {
        break;
    }
    const itemPrice = parseFloat(prompt('Syötä tuotteen hinta:') || "0");
    const itemQuantity = parseInt(prompt('Syötä tuotteen määrä:') || "0", 10);
    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
