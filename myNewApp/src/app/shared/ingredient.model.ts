export class Ingredient{
    
    //old way to do this.
    
    // public name:string;
    // public amount:number;

    // constructor(tempName:string,tempAmount:number){
    //     this.name=tempName;
    //     this.amount = tempAmount;
    // }
    
    //TypeScript enables a new syntax to instantiate the model class.
    constructor(public name: string,public amount: number){}
    
}
