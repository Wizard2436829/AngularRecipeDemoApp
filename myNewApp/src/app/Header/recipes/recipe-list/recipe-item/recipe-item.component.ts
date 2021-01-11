import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() event_RecipeOnClicked = new EventEmitter<void>();

  @Input() RecipeElement:Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(){

    this.event_RecipeOnClicked.emit();

  }

}
