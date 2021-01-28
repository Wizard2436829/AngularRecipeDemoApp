import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { ShoppingListComponent } from './Header/shopping-list/shopping-list.component';
import { RecipesComponent } from './Header/recipes/recipes.component';
import { RecipeListComponent } from './Header/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Header/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Header/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './Header/shopping-list/shopping-edit/shopping-edit.component';
import { dropdownclick } from './Directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    dropdownclick
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
