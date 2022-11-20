import { AppState } from "../AppState.js";
import { Recipe } from "../models/Recipe.js";
import { spoonacularApi } from "./AxiosService.js";

class RecipesService {
  async getRecipes() {
    const res = await spoonacularApi.get("recipes/complexSearch", {
      params: {
        limit: 100,
      },
    });
    console.log(res.data);
    AppState.recipes = res.data.results.map((r) => new Recipe(r));
    console.log(AppState.recipes);
  }
  async getRecipeInformationById(id) {
    const res = await spoonacularApi.get(`recipes/informationBulk/`, {
      params: {
        ids: id,
      },
    });
    console.log(res.data);
  AppState.activeRecipe = res.data
    // console.log(AppState.activeRecipe);
  }
}
export const recipesService = new RecipesService();
