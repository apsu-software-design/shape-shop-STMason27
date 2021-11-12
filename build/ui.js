"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("./products");
//const View = require("./view");
let products = new products_1();
var View = require("./view");
let view = new View();
//products_1 = new products_1.Product();
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item in the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                letUserSelectItem(); //addItemToCart();
                products.letUserSelectQuantity(); //letUserSelectQuantity();
                var response = readlineSync.question('> ');
                products.quantity.push(parseInt(response));
                console.log(''); //extra empty line for revisiting
                break;
            case '2':
                view.showProductList(products.cart); //removeItemFromCart();
                var response = readlineSync.question('> ');
                var toRemove = parseInt(response);
                products.cart.splice(toRemove, 1);
                products.quantity.splice(toRemove, 1);
                console.log(''); //extra empty line for revisiting
                break;
            case '3':
                view.showCart(products.cart, products.quantity);//viewItemsInCart();
                break;
            case '4':
                view.showPrice(products.cart, products.quantity);//viewCartTotal();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}

function letUserSelectItem() {
    console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            products.addTriangle(); //shopping_cart.push(new products_1.Product("Triangle", 3.5, "It's got three sides!"));
            break;
        case '2':
            products.addSquare(); //shopping_cart.push(new products_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            products.addPentagon(); //shopping_cart.push(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}


