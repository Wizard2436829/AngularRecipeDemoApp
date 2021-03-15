import { EventEmitter, Injectable, Output } from "@angular/core"
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingService } from "../../shopping-list/Services/shopping-list.service";
import { Recipe } from "../recipe.model";


// if you want to inject a service into another service we use this directive.
@Injectable(
    {
        providedIn:'root'
    }
)

export class RecipeService {

    @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
    // @Output() recipe_AddIngredients_toSList = new EventEmitter<Ingredient[]>();

    constructor(private shoppingListInjectObj:ShoppingService){}

    private recipeServiceRecipeArray: Recipe[] = [

        new Recipe(
            'Ramsey Steak',
            'This steak looks alive !',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Olive oil', 200),
                new Ingredient('Rosemary', 5),
                new Ingredient('Butter', 4),
                new Ingredient('Seasoning', 5)
            ]
        ),

        new Recipe(
            'Shrimp Cocktail',
            'The shrimps look disgusted !',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Shrimp', 10),
                new Ingredient('Some Alcohol', 200),
                new Ingredient('Some more Alcohol', 5),
                new Ingredient('Lemon Slice', 1),
                new Ingredient('Ice', 5)
            ]
        )

    ];


    getServiceRecipeArray() {
        return this.recipeServiceRecipeArray.slice();
    }

    recipeSelected(recipeArgs: Recipe) {
        this.recipeSelectedEvent.emit(recipeArgs);
    }

    on_Add_Ingredients_to_SList(IngredientArrObj:Ingredient[]){
        // this.recipe_AddIngredients_toSList.emit(IngredientArrObj);
        this.shoppingListInjectObj.onIngredientAddedFromSList(IngredientArrObj);
        // console.log(IngredientArrObj);
    }

}