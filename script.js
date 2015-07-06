
//===========================================================================//
                        /* ~~~ FIRST PART OF EXERCISE ~~~ */ 
//===========================================================================//

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {

    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}


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

var chickenDesc = chicken.toString();
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

// adding .toString(); method to Drink proto
Drink.prototype.toString = function() {

    return this.name + ": " + this.description + "\nIngredients: " + this.ingredients.join(', ') + "\nPrice = " + this.price + "$";
}


//============================== plate controls ==============================//
        
var Plate = function(name, description, price, ingredients) {

    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;    
}

var comboOne = new Plate('Combo One', 'Classic chicken dish', 300, ['chicken', 'beans', 'rice', 'tortilla'])

var comboTwo = new Plate('Combo Two', 'Classic veggie dish', 200, ['Veggie Medly', 'Rice', 'Beans', 'Tortilla'])

var comboThree = new Plate('Combo Three', 'Classic beef dish', 400, ['Beef', 'Potatos', 'Asparagus', 'Caviar']);

// Add toString(); method to Plate proto
Plate.prototype.toString = function() {

    return "Name: " + this.name + ": " + this.description + "\nIngredients: " + this.ingredients.join(', ') + "\nPrice = " + this.price + "$";
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

    // Loop over plates
    for (var i = 0; i < this.plates.length; i++) {

        arr.push( this.plates[i].toString() );
    }

    return arr.join(' ');
}

Menu.prototype.create = function() {

    var arr = [];
    var menuItem;
    var plates = this.plates
    
    // Loop over plates    
    for (var i = 0; i < plates.length; i++) {
        
        menuItem = plates[i];

        arr.push( $('<p class="menu-item clearfix"></p>').text(menuItem) );
    }

    return arr;
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

// Create Menu
Restaurant.prototype.create = function() {

    // Restaurant Name
    var restText = this.name;

    // Array of menuItem objects
    var menuObjects = this.menu.create();

    //Create restaurant container
    var theRestaurant = $('<div class = "restaurant"></div>');

    // Loop thru each menuItem in the array of objects that menu.create(); returns
    for (var i = 0; i < menuObjects.length; i++) {
        
        theRestaurant.append(menuObjects[i]);
    }

    theRestaurant.prepend(restText);

    $('body').append(theRestaurant);
}

//============================== customer control ==============================//
        
var Customer = function(preferences) {

    this.preferences = preferences;
}

var newCustomer = new Customer("vegan")


//===========================================================================//
                        /* ~~~ SECOND PART OF THE EXERCISE ~~~ */ 
//===========================================================================//


