import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from './Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})


export class ShoppingListComponent implements OnInit {

  ingredientsArr : Ingredient[];

  constructor(private shoppingListServiceInjectObj:ShoppingService) { }

  ngOnInit() {

    this.ingredientsArr = this.shoppingListServiceInjectObj.returnIngredientsArray();

    this.shoppingListServiceInjectObj.serviceIngCreatedEvent.subscribe(

      (IngredientArrObj:Ingredient[]) => {
        this.ingredientsArr = IngredientArrObj;
      }

    )

  }

  // onShoppingEdit = function(TempIngredient:Ingredient){

  //   let demoIngredient = new Ingredient(TempIngredient.name,TempIngredient.amount);
  //   this.ingredientsArr.push(demoIngredient);
  // }

}
