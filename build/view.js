"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exports.View = void 0;
//var View = /** @class */ (function (){
class View{

showCart(shopping_cart, quantity_cart){

    // display the contents of cart here
    for (var i = 0; i < shopping_cart.length; i++) {
        console.log("");
        console.log("       Name: " + shopping_cart[i].getName());
        console.log("      Price: " + shopping_cart[i].getPrice());
        console.log("Description: " + shopping_cart[i].getDescription());
        console.log("   Quantity: " + quantity_cart[i]);
    }
}

showPrice(shopping_cart, quantity_cart){

    var total = 0;
    for (var i = 0; i < shopping_cart.length; i++) {
        total += shopping_cart[i].getPrice() * quantity_cart[i];
    }
    console.log("Shopping Cart Total: " + total);

}

showProductList(shopping_cart){

    console.log("Select an item to be removed from the cart.\n  ");
    for (var i = 0; i < shopping_cart.length; i++) {
        console.log(i + ": " + shopping_cart[i].getName());
    }
    
}


}//}());

module.exports = View;