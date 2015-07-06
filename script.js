var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {

    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}


var pizza = new FoodItem('pizza', 400, false, false, true);

console.log(pizza);









