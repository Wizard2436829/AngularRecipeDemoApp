import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Output() event_RecipeOnClicked = new EventEmitter<void>();

  @Input() RecipeElement:Recipe;

  constructor(private recipeServiceInjectObj:RecipeService) { }

  ngOnInit() {}

  onRecipeClicked(){

    // this.event_RecipeOnClicked.emit();
    
    this.recipeServiceInjectObj.recipeSelected(this.RecipeElement);

  }

}
