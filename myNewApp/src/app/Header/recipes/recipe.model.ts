import { Ingredient } from "src/app/shared/ingredient.model";

export class Recipe{
    
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredientList:Ingredient[];

    constructor(name:string,description:string,imagePath:string,ingredientList:Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;  
        this.ingredientList = ingredientList;      
    }
}