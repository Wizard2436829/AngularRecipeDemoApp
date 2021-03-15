import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('inputNameRef',{static:false}) inputNameRefVar:ElementRef;
@ViewChild('inputAmountRef',{static:false}) inputAmountRefVar:ElementRef;

@Output() ShoppingListItem_eventEmitter = new EventEmitter<Ingredient>();

  constructor(private shoppingServiceInjectObj:ShoppingService) { }

  ngOnInit() {
  }

  AddSListItem(){    
    const tempListItemName = this.inputNameRefVar.nativeElement.value;
    const tempListItemAmount = this.inputAmountRefVar.nativeElement.value;
    const newIngredient = new Ingredient(tempListItemName,tempListItemAmount);
    this.shoppingServiceInjectObj.onIngredientCreatedEvent(newIngredient);
  }
  

  

}
