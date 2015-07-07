// $(function(){
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


var chicken = new FoodItem('Chicken', 200, false, true, true);
var rice = new FoodItem('Rice', 500, true, false, true);
var beans = new FoodItem('Beans', 300, true, true, true);
var tortilla = new FoodItem('Tortilla', 100, true, false, true);
var veggieMedly = new FoodItem('Veggie medly', 200, true, true, true);
var beef = new FoodItem('Beef', 400, false, true, true);
var asparagus = new FoodItem('Asparagus', 200, true, true, true);
var potatos = new FoodItem('Potatos', 400, true, true, true);
var caviar = new FoodItem('Caviar', 1500, false, true, true);
var co2 = new FoodItem('Carbon Dioxide', 0, true, true, true);
var sugar = new FoodItem('All the sugar', 1000, true, true, true);
var toxicStuff = new FoodItem('Toxic Stuff', 50, true, true, true);
var childTears = new FoodItem('Tears of children', 20, true, true, true);

//============================== foodItem controls ==============================//
        
FoodItem.prototype.toString = function() {

    return this.name + ' has ' + this.calories + ' calories. Is ' + this.name + ' vegan? ' + this.vegan + '. Is ' + this.name + ' gluten-free? ' + this.glutenFree + '. Is ' + this.name + 'citrus-free? ' + this.citrusFree
}

//============================== drink controls ==============================//
        
var Drink = function(className, name, description, price, ingredients) {

    this.className = className;
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

var coke = new Drink('coke', 'Coke', 'Bubbly goodness', 240, [co2, sugar, toxicStuff, childTears]);

// adding .toString(); method to Drink proto
Drink.prototype.toString = function() {

    return this.name + ": " + this.description + "Ingredients: " + this.ingredients.join(', ') + "Price = " + this.price + "$";
}

// Returns boolean value for vegan
Drink.prototype.isVegan = function(){

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

// Returns boolean value for gluten content
Drink.prototype.isGlutenFree = function(){

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

// Returns boolean value for citrus content
Drink.prototype.isCitrusFree = function(){

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

//============================== plate controls ==============================//
        
var Plate = function(className, name, description, price, ingredients) {
    
    this.className = className;
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;    
}

var comboOne = new Plate('comboOne', 'Combo One', 'Classic chicken dish', 300, [chicken, beans, rice, tortilla])

// var test = comboOne.ingredients.join(' ');

// console.log(test);

var comboTwo = new Plate('comboTwo', 'Combo Two', 'Classic veggie dish', 200, [veggieMedly, rice, beans, tortilla])

var comboThree = new Plate('comboThree', 'Combo Three', 'Classic beef dish', 400, [beef, potatos, asparagus, caviar]);

// Add toString(); method to Plate proto
Plate.prototype.toString = function() {

    var arr = []
    var ingredients = this.ingredients

    for (var i = 0; i < ingredients.length; i++) {

        arr.push(ingredients[i].name)
    }

    return "Name: " + this.name + " Description: " + this.description + " Ingredients: " + arr.join(', ') + " Price = " + this.price + "$";
}

//=========================== Check for preferences in each plate ==============================//
        
// Returns boolean value for vegan
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

// Returns boolean value for gluten content
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

// Returns boolean value for citrus content
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

    return arr;
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
    var itemName;
    var itemDescription;
    var itemIngredients;
    var itemPrice;
    var plates = this.plates;
    

    // Loop over plates    
    for (var i = 0; i < plates.length; i++) {

        var container = $('<div class="item-container ' + plates[i].className + '"></div>')

        itemName = plates[i].name;
        itemDescription = plates[i].description;

        // We only want the names of each ingredient, not all the other stuff that the FoodItem object contains 
            // This returns an array!
        itemIngredients = plates[i].ingredients.map(function(obj){

            return obj.name;
        });

        itemPrice = plates[i].price;

        // Need to append seperate p tags into a container to make line breaks using \n in toString method with white space pre does not allow proper word wrap

        container.append( $('<p class="menu-item"></p>').text(itemName) )
        container.append( $('<p class="menu-item"></p>').text(itemDescription) )
        // Since itemIngredients is an array, we need to join on a ', '
        container.append( $('<p class="menu-item"></p>').text(itemIngredients.join(', ') ) )
        container.append( $('<p class="menu-item"></p>').text(itemPrice + '$') )

        arr.push( container );
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
    var restTitle = $('<h1></h1>').text(restText)

    // Array of menuItem objects
    var menuObjects = this.menu.create();

    //Create restaurant container
    var theRestaurant = $('<div class = "restaurant clearfix"></div>');

    // Loop thru each menuItem in the array of objects that menu.create(); returns
    for (var i = 0; i < menuObjects.length; i++) {
        
        theRestaurant.append(menuObjects[i]);
    }

    theRestaurant.prepend(restTitle);

    $('body').append(theRestaurant);
}

// CREATE THE RESTAURANT
myRestaurant.create();

//============================== customer control ==============================//
        
var Customer = function(vegan, glutenFree, citrusFree, restaurant) {

    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
    this.restaurant = restaurant;
}

var newCustomer = new Customer(false, true, true, myRestaurant)
var oldCustomer = new Customer(true, false, true, myRestaurant)

Customer.prototype.preference = function(){

    // create array for plates
    var menu = this.restaurant.menu;

    var check = menu.plates[0].isVegan();



    for (var i = 0; i < menu.plates.length; i++) {

        // Need to reset for each iteration or else they wont work
        var vegan = true;
        var glutenFree = true;
        var citrusFree = true;

        // debugger;

        var plate = menu.plates[i];

        if ( (this.vegan) && ( menu.plates[i].isVegan() === false ) ) {

            vegan = false;

        }

        if ( (this.glutenFree) && ( menu.plates[i].isGlutenFree() === false) ) {

            glutenFree = false;

        }

        if ( (this.citrusFree) && ( menu.plates[i].isCitrusFree() === false) ) {

            citrusFree = false;
        }

        // If preferences match the plates, we add a highlight class to them
        if (vegan && glutenFree && citrusFree) {

            $('.restaurant').children('.'+menu.plates[i].className).addClass('highlight')
        }
    }
}

var reset = function(){

    $('.restaurant').children().removeClass('highlight');
}
//===========================================================================//
                        /* ~~~ click event ~~~ */ 
//===========================================================================//

// adding total tracker
var total = 0
var priceContainer = $('<div class="price-container clearfix"></div>')
var price = $('<h3 class="price"></h3>')
$('.restaurant').append(priceContainer)
priceContainer.append(price)

$('body').on('click', '.item-container', function(){

    // var confirmation = confirm('Are you sure you want to order ' + this.firstChild.text() + '?')
    var name = $(this.firstChild).text()
    var confirmation = confirm("Are you sure you want " + name + "?");
    

    //================= conditional functionality ==================//
    if( confirmation ){
        var price = $(this.lastChild).text()
        total += parseInt(price, 10)
        $('.price').text('Total = ' + total + '$')
    }    
})

