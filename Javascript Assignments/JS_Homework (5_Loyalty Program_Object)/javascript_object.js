let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [
        {
            item: "Shampoo",
            quantity: 2, 
            price_$: 3
        },
        {
            item: "Soap",
            quantity: 2, 
            price_$: 2
        },
        {
            item: "Toothpaste",
            quantity: 1, 
            price_$: 3
        }
    ]
}

console.log(`Hi, ${customer.customer_name}! Thank you for continually choosing to shop with us!`);
console.log(`Your current points are: ${customer.points}`);
console.log("Purchased Items:");

let total_bill = 0;

for(let i = 0; i < customer.cart.length; i++){
    let item = customer.cart[i].item;
    let quantity = customer.cart[i].quantity; 
    let price = customer.cart[i]['price_$'];
    let newPrice = price * quantity;
    console.log(`${quantity}x ${item} ----- ${newPrice.toLocaleString("en-PH", {style: "currency", currency: "PHP",})}`);
    total_bill += newPrice;
    customer.points += quantity;
}
console.log(`Total Bill: ${total_bill}`);
console.log(`New Current Points: ${customer.points}`);