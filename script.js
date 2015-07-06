var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {

    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}


var pizza = new FoodItem('pizza', 400, false, false, true);

var chicken = new FoodItem('chicken', 200, false, true, true);
var rice = new FoodItem('rice', 500, true, false, true);
var beans = new FoodItem('beans', 300, true, true, true);
var tortilla = new FoodItem('tortilla', 100, true, false, true)
//============================== foodItem controls ==============================//
        
FoodItem.prototype.toString = function() {

    return this.name + ' has ' + this.calories + ' calories. Is ' + this.name + ' vegan? ' + this.vegan + '. Is ' + this.name + ' gluten-free? ' + this.glutenFree + '. Is ' + this.name + ' citrus-free? ' + this.citrusFree
}

var pasta = new FoodItem('pasta', 1000, true, false, true);

var chickenFriedSteak = new FoodItem('Chicken Fried Steak', 1600, false, false, true);

var pizzaDesc = pizza.toString();
var pastaDesc = pasta.toString();
var chickenFriedSteakDesc = chickenFriedSteak.toString();

// console.log(pizzaDesc);
// console.log(pastaDesc);
// console.log(chickenFriedSteakDesc);


//============================== drink controls ==============================//
        
var Drink = function(name, description, price, ingredients) {

    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

var coke = new Drink('Coke', 'Bubbly goodness', 240, ['C02', 'All the Sugar', 'Toxic Stuff', 'Children\'s tears']);

Drink.prototype.toString = function() {

    return this.name + ": " + this.description + " | Price = " + this.price + "$" + " | Ingredients: " + this.ingredients.join(', ');
}


//============================== plate controls ==============================//
        
var Plate = function(name, description, price, ingredients) {

    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;    
}

var comboOne = new Plate('Combo One', 'Classic chicken dish', 300, [chicken, beans, rice, tortilla])

var comboTwo = new Plate('Combo Two', 'Classic veggie dish', 200, ['Veggie Medly', 'Rice', 'Beans', 'Tortilla'])

var comboThree = new Plate('Combo Three', 'Classic beef dish', 400, ['Beef', 'Potatos', 'Asparagus', 'Caviar']);


Plate.prototype.toString = function() {

    return "Name: " + this.name + ": " + this.description + " | Price = " + this.price + "$" + " | Ingredients: " + this.ingredients.join(' ') + " |";
}

Plate.prototype.isVegan = function(){

    // reference this.ingredients
    var ingredients = this.ingredients;

    // loop through ingredients
    for(var i = 0; i < ingredients.length; i++){

        // if vegan property of ingredient i is false, whole dish is not vegan
        if(!ingredients[i].vegan){
            
            return false;
        }
    }
    return true;
}

Plate.prototype.isGlutenFree = function(){

    // reference this.ingredients
    var ingredients = this.ingredients;

    // loop through ingredients
    for(var i = 0; i < ingredients.length; i++){

        // if gluten-free property of ingredient i is false, whole dish is not gluten-free
        if(!ingredients[i].glutenFree){

            return false;
        }
    }
    return true;
}

Plate.prototype.isCitrusFree = function(){

    // reference this.ingredients
    var ingredients = this.ingredients;

    // loop through ingredients
    for(var i = 0; i < ingredients.length; i++){

        // if citrusFree property of ingredient i is false, whole dish is not citrusFree
        if(!ingredients[i].citrusFree){

            return false;
        }
    }

    return true;
}

//============================== order control ==============================//
        
var Order = function(plates) {

    this.plates = plates;
}

var myOrder = new Order([comboOne, comboTwo, comboThree])

Order.prototype.toString = function() {

    var arr = [];

    for (var i = 0; i < this.plates.length; i++) {

        arr.push( this.plates[i].toString() );
    }

    return arr.join(' ');
}


//============================== menu control ==============================//
        

var Menu = function(plates) {

    this.plates = plates;  
}

var myMenu = new Menu([comboOne, comboTwo, comboThree, coke]);

Menu.prototype.toString = function() {

    var arr = [];

    for (var i = 0; i < this.plates.length; i++) {

        arr.push( this.plates[i].toString() );
    }

    return arr.join(' ');
}


//============================== restaurant controls ==============================//
        

var Restaurant = function(name, description, menu) {

    this.name = name;
    this.description = description;
    this.menu = menu;
}

var myRestaurant = new Restaurant('Fully and Seth\'s Awesome Eatery', 'This place will blow your mind!', myMenu);

Restaurant.prototype.toString = function() {

    return 'Name: ' + this.name + '. Description: ' + this.description + '| Menu: ' + this.menu.toString();
}


//============================== customer control ==============================//
        
var Customer = function(preferences) {

    this.preferences = preferences;
}

var newCustomer = new Customer("I like chicken")



