import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  constructor(private recipeServiceInjectObj:RecipeService) { }

  @Input() RecipeDetailInjectObj : Recipe; 

  On_click_addIngredients_SList(){    
    this.recipeServiceInjectObj.on_Add_Ingredients_to_SList(this.RecipeDetailInjectObj.ingredientList);
    console.log(this.RecipeDetailInjectObj.ingredientList);
  }

}
