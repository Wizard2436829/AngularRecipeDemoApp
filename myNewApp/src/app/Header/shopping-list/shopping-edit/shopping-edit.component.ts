import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('inputNameRef',{static:false}) inputNameRefVar:ElementRef;
@ViewChild('inputAmountRef',{static:false}) inputAmountRefVar:ElementRef;

@Output() ShoppingListItem_eventEmitter = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  AddSListItem = function(){

    const tempListItemName = this.inputNameRefVar.nativeElement.value;
    const tempListItemAmount = this.inputAmountRefVar.nativeElement.value;
    const newIngredient = new Ingredient(tempListItemName,tempListItemAmount);

    this.ShoppingListItem_eventEmitter.emit(newIngredient);


  }
  

}
