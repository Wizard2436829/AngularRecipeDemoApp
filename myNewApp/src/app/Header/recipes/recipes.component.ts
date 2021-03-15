import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})


export class RecipesComponent implements OnInit {

  SelectedRecipeCaught : Recipe;

  constructor(private recipeServiceInjectObj:RecipeService) { }

  ngOnInit() {

    this.recipeServiceInjectObj.recipeSelectedEvent.subscribe(
      (recipe:Recipe) => {
        this.SelectedRecipeCaught = recipe;
      }
    )

  }
  

}
