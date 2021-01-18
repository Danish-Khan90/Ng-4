import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'


@Injectable() 
export class RecipeService {

    constructor(private slService: ShoppingListService) {
 
    }

    private recipes: Recipe[] = [
            new Recipe('Biryani', 
            'This is simply a test',
            'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x375.jpg',
            [
                new Ingredient('Tomatoes', '2'),
                new Ingredient('Potatoes', '2')
            ]
            ),
            new Recipe('Qorma', 
            'This is simply a test', 
            'https://funcooking.co.uk/wp-content/uploads/2017/10/qorma-79.jpg',
            [
                new Ingredient('Lamb', '1'),
                new Ingredient('Yogurt', '2')
            ])
        ];

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}