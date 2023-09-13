import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            "Pizza", 
            "This is the best pizza", 
            "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg",
            [new Ingredient("cheese", 2), new Ingredient("tomatoes", 3)]),
        new Recipe(
            "lazania", 
            "This is the best Lazania", 
            "https://ocdn.eu/pulscms-transforms/1/53wk9kpTURBXy82YTJmNDkxZGY5N2RhYWFlNDIxOWY2MzE2MmI3ZjM0ZS5qcGeTlQMEMc0X6M0Nc5MJpjY2M2M1ZgaTBc0EsM0Cdt4AAaEwAQ/wloska-lazania-zdjecie-ilustracyjne.jpg",
            [new Ingredient("cheese", 2), new Ingredient("tomatoes", 3)])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}