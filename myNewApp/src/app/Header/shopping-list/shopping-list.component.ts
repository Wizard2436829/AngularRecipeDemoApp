import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientsArr : Ingredient[] = [
    new Ingredient('cheese',2),
    new Ingredient('salt',2),
    new Ingredient('chicken',3)
  ];

  constructor() { }

  ngOnInit() {
  }


  onShoppingEdit = function(TempIngredient:Ingredient){

    let demoIngredient = new Ingredient(TempIngredient.name,TempIngredient.amount);
    this.ingredientsArr.push(demoIngredient);
  }

}
