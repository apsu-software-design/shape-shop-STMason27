"use strict";
var readlineSync = require("readline-sync"); //for easier repeated prompts
Object.defineProperty(exports, "__esModule", { value: true });

    class Product{

        cart = new Array();
        quantity = new Array();

        constructor(){
        
            const triangle = new Triangle(); // triangle object
            let square = new Square(); // square object
            let pentagon = new Pentagon(); // pentagon object

        }
        

        addTriangle(){ // •add a new product
            this.cart.push(new Triangle());
           }

        addSquare(){ // •add a new product
            this.cart.push(new Square);
           }

        addPentagon(){ // •add a new product
            this.cart.push(new Pentagon);
           }

        removeProduct(num){//•remove a product based on the index number of that product in a list
            this.cart.pop[num];
        }

        showListOfProducts(){//•return a list of all products
            return shopping_cart; // !!! Not sure about this !!!
        }

        letUserSelectQuantity() {
            console.log("How many of this shape would you like to purchase?\n  ");

        }

        

    }

    // Classes bellow for making the three shapes. 
   
    class Triangle{
        constructor(){
            this.name = "Traingle";
            this.price = 3.5;
            this.description = "Its got three sides!";
        }
    
        getName = function () { return this.name; };
        getPrice = function () { return this.price; };
        getDescription = function () { return this.description; };
    
    }
    class Square{
        constructor(){
            this.name = "Square";
            this.price = 4.5;
            this.description = "It's got four sides!";
        }
    
        getName = function () { return this.name; };
        getPrice = function () { return this.price; };
        getDescription = function () { return this.description; };
    
    }
    
    class Pentagon{
        constructor(){
            this.name = "Pentagon";
            this.price = 5.5;
            this.description = "It's got five sides!";
        }
    
        getName = function () { return this.name; };
        getPrice = function () { return this.price; };
        getDescription = function () { return this.description; };
    
    }
    module.exports = Product;

