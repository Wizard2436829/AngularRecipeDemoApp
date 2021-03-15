import { EventEmitter, Injectable, OnChanges, OnInit, Output } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Injectable(
    {
        providedIn:'root'
    }
)

export class ShoppingService {
    

    constructor(){}    

    @Output() serviceIngCreatedEvent = new EventEmitter<Ingredient[]>();

    private shoppingServiceIngredientlist: Ingredient[] = [
        new Ingredient('cheese', 2),
        new Ingredient('salt', 2),
        new Ingredient('chicken', 3)
    ];

    returnIngredientsArray(){
        return this.shoppingServiceIngredientlist.slice();
    }

    onIngredientCreatedEvent(IngredientObj: Ingredient) {
        this.shoppingServiceIngredientlist.push(IngredientObj);
        this.serviceIngCreatedEvent.emit(this.shoppingServiceIngredientlist.slice());
    }

    onIngredientAddedFromSList(IngredientArrObj:Ingredient[]){
        console.log(IngredientArrObj);
        this.shoppingServiceIngredientlist.push(...IngredientArrObj);
        console.log(this.shoppingServiceIngredientlist);
        this.serviceIngCreatedEvent.emit(this.shoppingServiceIngredientlist.slice());
    }
    
    

    // onNewIngredientCreated(IngredientObj: Ingredient){
    //     this.shoppingServiceIngredientlist.push(IngredientObj);
    // }

    // onIngredients_Addition_FromRecipes(){

    // }

    
    



}