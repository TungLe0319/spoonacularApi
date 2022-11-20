export class Recipe {
  constructor(data) {
    this.id = data.id;
    this.image = data.image;
    this.title = data.title;
    this.instructions = data.instructions;
    this.cheap = data.cheap;
    this.cookingMinutes = data.cookingMinutes;
    this.creditsText = data.creditsText;
    this.diets = data.diets;
    this.dairyFree = data.dairyFree || false;
    this.dishTypes = data.dishTypes;
    this.extendedIngredients = data.extendedIngredients;
    this.glutenFree = data.glutenFree || false;
    this.healthScore = data.healthScore;
    this.occasions = data.occasions;
    this.preparationMinutes = data.preparationMinutes;
    this.pricePerServing = data.pricePerServing;
    this.readyInMinutes = data.readyInMinutes;
    this.servings = data.servings;
    this.summary = data.summary;
    this.vegan = data.vegan || false;
    this.vegetarian = data.vegetarian || false;
    this.veryHealthy = data.veryHealthy || false;
    this.veryPopular = data.veryPopular || false;
  }
}
